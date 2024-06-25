import { useEffect, useState } from "react";
import { Outlet } from "react-router";

import Header from "./Header";

function AppLayout() {
  // === DATA THEME ===
  const DATA_THEME_FROM_LOCALSTORAGE = window.localStorage.getItem("theme");
  const [theme, setTheme] = useState(DATA_THEME_FROM_LOCALSTORAGE || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Header onClick={handleThemeSwitch} />
      <Outlet context={[theme]} />
    </>
  );
}

export default AppLayout;
