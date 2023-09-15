import { lazy } from "react";

export const AboutPageAsync = lazy(
  () =>
    new Promise((res) => {
      // @ts-ignore
      setTimeout(() => res(import("./AboutPage")), 2000);
    })
);

// export const AboutPageAsync = lazy(() => import("./AboutPage"));
