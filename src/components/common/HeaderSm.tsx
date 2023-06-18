import SearchBarSm from "./SearchBarSm";
import MobileDrawer from "../custom/MobileDrawer";
import Image from "next/image";
import React from "react";
import logo from "../../../public/logos/logo.svg";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import CartIcon from "../custom/CartIcon";

function HeaderSm() {
  return (
    <header className="md:hidden h-[5rem] shadow-lg">
      <div className="container py-4 rounded-lg flex justify-between">
        <div className="flex gap-x-4 items-center">
          <MobileDrawer />
          <SearchBarSm />
        </div>
        <Link href="/">
          <Image layout="fixed" src={logo} width="48" height="48" />
        </Link>
        <div className="flex gap-x-4 items-center">
          <span>مدیریت</span>
          <UserCircleIcon className="w-6" />
          <CartIcon />
        </div>
      </div>
    </header>
  );
}

export default HeaderSm;
