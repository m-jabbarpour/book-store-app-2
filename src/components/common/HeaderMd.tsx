import Image from "next/image";
import Link from "next/link";

import { UserCircleIcon } from "@heroicons/react/20/solid";

import logo from "../../../public/logos/logo.svg";
import SearchBarLg from "./SearchBarLg";
import CartIcon from "../custom/CartIcon";
import DropDownMenu from "../custom/DropDownMenu";

const HeaderMd: React.FC = () => (
  <header className="hidden md:block shadow-lg">
    <div className="container py-4 rounded-lg flex justify-between">
      <div className="flex gap-x-4 items-center">
        <Link href="/">
          <Image
            src={logo}
            width={48}
            height={48}
            alt="فروشگاه کتاب"
            className=" cursor-pointer"
          />
        </Link>
        <DropDownMenu />
        <SearchBarLg />
      </div>
      <div className="flex gap-x-4 items-center">
        <Link href="/management/login">
          <span className=" cursor-pointer">مدیریت</span>
        </Link>
        <Link href="/login">
          <UserCircleIcon className="w-6 cursor-pointer" />
        </Link>
        <CartIcon />
      </div>
    </div>
  </header>
);
export default HeaderMd;
