import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import {
  decrementBook,
  incrementBook,
  updateCartValues,
} from "../../redux/slices/cartSlice";

function ChangeNumberButtons({ currentBook }) {
  const [number, setNumber] = useState(currentBook.number);
  const dispatch = useDispatch();

  const handlePlus = () => {
    setNumber((prev) => prev + 1);
    dispatch(incrementBook(currentBook));
    dispatch(updateCartValues());
  };
  const handleMinus = () => {
    setNumber((prev) => prev - 1);
    dispatch(decrementBook(currentBook));
    dispatch(updateCartValues());
  };

  return (
    <div>
      <div className="w-fit mx-auto flex items-center overflow-hidden rounded shadow">
        <div className="p-2 cursor-pointer bg-primary" onClick={handlePlus}>
          <PlusIcon className="w-4 text-white " />
        </div>
        <div className="w-[32px] text-center text-xs bg-white p-2">
          <span>{number}</span>
        </div>
        <div className="p-2 cursor-pointer bg-primary" onClick={handleMinus}>
          <MinusIcon className="w-4 text-white" />
        </div>
      </div>
    </div>
  );
}

export default ChangeNumberButtons;
