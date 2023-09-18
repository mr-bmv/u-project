import { lazy } from 'react';

export const MainPageAsync = lazy(
  () =>
    new Promise((res) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Testing invalid input
      setTimeout(() => res(import('./MainPage')), 2000);
    })
);
// export const MainPageAsync = lazy(() => import("./MainPage"));
