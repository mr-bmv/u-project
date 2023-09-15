import { Navbar } from "@/widget/Navbar";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemProvider";
import { AppRouter } from "./providers/routes";
import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>TOGGLE</button>

      <AppRouter />
    </div>
  );
};
export default App;
