import { useMemo, useState } from "react";

import Pagination from "./Pagination";

import { Comment } from "@/types";

let PageSize = 3;

interface Props {
  bookTitle: string;
  comments: Comment[];
}

const Comments: React.FC<Props> = ({ bookTitle, comments }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentComments = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return comments.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, comments]);

  return (
    <div className="bg-neutral-50 dark:bg-slate-950">
      <div className=" container py-8">
        <h2 className="text-sm sm:text-xl dark:text-slate-200 font-bold mb-4">
          {`نظرات کاربران درباره کتاب ${bookTitle}`}
        </h2>
        {currentComments.map((comment, index) => (
          <div
            key={index}
            className="py-3 border-b border-neutral-400 border-dotted"
          >
            <h6 className="text-sm dark:text-slate-200">{comment.userName}</h6>
            <span>{"⭐".repeat(comment.rate)}</span>
            <p className="text-xs text-justify text-gray-600 dark:text-slate-300 px-10">
              {comment.text}
            </p>
          </div>
        ))}
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={comments.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Comments;
