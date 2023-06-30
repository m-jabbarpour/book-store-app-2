import { useTypedDispatch, useTypedSelector } from "@/redux/store";
import { showOrderDetailsModal } from "../../redux/slices/orderDetailsModalSlice";

const OrderDetailsModal: React.FC = () => {
  const orderDetailsModal = useTypedSelector(
    (store) => store.orderDetailsModal.value
  );
  const selectedOrder = useTypedSelector((store) => store.selectedOrder.value);
  const dispatch = useTypedDispatch();

  const closeModal = () => {
    dispatch(showOrderDetailsModal(false));
  };

  if (orderDetailsModal && selectedOrder)
    return (
      <div className="w-full h-full absolute right-0 top-0 flex items-center bg-modal">
        <div className="w-1/3 flex flex-col mx-auto rounded-lg p-5 overflow-hidden bg-neutral-100">
          <h1 className="font-bold mb-4">نمایش سفارش</h1>
          <h5 className="mb-2">
            نام مشتری: {selectedOrder.firstName} {selectedOrder.lastName}
          </h5>
          <h5 className="mb-2">نشانی: {selectedOrder.address}</h5>
          <h5 className="mb-2">شماره همراه: {selectedOrder.phone}</h5>
          <h5 className="mb-2">تاریخ سفارش: {selectedOrder.orderDate}</h5>
          <h5 className="mb-4">تاریخ تحویل: {selectedOrder.deliveryDate}</h5>
          <div className="flex font-bold pb-2 border-b-2">
            <span className="w-[50%] text-center">عنوان کتاب</span>
            <span className="w-[30%] text-center">قیمت</span>
            <span className="w-[20%] text-center">موجودی</span>
          </div>
          {selectedOrder.books.map((book, index) => (
            <div className="flex pb-2 border-b-2" key={index}>
              <span className="w-[50%] text-center">{book.title}</span>
              <span className="w-[30%] text-center">{book.price} تومان</span>
              <span className="w-[20%] text-center">{book.quantity}</span>
            </div>
          ))}
          <button
            className="bg-primary font-bold text-white rounded p-2 cursor-pointer hover:shadow mx-auto mt-4 text-center"
            onClick={closeModal}
          >
            تحویل شد
          </button>
        </div>
      </div>
    );
  else return <></>;
};

export default OrderDetailsModal;
