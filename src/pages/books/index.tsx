import { useEffect } from "react";

import Head from "next/head";

import BooksContainer from "@/components/custom/BooksContainer";
import SideBar from "@/components/custom/SideBar";
import Sort from "@/components/custom/Sort";
import CommonLayout from "@/layouts/CommonLayout";
import NoBookFound from "@/components/custom/NoBookFound";

import { useTypedDispatch, useTypedSelector } from "@/redux/store";
import { fetchBooks } from "@/redux/slices/booksSlice";
import {
  setDisplayedBooks,
  sortDisplayedBooks,
} from "@/redux/slices/displayedBooksSlice";

const Books: React.FC = () => {
  const dispatch = useTypedDispatch();
  const books = useTypedSelector((store) => store.books);
  const filteredAuthors = useTypedSelector(
    (store) => store.filteredAuthors.value
  );
  const filteredPublications = useTypedSelector(
    (store) => store.filteredPublications.value
  );
  const filteredSubCategory = useTypedSelector(
    (store) => store.filteredSubCategory.value
  );
  const sortation = useTypedSelector((store) => store.sortation.value);
  const displayedBooks = useTypedSelector(
    (store) => store.displayedBooks.value
  );

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  useEffect(() => {
    if (books.status === "success") {
      dispatch(
        setDisplayedBooks({
          books: books.value,
          filteredAuthors,
          filteredPublications,
          filteredSubCategory,
        })
      );
    }
  }, [
    books.status,
    filteredAuthors,
    filteredPublications,
    filteredSubCategory,
    dispatch,
  ]);

  useEffect(() => {
    dispatch(sortDisplayedBooks(sortation));
  }, [sortation, dispatch]);

  return (
    <>
      <Head>
        <title>طاقچه | کتاب‌ها</title>
      </Head>
      <CommonLayout>
        <div className="container flex flex-col md:flex-row dark:bg-slate-800">
          <SideBar />
          <div className="grow">
            <Sort />
            {displayedBooks.length > 0 ? (
              <BooksContainer books={displayedBooks} />
            ) : (
              <NoBookFound />
            )}
          </div>
        </div>
      </CommonLayout>
    </>
  );
};

export default Books;
