import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { useTypedDispatch } from "@/redux/store";
import { setFilteredSubCategory } from "../../redux/slices/filteredSubCategory";

import BookSwiper from "./BookSwiper";

import { Book } from "@/types";

interface Props {
  subCategory: string;
  books: Book[];
}

const BookSubCategory: React.FC<Props> = ({ subCategory, books }) => {
  const dispatch = useTypedDispatch();
  const router = useRouter();

  const [booksOfSelectedCategory, setBooksOfSelectedCategory] = useState<
    Book[]
  >([]);

  useEffect(() => {
    setBooksOfSelectedCategory(
      books.filter((book) => book.subCategory === subCategory)
    );
  }, [books, subCategory]);

  const goToSelectedSubCategory = () => {
    dispatch(setFilteredSubCategory(subCategory));
    router.push("/books");
  };

  return (
    <div className="container pt-4 pb-4 sm:pt-8 sm:pb-12 bg-neutral-100 dark:bg-slate-900">
      <div className="flex justify-between mb-6">
        <h2 className="text-sm sm:text-lg font-bold dark:text-slate-200">
          {subCategory}
        </h2>
        <span
          className="text-xs sm:text-base hover:text-primary text-gray-500 dark:text-slate-300 dark:hover:text-primary cursor-pointer"
          onClick={goToSelectedSubCategory}
        >
          مشاهده همه
        </span>
      </div>
      <BookSwiper books={booksOfSelectedCategory} />
    </div>
  );
};

export default BookSubCategory;
