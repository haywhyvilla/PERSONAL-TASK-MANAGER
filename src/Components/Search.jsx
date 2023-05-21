import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterSearchValue } from "../Redux/Todo/todoSlice";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterSearchValue(inputValue));
  }, [inputValue, dispatch]);
  return (
    <div className="w-[85%] dark:bg-[#20212c]">
      <input
        className="bg-gray-100 dark:bg-[#20212c] dark:text-white w-full outline-none pr-4 py-2 rounded placeholder:text-xl placeholder:font-medium placeholder:text-gray-500 placeholder:tracking-wide"
        placeholder="Search Todos"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
