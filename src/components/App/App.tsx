import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "components/Layout/Layout";
import CountriesPage from "components/CountriesPage/CountriesPage";
import FavoritesCountriesPage from "components/FavoritesCountriesPage/FavoritesCountriesPage";
import ErrorPage from "components/ErrorPage/ErrorPage";

import { AppRoutes } from "consts/constants";

const router = createBrowserRouter([
  {
    id: "root",
    path: AppRoutes.MAIN,
    errorElement: <ErrorPage />,
    Component: Layout,
    children: [
      {
        index: true,
        Component: CountriesPage,
      },
      {
        path: AppRoutes.FAVORITES,
        Component: FavoritesCountriesPage,
      },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}
