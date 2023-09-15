import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "@/shared/config/routConfig/routConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => {
          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
