import Header from "./Components/Header";
import HeaderBottom from "./Components/HeaderBottom";
import Main from "./Components/Main";

import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div class="h-screen w-screen bg-white dark:bg-[#2b2c37]">
      <Header handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <HeaderBottom />
      <Main />
    </div>
  );
}
export default App;
