import React from "react";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";

const Header = ({ handleThemeSwitch, theme }) => {
  return (
    <header className="pt-8 bg-inherit w-full">
      <h1 className="font-extrabold text-primary dark:text-white text-3xl text-center">
        <span className="block">PERSONAL</span>
        <span className="block">TASK MANAGER</span>
      </h1>
      <div class="absolute right-12 top-10" onClick={handleThemeSwitch}>
        {theme === "light" ? (
          <p>
            <BsFillMoonStarsFill size={30} color="#828fa3" />
          </p>
        ) : (
          <p className="sun-light-icon">
            <BsSun size={30} color="#828fa3" />
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
