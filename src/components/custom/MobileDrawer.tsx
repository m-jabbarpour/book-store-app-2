import { Bars3Icon } from "@heroicons/react/20/solid";

import { useTypedDispatch, useTypedSelector } from "@/redux/store";
import { changeIsDrawerActive } from "../../redux/slices/isDrawerActive";

import Categories from "./Categories";

const MobileDrawer: React.FC = () => {
  const isDrawerActive = useTypedSelector(
    (store) => store.isDrawerActive.value
  );
  const dispatch = useTypedDispatch();

  const showDrawer = () => {
    dispatch(changeIsDrawerActive(true));
  };
  const hideDrawer = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    dispatch(changeIsDrawerActive(false));
  };

  return (
    <>
      <Bars3Icon className="w-6" onClick={showDrawer} />
      <div
        className={`fixed top-0 right-0 w-full h-full z-10 ${
          isDrawerActive ? "visible bg-modal" : "invisible bg-transparent"
        } transition duration-300 ease-in-out`}
        onClick={hideDrawer}
      >
        <div
          className={`bg-white h-full z-10 fixed top-0 ${
            isDrawerActive ? "right-0" : "right-[-100%]"
          } p-6  transition-[right] duration-300 ease-in-out`}
          onClick={(event) => event.stopPropagation()}
        >
          <h1 className="font-bold text-xl mb-6">دسته‌بندی</h1>
          <Categories />
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
