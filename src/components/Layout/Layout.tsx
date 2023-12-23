import { Outlet } from "react-router-dom";
import Navigation from "components/Navigation/Navigation";

import "./style.scss";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout__wrapper">
        <Navigation />

        <h2>
          My first Apollo app with Redux{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </h2>
      </div>

      <Outlet />
    </div>
  );
};

export default Layout;
