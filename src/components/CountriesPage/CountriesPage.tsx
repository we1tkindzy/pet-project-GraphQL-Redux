import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import ContinentsList from "components/ContinentsList/ContinentsList";
import Search from "components/Search/Search";
import CountriesList from "components/CountriesList/CountriesList";

import "./style.scss";

const LIST_CONTINENTS = gql`
  query {
    continents {
      code
      name
    }
  }
`;

const SORT_AND_SEARCH_COUNTRIES = gql`
  query ($code: String!, $name: String) {
    countries(filter: { continent: { in: [$code] }, name: { regex: $name } }) {
      code
      name
      emoji
      currencies
      native
      continent {
        code
        name
      }
    }
  }
`;

const CountriesPage = () => {
  const {
    data: continentsData,
    loading: continentsLoading,
    error: continentsError,
  } = useQuery(LIST_CONTINENTS);

  const [continent, setContinent] = useState("EU");
  const [country, setCountry] = useState("");
  const {
    data: dataContinentsQuery,
    error: countriesError,
    loading: countriesLoading,
  } = useQuery(SORT_AND_SEARCH_COUNTRIES, {
    variables: { code: continent, name: country },
  });

  let countries = [];
  if (dataContinentsQuery) {
    countries = dataContinentsQuery;
  }

  if (continentsLoading || continentsError) {
    return (
      <p className="countries-page">
        {continentsError ? continentsError.message : "Loading..."}
      </p>
    );
  }

  return (
    <div className="countries-page">
      <div className="search-functionality">
        <ContinentsList
          continent={continent}
          continentsData={continentsData.continents}
          setContinent={setContinent}
        />

        <Search country={country} setCountry={setCountry} />
      </div>

      <CountriesList
        countries={countries.countries}
        continent={continent}
        countriesError={countriesError}
        countriesLoading={countriesLoading}
      />
    </div>
  );
};

export default CountriesPage;
