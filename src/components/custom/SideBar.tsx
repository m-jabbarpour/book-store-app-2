import { useEffect, useState } from "react";

import Filter from "./Filter";
import Menu from "./Menu";

import { useTypedDispatch, useTypedSelector } from "@/redux/store";
import { fetchBooks } from "../../redux/slices/booksSlice";
import {
  addAuthor,
  removeAuthor,
} from "../../redux/slices/filteredAuthorsSlice";
import {
  addPublication,
  removePublication,
} from "../../redux/slices/filteredPublicationsSlice";

const SideBar: React.FC = () => {
  const dispatch = useTypedDispatch();
  const books = useTypedSelector((store) => store.books);
  const [authors, setAuthors] = useState<string[]>([]);
  const [publications, setPublications] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  useEffect(() => {
    if (books.status === "success") {
      const extractedPublications = books.value.map(
        (book) => book.publications
      );
      const uniquePublications = [...new Set(extractedPublications)];
      setPublications(uniquePublications);

      const extractedAuthors = books.value.map((book) => book.authors);
      const mergedAuthors: string[] = ([] as string[]).concat.apply(
        [],
        extractedAuthors
      );
      const uniqueAuthors = [...new Set(mergedAuthors)];
      setAuthors(uniqueAuthors);
    }
  }, [books.status]);

  return (
    <aside className="flex flex-col gap-4 md:basis-52 shrink-0 md:pb-6 mt-8 md:pl-8   bg-neutral-100">
      <Menu />
      <Filter
        title="نویسنده"
        options={authors}
        addFilter={dispatch(addAuthor)}
        removeFilter={dispatch(removeAuthor)}
      />
      <Filter
        title="انتشارات"
        options={publications}
        addFilter={dispatch(addPublication)}
        removeFilter={dispatch(removePublication)}
      />
    </aside>
  );
};

export default SideBar;
