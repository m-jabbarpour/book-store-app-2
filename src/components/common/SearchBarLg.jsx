import { useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useSelector, useDispatch } from "react-redux";
import { setSearchedWord } from "../../redux/slices/searchSlice";
import { fetchBooks } from "../../redux/slices/booksSlice";
import { setFoundBooks } from "../../redux/slices/searchSlice";
import { useRouter } from "next/router";

function SearchBarLg() {
  const searchedWord = useSelector((store) => store.search.searchedWord);
  const books = useSelector((store) => store.books.value);
  const dispatch = useDispatch();
  const router = useRouter();
  const minimumCharacters = 3;

  useEffect(() => {
    if (router.pathname !== "/search-results") dispatch(setSearchedWord(""));
  }, []);

  useEffect(() => {
    if (searchedWord.length === minimumCharacters) {
      dispatch(fetchBooks());
    }
  }, [searchedWord]);

  const handleChange = (e) => {
    dispatch(setSearchedWord(e.target.value));
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
}

export default SearchBarLg;
