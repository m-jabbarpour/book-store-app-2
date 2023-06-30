import { useEffect, useId, useState } from "react";

import { XMarkIcon } from "@heroicons/react/20/solid";

import { useTypedDispatch, useTypedSelector } from "@/redux/store";
import { addBook, editBook } from "../../redux/slices/booksSummarySlice";
import { showEditBookModal } from "../../redux/slices/editBookModalSlice";

const EditBookModal: React.FC = () => {
  const editBookModal = useTypedSelector((store) => store.editBookModal.value);
  const selectedBook = useTypedSelector((store) => store.selectedBook.value);
  const isEditBookActive = useTypedSelector(
    (store) => store.isEditBookActive.value
  );
  const dispatch = useTypedDispatch();

  const id = useId()

  const [titleInput, setTitleInput] = useState<string>("");
  const [priceInput, setPriceInput] = useState<string>("");
  const [imageInput, setImageInput] = useState<string>("");
  const [quantityInput, setQuantityInput] = useState<string>("");
  const [categoryInput, setCategoryInput] = useState<string>("");
  const [subCategoryInput, setSubCategoryInput] = useState<string>("");

  const emptyAllInputs = () => {
    setTitleInput("");
    setCategoryInput("");
    setSubCategoryInput("");
    setPriceInput("");
    setQuantityInput("");
    setImageInput("");
  };

  useEffect(() => {
    if (isEditBookActive && selectedBook) {
      setTitleInput(selectedBook.title);
      setCategoryInput(selectedBook.category);
      setSubCategoryInput(selectedBook.subCategory);
      setPriceInput(String(selectedBook.price));
      setQuantityInput(String(selectedBook.quantity));
      setImageInput(selectedBook.image);
    }
  }, [selectedBook, isEditBookActive]);

  const closeModal = () => {
    dispatch(showEditBookModal(false));
    emptyAllInputs();
  };

  const handleAddBook = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newBook = {
      id,
      title: titleInput,
      category: categoryInput,
      subCategory: subCategoryInput,
      image: imageInput,
      price: Number(priceInput),
      quantity: Number(quantityInput),
    };
    dispatch(addBook(newBook));
    emptyAllInputs();
    dispatch(showEditBookModal(false));
  };

  const handleEditBook = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const editedBook = {
      ...selectedBook,
      id: selectedBook?.id!,
      title: titleInput,
      image: imageInput,
      category: categoryInput,
      subCategory: subCategoryInput,
      price: Number(priceInput),
      quantity: Number(quantityInput),
    };
    dispatch(editBook(editedBook));
    emptyAllInputs();
    dispatch(showEditBookModal(false));
  };

  if (editBookModal) {
    return (
      <div className="w-full h-[100%] fixed z-10 right-0 top-0 flex items-center bg-[#00000077]">
        <div className="w-1/2 mx-auto rounded-lg p-5 overflow-hidden bg-neutral-200">
          <div className="flex justify-center pb-3">
            <h1 className="font-bold text-lg">
              {isEditBookActive ? "ویرایش" : "افزودن"} کتاب
            </h1>
            <XMarkIcon
              className="w-6 cursor-pointer justify-self-end mr-auto"
              onClick={closeModal}
            />
          </div>
          <form
            className="flex flex-col"
            onSubmit={isEditBookActive ? handleEditBook : handleAddBook}
          >
            <label htmlFor="title">عنوان کتاب:</label>
            <input
              className="focus:outline-none rounded p-2 mb-3 focus:shadow"
              name="title"
              type="text"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
            />
            <label htmlFor="image">لینک تصویر:</label>
            <input
              className="focus:outline-none rounded p-2 mb-3 focus:shadow"
              name="image"
              type="url"
              value={imageInput}
              onChange={(e) => setImageInput(e.target.value)}
            />
            <div className="flex gap-4">
              <div className="flex flex-col w-1/2">
                <label htmlFor="category">دسته:</label>
                <select
                  className="focus:outline-none rounded p-2 mb-3 focus:shadow"
                  name="category"
                  onChange={(e) => setCategoryInput(e.target.value)}
                >
                  <option
                    value="روان‌شناسی و موفقیت"
                    selected={"روان‌شناسی و موفقیت" === categoryInput}
                  >
                    روان‌شناسی و موفقیت
                  </option>
                  <option
                    value="رمان و داستان"
                    selected={"رمان و داستان" === categoryInput}
                  >
                    رمان و داستان
                  </option>
                </select>
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="subCategory">زیردسته:</label>
                <select
                  className="focus:outline-none rounded p-2 mb-3 focus:shadow"
                  name="subCategory"
                  onChange={(e) => setSubCategoryInput(e.target.value)}
                >
                  {categoryInput === "روان‌شناسی و موفقیت" ? (
                    <>
                      <option
                        value="توسعه فردی"
                        selected={"توسعه فردی" === subCategoryInput}
                      >
                        توسعه فردی
                      </option>
                      <option
                        value="خانواده و ازدواج"
                        selected={"خانواده و ازدواج" === subCategoryInput}
                      >
                        خانواده و ازدواج
                      </option>
                    </>
                  ) : categoryInput === "رمان و داستان" ? (
                    <>
                      <option
                        value="داستان ایرانی"
                        selected={"داستان ایرانی" === subCategoryInput}
                      >
                        داستان ایرانی
                      </option>
                      <option
                        value="داستان خارجی"
                        selected={"داستان خارجی" === subCategoryInput}
                      >
                        داستان خارجی
                      </option>
                    </>
                  ) : (
                    ""
                  )}
                </select>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col w-1/2">
                <label htmlFor="price">قیمت:</label>
                <input
                  className="focus:outline-none rounded p-2 mb-3 focus:shadow"
                  name="price"
                  type="number"
                  step="100"
                  value={priceInput}
                  onChange={(e) => setPriceInput(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="quantity">موجودی:</label>
                <input
                  className="focus:outline-none rounded p-2 mb-6 focus:shadow"
                  name="quantity"
                  type="number"
                  value={quantityInput}
                  onChange={(e) => setQuantityInput(e.target.value)}
                />
              </div>
            </div>

            <button className="bg-primary font-bold text-white rounded p-2 cursor-pointer hover:shadow">
              {isEditBookActive ? "ثبت تغییرات" : "ثبت کتاب جدید"}
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default EditBookModal;
