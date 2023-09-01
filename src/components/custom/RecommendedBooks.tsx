import { useEffect, useState } from "react";

import { useTypedDispatch, useTypedSelector } from "@/redux/store";
import { fetchBooks } from "../../redux/slices/booksSlice";

import BookSwiper from "./BookSwiper";

import { Book } from "@/types";

interface Props {
  currentBook: Book;
  property: "authors" | "publications" | "subCategory";
}

const RecommendedBooks: React.FC<Props> = ({ currentBook, property }) => {
  const books = useTypedSelector((store) => store.books);
  const dispatch = useTypedDispatch();

  const [otherBooksOfProperty, setOtherBooksOfProperty] = useState<Book[]>([]);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  useEffect(() => {
    if (books.status === "success") {
      let filteredBooks: Book[] = [];
      if (property === "authors") {
        filteredBooks = books.value.filter(
          (book) =>
            book.authors.some((author) =>
              currentBook.authors.includes(author)
            ) && book.id !== currentBook.id
        );
      } else {
        filteredBooks = books.value.filter(
          (book) =>
            book[property] === currentBook[property] &&
            book.id !== currentBook.id
        );
      }
      setOtherBooksOfProperty(filteredBooks);
    }
  }, [books.status]);

  if (otherBooksOfProperty.length === 0) return <></>;

  return (
    <div className="container pt-4 pb-6 sm:pt-8 sm:pb-12 bg-neutral-100 dark:bg-slate-900">
      <div className="flex justify-between mb-6">
        <h2 className="text-sm sm:text-lg font-bold dark:text-slate-200">{`سایر کتاب‌های ${currentBook[property]}`}</h2>
      </div>
      <BookSwiper books={otherBooksOfProperty} />
    </div>
  );
};

export default RecommendedBooks;
