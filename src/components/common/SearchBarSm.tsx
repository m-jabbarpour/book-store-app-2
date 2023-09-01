import { useEffect, useState, ChangeEvent } from "react";

import { useRouter } from "next/router";

import { useTypedDispatch, useTypedSelector } from "@/redux/store";
import { setSearchedWord } from "../../redux/slices/searchSlice";
import { fetchBooks } from "../../redux/slices/booksSlice";
import { setFoundBooks } from "../../redux/slices/searchSlice";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

const SearchBarSm: React.FC = () => {
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

  const searchedWord = useTypedSelector((state) => state.search.searchedWord);
  const books = useTypedSelector((state) => state.books.value);
  const dispatch = useTypedDispatch();

  const router = useRouter();

  const minimumCharacters = 3;

  useEffect(() => {
    if (router.pathname !== "/search-results") dispatch(setSearchedWord(""));
  }, [router.pathname, dispatch]);

  useEffect(() => {
    if (searchedWord.length >= minimumCharacters) {
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
    <>
      {isSearchActive ? (
        <div className="w-screen h-[5rem] z-10 fixed top-0 right-0 flex justify-between p-3 bg-gray-200">
          <MagnifyingGlassIcon
            className="w-8 cursor-pointer"
            onClick={handleSearch}
          />
          <input
            className="w-4/5 bg-transparent focus:outline-0"
            type="text"
            value={searchedWord}
            onChange={handleChange}
          />
          <ChevronLeftIcon
            className="w-8 cursor-pointer"
            onClick={() => setIsSearchActive(false)}
          />
        </div>
      ) : (
        <div
          className="p-2 bg-gray-200 rounded-full cursor-pointer"
          onClick={() => setIsSearchActive(true)}
        >
          <MagnifyingGlassIcon className="w-4" />
        </div>
      )}
    </>
  );
};

export default SearchBarSm;
