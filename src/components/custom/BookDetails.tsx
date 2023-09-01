import Image from "next/image";

import AddToCartButton from "./AddToCartButton";

import { Book } from "@/types";

interface Props {
  book: Book;
}

const BookDetails: React.FC<Props> = ({ book }) => {
  return (
    <div className="container dark:bg-slate-950 py-8">
      <div className="flex flex-col sm:flex-row">
        <div className="flex pb-4">
          <div className="relative w-[120px] h-[177.6px] sm:w-[150px] sm:h-[222px] lg:w-[180px] lg:h-[270px] xl:w-[200px] xl:h-[296px] rounded sm:rounded-lg overflow-hidden shadow-lg">
            <Image src={book.image} width={200} height={281} alt={book.title} />
          </div>
          <div className="flex flex-col justify-between px-4 py-1 mr-4">
            <h1 className="sm:text-xl font-bold dark:text-slate-100">
              {book.title}
            </h1>
            <div className="text-xs sm:text-sm text-gray-500 dark:text-slate-300 flex flex-col gap-2">
              <div>
                <span>نویسنده: </span>
                <span>{book.authors.join("، ")}</span>
              </div>
              <div>
                <span>مترجم: </span>
                <span>{book.translators.join("، ")}</span>
              </div>
              <div>
                <span>{book.publications}</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span>⭐⭐⭐⭐⭐</span>
              <span>
                {book.rate} از {book.numberOfComments.toLocaleString("fa-IR")}{" "}
                نظر
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end grow py-4">
          <div className="w-full sm:w-[250px] flex flex-col items-center gap-4">
            <div className="w-full text-center text-primary font-bold border-2 border-primary rounded-lg py-2">
              <span> قیمت: {book.price.toLocaleString("fa-IR")} تومان</span>
            </div>
            <AddToCartButton currentBook={book} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
