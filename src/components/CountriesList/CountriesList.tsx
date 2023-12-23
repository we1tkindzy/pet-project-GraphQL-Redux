import { ApolloError } from "@apollo/client";
import { useAppDispatch } from "hooks/storeHooks";
import { CountryProps } from "consts/types";
import { ActionType } from "consts/constants";

import "./style.scss";

interface CountriesListProps {
  countries: CountryProps[];
  continent: string;
  countriesError?: ApolloError;
  countriesLoading: boolean;
}

const CountriesList = ({
  countries,
  continent,
  countriesError,
  countriesLoading,
}: CountriesListProps) => {
  const dispatch = useAppDispatch();

  const addCountryHandler = (country: any) => {
    dispatch({ type: ActionType.ADD_TO_FAVORITE, payload: country });
  };

  if (countriesLoading || countriesError) {
    return <p>{countriesError ? countriesError.message : "Loading..."}</p>;
  }

  return (
    <ul className="countries-list">
      {countries.map((country: CountryProps) => {
        if (country.continent.code === continent)
          return (
            <li className="country" key={country.code}>
              <div className="country__wrapper">
                <span className="country__flag">{country.emoji}</span>
                <div>
                  <p className="country__name">{country.name}</p>
                  <p className="country__native">{country.native}</p>
                </div>
                <button
                  onClick={() => addCountryHandler(country)}
                  id={country.name}
                  className="country__favorite">
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
          );
      })}
    </ul>
  );
};

export default CountriesList;
