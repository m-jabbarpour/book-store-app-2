import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logos/logo.svg";
import CartIcon from "../custom/CartIcon";
import DropDownMenu from "../custom/DropDownMenu";
import SearchBarLg from "./SearchBarLg";
import ThemeToggleButton from "./ThemeToggleButton";
import UserLogin from "./UserLogin";

const HeaderMd: React.FC = () => {
  return (
    <header className="hidden md:block sticky top-0 z-20 shadow-md shadow-slate-500 bg-white dark:bg-slate-900 dark:text-slate-300">
      <div className="container py-4 rounded-lg flex justify-between">
        <div className="flex gap-x-4 items-center">
          <Link href="/">
            <Image
              src={logo}
              width={48}
              height={48}
              alt="فروشگاه کتاب"
              className="cursor-pointer"
            />
          </Link>
          <DropDownMenu />
          <SearchBarLg />
        </div>
        <div className="flex gap-x-4 items-center">
          {/* <Link href="/management/login">
            <span className="hover:text-primary cursor-pointer">مدیریت</span>
          </Link> */}
          {/* <UserLogin /> */}
          <CartIcon />
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};
export default HeaderMd;
