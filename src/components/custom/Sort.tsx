import { Bars3Icon } from "@heroicons/react/24/outline";

import { useTypedDispatch, useTypedSelector } from "@/redux/store";
import { setSortation } from "../../redux/slices/sortationSlice";

import { SortationMode } from "@/types";

const Sort: React.FC = () => {
  const sortation = useTypedSelector((store) => store.sortation.value);
  const dispatch = useTypedDispatch();
  const onOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSortation(event.target.value as SortationMode));
  };
  return (
    <div className="flex items-center gap-2 bg-white rounded-lg mt-4 md:mt-8 p-3">
      <Bars3Icon className="w-6 hidden sm:block" />
      <span className="hidden sm:block">مرتب‌سازی بر اساس:</span>
      <form className="flex justify-around grow">
        <div>
          <input
            type="radio"
            name="option"
            id="highestRate"
            value="highestRate"
            className="peer w-0 opacity-0 fixed"
            checked={sortation === "highestRate"}
            onChange={onOptionChange}
          />
          <label
            htmlFor="highestRate"
            className="cursor-pointer px-2 py-1 rounded hover:text-[#28C5CC] hover:font-bold peer-checked:bg-[#28C5CC] peer-checked:text-white peer-checked:font-bold peer-checked:transition-all peer-checked:duration-300"
          >
            محبوب‌ترین
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="option"
            id="highestPrice"
            value="highestPrice"
            className="peer w-0 opacity-0 fixed"
            checked={sortation === "highestPrice"}
            onChange={onOptionChange}
          />
          <label
            htmlFor="highestPrice"
            className="cursor-pointer px-2 py-1 rounded hover:text-[#28C5CC] hover:font-bold peer-checked:bg-[#28C5CC] peer-checked:text-white peer-checked:font-bold peer-checked:transition-all peer-checked:duration-300"
          >
            گران‌ترین
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="option"
            id="lowestPrice"
            value="lowestPrice"
            className="peer w-0 opacity-0 fixed"
            checked={sortation === "lowestPrice"}
            onChange={onOptionChange}
          />
          <label
            htmlFor="lowestPrice"
            className="cursor-pointer px-2 py-1 rounded hover:text-[#28C5CC] hover:font-bold peer-checked:bg-[#28C5CC] peer-checked:text-white peer-checked:font-bold peer-checked:transition-all peer-checked:duration-300"
          >
            ارزان‌ترین
          </label>
        </div>
      </form>
    </div>
  );
};

export default Sort;
