import { GetServerSideProps } from "next";

import BooksContainer from "../components/custom/BooksContainer";
import NoBookFound from "../components/custom/NoBookFound";
import CommonLayout from "../layouts/CommonLayout";

import booksDataBase from "@/database/db";

import { Book } from "@/types";

interface Props {
  foundBooks: Book[];
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { term } = query;

  let foundBooks: Book[] = [];
  
  if (typeof term === "string") {
    foundBooks = booksDataBase.filter((book) => book.title.includes(term));
  }
  return { props: { foundBooks } };
};

const Search: React.FC<Props> = ({ foundBooks }) => {
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

export default Search;
