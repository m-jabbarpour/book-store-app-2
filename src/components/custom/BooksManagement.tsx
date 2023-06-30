import { useEffect } from "react";

import Image from "next/image";

import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/outline";

import { useTypedDispatch, useTypedSelector } from "@/redux/store";
import { deleteBook } from "../../redux/slices/booksSummarySlice";
import { setSelectedBook } from "../../redux/slices/selectedBookSlice";
import { showEditBookModal } from "../../redux/slices/editBookModalSlice";
import { changeIsEditBookActive } from "../../redux/slices/isEditBookActiveSlice";

import EditBookModal from "./EditBookModal";

import { BookSummary } from "@/types";

interface Props {
  booksSummary: BookSummary[];
}

const BooksManagement: React.FC<Props> = ({ booksSummary }) => {
  const dispatch = useTypedDispatch();
  const editBookModal = useTypedSelector((store) => store.editBookModal.value);

  useEffect(() => {
    if (editBookModal)
      document.querySelector("body")?.classList.add("active-modal");
    else document.querySelector("body")?.classList.remove("active-modal");
  }, [editBookModal]);

  const handleAddBook = () => {
    dispatch(changeIsEditBookActive(false));
    dispatch(showEditBookModal(true));
  };

  const handleDeleteBook = (id: string) => {
    dispatch(deleteBook(id));
  };

  const handleEditBook = (book: BookSummary) => {
    dispatch(setSelectedBook(book));
    dispatch(changeIsEditBookActive(true));
    dispatch(showEditBookModal(true));
  };

  return (
    <div>
      <div className="container flex flex-col py-6 rounded-lg justify-between">
        <button
          className="bg-primary rounded font-bold text-white p-2 mb-6 w-fit flex items-center gap-2"
          onClick={handleAddBook}
        >
          <span>افزودن کتاب جدید</span>
          <PlusCircleIcon className="w-6" />
        </button>
        <div className="flex text-center w-full border-b-2 border-b-neutral-300 pb-2 font-bold">
          <h3 className="w-[5%]">ردیف</h3>
          <h3 className="w-[5%]">تصویر</h3>
          <h3 className="w-[25%]">عنوان</h3>
          <h3 className="w-[15%]">دسته</h3>
          <h3 className="w-[15%]">زیردسته</h3>
          <h3 className="w-[15%]">قیمت</h3>
          <h3 className="w-[10%]">موجودی</h3>
          <h3 className="w-[10%]"></h3>
        </div>
        {booksSummary.map((book, index) => (
          <div
            className="flex items-center text-center w-full border-b-2 border-b-neutral-300 py-2"
            key={book.id}
          >
            <h3 className="w-[5%]">{index + 1}</h3>
            <div className="w-[5%] ">
              <div className="relative mx-auto shrink-0 w-[30px] h-[44.4px] rounded overflow-hidden shadow-lg">
                <Image
                  src={book.image}
                  alt={book.title}
                  width={200}
                  height={296}
                />
              </div>
            </div>
            <h3 className="w-[25%] truncate">{book.title}</h3>
            <h3 className="w-[15%]">{book.category}</h3>
            <h3 className="w-[15%]">{book.subCategory}</h3>
            <h3 className="w-[15%]">
              {book.price.toLocaleString("fa-IR")} تومان
            </h3>
            <h3 className="w-[10%]">{book.quantity.toLocaleString("fa-IR")}</h3>
            <div className="w-[10%] flex justify-center items-center gap-4">
              <div
                className="bg-white rounded w-fit p-1 shadow cursor-pointer"
                onClick={() => handleDeleteBook(book.id)}
              >
                <TrashIcon className="w-5" />
              </div>
              <div
                className="bg-white rounded w-fit p-1 shadow cursor-pointer"
                onClick={() => handleEditBook(book)}
              >
                <PencilIcon className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <EditBookModal />
    </div>
  );
};

export default BooksManagement;
