import { useAppDispatch, useAppSelector } from "hooks/storeHooks";
import { CountryProps } from "consts/types";
import { ActionType } from "consts/constants";

import "./style.scss";

const FavoritesCountriesPage = () => {
  const dispatch = useAppDispatch();

  const favoritesCountriesList = useAppSelector(
    (state) => state.countries.favoritesCountries
  );

  const deleteCountryHandler = (country: CountryProps) => {
    dispatch({ type: ActionType.REMOVE_FROM_FAVORITE, payload: country });
  };

  return (
    <div className="favorites-countries-page">
      <h2 className="favorites-countries-page__title">Favorites сountries</h2>

      {favoritesCountriesList.length !== 0 ? (
        <ul className="countries-list">
          {favoritesCountriesList.map((country: CountryProps) => (
            <li className="country" key={country.code}>
              <div className="country__wrapper">
                <span className="country__flag">{country.emoji}</span>
                <div>
                  <p className="country__name">{country.name}</p>
                  <p className="country__native">{country.native}</p>
                </div>
                <button
                  onClick={() => deleteCountryHandler(country)}
                  id={country.name}
                  className="country__favorite country__favorite--active">
                  ♥
                </button>
              </div>

              <ul className="country__currencies">
                {country.currencies.map((currency: string, id: number) => (
                  <li className="country__currency" key={currency + id}>
                    {currency}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          The list of countries is empty. Add a country by clicking on the
          button in the list of countries.
        </p>
      )}
    </div>
  );
};

export default FavoritesCountriesPage;
