import React from "react";
import { BsSearch } from "react-icons/bs";
import NewTodoBtn from "./NewTodoBtn";
import Search from "./Search";

const HeaderBottom = () => {
  return (
    <div className="flex items-center justify-between w-10/12 mx-auto py-6">
      <div className="bg-secondary dark:bg-[#20212c] flex items-center rounded-md gap-x-3 border border-gray-400 dark:border-[#828fa3] w-[30%]">
        <div className="pl-4 text-gray-500 dark:text-white">
          <BsSearch size={18} />
        </div>
        <Search />
      </div>
      <NewTodoBtn />
    </div>
  );
};

export default HeaderBottom;
