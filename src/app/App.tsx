import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemProvider";
import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
