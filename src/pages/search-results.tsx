import BooksContainer from "../components/custom/BooksContainer";
import NoBookFound from "../components/custom/NoBookFound";
import CommonLayout from "../layouts/CommonLayout";

import { useTypedSelector } from "@/redux/store";

const SearchResults: React.FC = () => {
  const foundBooks = useTypedSelector((store) => store.search.foundBooks);
  return (
    <CommonLayout>
      <div className="container mx-auto px-12">
        {foundBooks.length > 0 ? (
          <BooksContainer books={foundBooks} />
        ) : (
          <NoBookFound />
        )}
      </div>
    </CommonLayout>
  );
};

export default SearchResults;
