import { useRouter } from "next/router";

import DiscountCodeInput from "./DiscountCodeInput";

import { Cart } from "@/types";

interface Props {
  cart: Cart;
}

const OrderDetails: React.FC<Props> = ({ cart }) => {
  const router = useRouter();

  const goToFinalizeOrderPage = () => {
    router.push("/login");
    // router.push("/finalize-order");
  };

  return (
    <div className="w-full md:w-2/5 md:mr-5 mb-4 p-4 bg-white dark:bg-slate-950 rounded-lg shadow-md">
      <div className="relative mt-4 mb-8">
        <hr className="border-none h-[2px] bg-gray-400" />
        <div className="absolute top-[-14px] left-1/2 translate-x-[-50%] px-3 font-bold bg-white dark:bg-slate-950">
          جزئیات سفارش
        </div>
      </div>

      <DiscountCodeInput />
      <div className="flex justify-between mt-4">
        <span>مبلغ کل بدون تخفیف</span>
        <span>{cart.subTotal.toLocaleString("fa-IR")} تومان</span>
      </div>
      <div className="flex justify-between mt-4 text-red-500">
        <span>سود شما</span>
        <span>{cart.discount.toLocaleString("fa-IR")} تومان</span>
      </div>
      <div className="flex justify-between mt-4">
        <span>مبلغ کل با تخفیف</span>
        <span>{cart.total.toLocaleString("fa-IR")} تومان</span>
      </div>
      <button
        className="bg-primary font-bold text-white rounded p-2 cursor-pointer hover:shadow mt-5 w-full"
        onClick={goToFinalizeOrderPage}
      >
        نهایی کردن سبد خرید
      </button>
    </div>
  );
};

export default OrderDetails;
