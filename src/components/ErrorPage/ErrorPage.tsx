import { useRouteError } from "react-router";
import { Link } from "react-router-dom";
import { AppRoutes } from "consts/constants";

import "./style.scss";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="error-page">
      <h2 className="error-page__title">Error 404</h2>
      <p className="error-page__text">Page not found</p>
      <Link className="error-page__link" to={AppRoutes.MAIN}>
        Return to home page
      </Link>
    </div>
  );
};

export default ErrorPage;
