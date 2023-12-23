import { CountryProps } from "consts/types";
import { ActionType } from "consts/constants";
import getItemIndex from "utils/getItemIndex";

interface CountriesState {
  countries: CountryProps[];
  favoritesCountries: CountryProps[];
}

const initialState: CountriesState = {
  countries: [],
  favoritesCountries: [],
};

const addCountryToFavorite = (
  newCountry: CountryProps,
  currentFavoritiesList: CountryProps[]
) => {
  if (
    currentFavoritiesList.filter(
      (country) => country.code === newCountry.code
    )[0]
  ) {
    return currentFavoritiesList;
  }

  return [...currentFavoritiesList, newCountry];
};

const removeCountryFromFavorite = (
  country: CountryProps,
  currentFavoritiesList: CountryProps[]
) => {
  const countryIndex = getItemIndex(currentFavoritiesList, country.code);

  return [
    ...currentFavoritiesList.slice(0, countryIndex),
    ...currentFavoritiesList.slice(
      countryIndex + 1,
      currentFavoritiesList.length
    ),
  ];
};

export default function appReducer(
  state = initialState,
  action: { type: string; payload: CountryProps }
) {
  switch (action.type) {
    case ActionType.ADD_TO_FAVORITE: {
      return {
        ...state,
        favoritesCountries: addCountryToFavorite(
          action.payload,
          state.favoritesCountries
        ),
      };
    }
    case ActionType.REMOVE_FROM_FAVORITE: {
      return {
        ...state,
        favoritesCountries: removeCountryFromFavorite(
          action.payload,
          state.favoritesCountries
        ),
      };
    }
    default:
      return state;
  }
}
