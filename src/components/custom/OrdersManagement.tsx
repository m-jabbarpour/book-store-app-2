import { useEffect } from "react";

import { useTypedDispatch, useTypedSelector } from "@/redux/store";
import { showOrderDetailsModal } from "../../redux/slices/orderDetailsModalSlice";
import { fetchOrders } from "../../redux/slices/ordersSlice";
import { setSelectedOrder } from "../../redux/slices/selectedOrderSlice";

import OrderDetailsModal from "./OrderDetailsModal";

import { Order } from "@/types";

const OrdersManagement: React.FC = () => {
  const dispatch = useTypedDispatch();
  const orders = useTypedSelector((store) => store.orders.value);

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  const showOrder = (order: Order) => {
    dispatch(showOrderDetailsModal(true));
    dispatch(setSelectedOrder(order));
  };

  return (
    <>
      <div className="container py-4">
        <div className="flex pb-2 border-b-2 font-bold">
          <span className="w-1/4">نام کاربر</span>
          <span className="w-1/4">مجموع مبلغ</span>
          <span className="w-1/4">زمان ثبت سفارش</span>
          <span className="w-1/4"></span>
        </div>
        {orders.map((order) => (
          <div className="flex pb-2 border-b-2" key={order.id}>
            <span className="w-1/4">
              {order.firstName} {order.lastName}
            </span>
            <span className="w-1/4">
              {order.totalPrice.toLocaleString("fa-IR")} تومان
            </span>
            <span className="w-1/4">{order.orderDate}</span>
            <span
              className="w-1/4 cursor-pointer hover:text-primary"
              onClick={() => showOrder(order)}
            >
              بررسی سفارش
            </span>
          </div>
        ))}
      </div>
      <OrderDetailsModal />
    </>
  );
};

export default OrdersManagement;
