import { useTypedDispatch, useTypedSelector } from "@/redux/store";
import { setManagementOption } from "../../redux/slices/managementMunu";

const ManagementMenu: React.FC = () => {
  const managementMenu = useTypedSelector((store) => store.managementMenu);
  const dispatch = useTypedDispatch();

  return (
    <form className="flex gap-2 border-2 shadow py-1 rounded">
      <div>
        <input
          type="radio"
          name="option"
          id="books"
          value="books"
          className="peer w-0 opacity-0 fixed"
          checked={managementMenu.option === "books"}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(
              setManagementOption(event.target.value as "books" | "orders")
            )
          }
        />
        <label
          htmlFor="books"
          className="cursor-pointer px-2 py-1 rounded hover:text-primary hover:font-bold peer-checked:bg-primary peer-checked:text-white peer-checked:font-bold peer-checked:transition-all peer-checked:duration-300 peer-checked:shadow"
        >
          کتاب‌ها
        </label>
      </div>
      <div>
        <input
          type="radio"
          name="option"
          id="orders"
          value="orders"
          className="peer w-0 opacity-0 fixed"
          checked={managementMenu.option === "orders"}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(
              setManagementOption(event.target.value as "books" | "orders")
            )
          }
        />
        <label
          htmlFor="orders"
          className="cursor-pointer px-2 py-1 rounded hover:text-primary hover:font-bold peer-checked:bg-primary peer-checked:text-white peer-checked:font-bold peer-checked:transition-all peer-checked:duration-300"
        >
          سفارش‌ها
        </label>
      </div>
    </form>
  );
};

export default ManagementMenu;
