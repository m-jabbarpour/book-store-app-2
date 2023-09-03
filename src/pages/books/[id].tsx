import CommonLayout from "@/layouts/CommonLayout";
import BookDescription from "@/components/custom/BookDescription";
import Navigation from "@/components/custom/Navigation";
import BookDetails from "@/components/custom/BookDetails";
import Comments from "@/components/custom/Comments";
import RecommendedBooks from "@/components/custom/RecommendedBooks";

import booksDataBase from "@/database/db";
import comments from "@/database/comments";

import { Book, Comment } from "@/types";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

export const getStaticPaths = () => {
  const paths = booksDataBase.map((book) => ({
    params: { id: book.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = (context) => {
  const { id } = context.params as ParsedUrlQuery;
  const [book] = booksDataBase.filter((book) => book.id === id);

  return { props: {book, comments} };
};

interface Props {
  book: Book;
  comments: Comment[];
}

const SingleBook: React.FC<Props> = ({ book, comments }) => {
  return (
    <CommonLayout>
      
      <Navigation book={book} />
      <BookDetails book={book} />
      <BookDescription book={book} />
      <Comments bookTitle={book.title} comments={comments} />
      <RecommendedBooks currentBook={book} property="authors" />
      <RecommendedBooks currentBook={book} property="publications" />
      <RecommendedBooks currentBook={book} property="subCategory" />
    </CommonLayout>
  );
};

export default SingleBook;
