import Image from "next/image";

import ChangeNumberButtons from "./ChangeNumberButtons";

import { BookInCart } from "@/types";

interface Props {
  addedBooks: BookInCart[];
}

const CartTableSm: React.FC<Props> = ({ addedBooks }) => {
  return (
    <div className="sm:hidden w-full px-2">
      {addedBooks.map((addedBook) => (
        <div
          key={addedBook.id}
          className="flex gap-4 py-4 border-b border-neutral-300"
        >
          <div className="relative w-[60px] h-[88.8px] rounded overflow-hidden shadow-lg">
            <Image
              src={addedBook.image}
              alt={addedBook.title}
              width={200}
              height={296}
            />
          </div>

          <div className="flex flex-col grow justify-between">
            <h6 className="font-bold truncate">{addedBook.title}</h6>
            <span>{addedBook.price.toLocaleString("fa-IR")} تومان</span>
            <div className="self-end">
              <ChangeNumberButtons currentBook={addedBook} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartTableSm;
