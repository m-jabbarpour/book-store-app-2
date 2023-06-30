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
    <div className="container pt-4 pb-6 sm:pt-8 sm:pb-12 bg-neutral-100">
      <div className="flex justify-between mb-6">
        <h2 className="text-sm sm:text-lg font-bold">{subCategory}</h2>
        <span
          className="text-xs sm:text-base text-gray-500 cursor-pointer"
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
