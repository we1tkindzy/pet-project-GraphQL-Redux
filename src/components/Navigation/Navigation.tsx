import { Link } from "react-router-dom";
import { AppRoutes } from "consts/constants";

import "./style.scss";

interface NavigationProps {
  path: string;
  name: string;
}

const navigation: NavigationProps[] = [
  {
    path: AppRoutes.MAIN,
    name: "Countries",
  },
  {
    path: `/${AppRoutes.FAVORITES}`,
    name: "Favorites",
  },
];

const Navigation = () => {
  return (
    <ul className="navigation">
      {navigation.map((item: NavigationProps, id: number) => (
        <li key={id} className="navigation__item">
          <Link className="navigation__link" to={item.path}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
