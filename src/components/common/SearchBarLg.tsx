import { useEffect, ChangeEvent } from "react";

import { useRouter } from "next/router";

import { useTypedDispatch, useTypedSelector } from "@/redux/store";
import { setSearchedWord } from "../../redux/slices/searchSlice";
import { fetchBooks } from "../../redux/slices/booksSlice";
import { setFoundBooks } from "../../redux/slices/searchSlice";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const SearchBarLg: React.FC = () => {
  const searchedWord = useTypedSelector((store) => store.search.searchedWord);
  const books = useTypedSelector((store) => store.books.value);
  const dispatch = useTypedDispatch();

  const router = useRouter();

  const minimumCharacters = 3;

  useEffect(() => {
    if (router.pathname !== "/search-results") dispatch(setSearchedWord(""));
  }, [router.pathname, dispatch]);

  useEffect(() => {
    if (searchedWord.length === minimumCharacters) {
      dispatch(fetchBooks());
    }
  }, [searchedWord, dispatch]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchedWord(event.target.value));
  };

  const handleSearch = () => {
    if (searchedWord.length >= minimumCharacters) {
      dispatch(setFoundBooks(books));
      if (router.pathname !== "/search-results") router.push("/search-results");
    }
  };

  return (
    <div className="w-[15rem] rounded p-2 flex gap-4 bg-gray-200">
      <input
        className="w-48 bg-transparent focus:outline-0"
        type="text"
        value={searchedWord}
        onChange={handleChange}
      />
      <MagnifyingGlassIcon
        className="w-4 cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBarLg;
