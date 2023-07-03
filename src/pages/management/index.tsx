import { useEffect } from "react";

import BooksManagement from "@/components/custom/BooksManagement";
import ManagementHeader from "@/components/custom/ManagementHeader";
import OrdersManagement from "@/components/custom/OrdersManagement";

import { useTypedDispatch, useTypedSelector } from "@/redux/store";
import { fetchBooksSummary } from "@/redux/slices/booksSummarySlice";

const Management: React.FC = () => {
  const dispatch = useTypedDispatch();
  const booksSummary = useTypedSelector((store) => store.booksSummary.value);
  const managementMenu = useTypedSelector((store) => store.managementMenu);

  useEffect(() => {
    dispatch(fetchBooksSummary());
  }, []);

  return (
    <>
      <ManagementHeader />
      {managementMenu.option === "books" ? (
        <BooksManagement booksSummary={booksSummary} />
      ) : (
        <OrdersManagement />
      )}
    </>
  );
};

export default Management;
