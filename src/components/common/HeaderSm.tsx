import Image from "next/image";
import Link from "next/link";

import { UserCircleIcon } from "@heroicons/react/20/solid";

import CartIcon from "../custom/CartIcon";
import MobileDrawer from "../custom/MobileDrawer";
import SearchBarSm from "./SearchBarSm";

import logo from "../../../public/logos/logo.svg";

const HeaderSm: React.FC = () => {
  return (
    <header className="md:hidden h-[5rem] shadow-md shadow-slate-500 bg-white dark:bg-slate-900 dark:text-slate-300">
      <div className="container py-4 rounded-lg flex justify-between">
        <div className="flex gap-x-4 items-center">
          <MobileDrawer />
          <SearchBarSm />
        </div>
        <Link href="/">
          <Image src={logo} width={48} height={48} alt="فروشگاه کتاب" />
        </Link>
        <div className="flex gap-x-4 items-center">
          <span>مدیریت</span>
          <UserCircleIcon className="w-6" />
          <CartIcon />
        </div>
      </div>
    </header>
  );
};

export default HeaderSm;
