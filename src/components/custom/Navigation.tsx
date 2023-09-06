import { Book } from "@/types";

interface Props {
  book: Book;
}

const Navigation: React.FC<Props> = ({ book }) => {
  return (
    <div className="w-full bg-neutral-200 dark:bg-slate-700 text-xs">
      <div className="container py-4">
        پردیس کتاب / <span> {book.category}</span> / <span>{book.subCategory}</span>{" "}
        / <span>{book.title}</span>
      </div>
    </div>
  );
};

export default Navigation;
