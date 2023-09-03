import Head from "next/head";

import CartTableMd from "@/components/custom/CartTableMd";
import CartTableSm from "@/components/custom/CartTableSm";
import OrderDetails from "@/components/custom/OrderDetails";
import Title from "@/components/custom/Title";

import CommonLayout from "@/layouts/CommonLayout";

import { useTypedSelector } from "@/redux/store";

const Cart: React.FC = () => {
  const cart = useTypedSelector((store) => store.cart);
  return (
    <>
      <Head>
        <title>طاقچه | سبد خرید</title>
      </Head>
      <CommonLayout>
        <div className="dark:bg-slate-800">
          <div className="container mx-auto px-5 md:px-12 pt-10">
            <Title title="سبد خرید" />
            {cart.addedBooks.length === 0 ? (
              <h1 className="text-center py-10">سبد خرید شما خالی است.</h1>
            ) : (
              <div className="flex flex-col md:flex-row">
                <CartTableSm addedBooks={cart.addedBooks} />
                <CartTableMd addedBooks={cart.addedBooks} />
                <OrderDetails cart={cart} />
              </div>
            )}
          </div>
        </div>
      </CommonLayout>
    </>
  );
};

export default Cart;
