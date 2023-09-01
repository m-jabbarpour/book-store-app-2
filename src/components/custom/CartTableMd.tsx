import Image from "next/image";

import { TrashIcon } from "@heroicons/react/24/outline";

import ChangeNumberButtons from "./ChangeNumberButtons";

import { BookInCart } from "@/types";

interface Props {
  addedBooks: BookInCart[];
}

const CartTableMd: React.FC<Props> = ({ addedBooks }) => {
  return (
    <div className="hidden sm:block w-full md:w-3/5 md:pl-3 my-4">
      <table className="table-auto w-full text-center">
        <thead>
          <tr className="border-b-2 border-b-neutral-300">
            <th className="pb-3 pr-7 text-right">کتاب</th>
            <th className="pb-3">قیمت</th>
            <th className="pb-3">تعداد</th>
            <th className="pb-3">قیمت کل</th>
            <th className="pb-3"></th>
          </tr>
        </thead>
        <tbody>
          {addedBooks.map((addedBook) => (
            <tr key={addedBook.id} className="border-b-2 border-b-neutral-300">
              <td className="p-3 flex gap-3 items-center">
                <div className="relative w-[60px] h-[88.8px] rounded overflow-hidden shadow-lg">
                  <Image
                    src={addedBook.image}
                    alt={addedBook.title}
                    width={200}
                    height={296}
                  />
                </div>
                <h5 className="hidden sm:block md:hidden lg:block">
                  {addedBook.title}
                </h5>
              </td>
              <td className="p-3">{addedBook.price.toLocaleString("fa-IR")}</td>
              <td className="p-3">
                <ChangeNumberButtons currentBook={addedBook} />
              </td>
              <td className="p-3">
                {(addedBook.number! * addedBook.price).toLocaleString("fa-IR")}
              </td>
              <td className="p-3 text-center">
                <div className="bg-white dark:bg-slate-950 rounded w-fit p-1 shadow">
                  <TrashIcon className="w-5" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTableMd;
