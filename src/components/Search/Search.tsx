import { useRef } from "react";

import "./style.scss";

interface SearchProps {
  country: string;
  setCountry: (country: string) => void;
}

const Search = ({ country, setCountry }: SearchProps) => {
  const serchInput = useRef<HTMLInputElement>(null);

  const inputHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    serchInput.current?.focus();
    setCountry(evt.target.value);
  };

  return (
    <div className="search">
      <label className="visually-hidden" htmlFor="search">
        Search
      </label>

      <input
        ref={serchInput}
        onChange={inputHandler}
        value={country}
        type="text"
        id="search"
        name="search"
        className="search__input"
        placeholder="Search..."
        autoComplete="off"
      />
    </div>
  );
};

export default Search;
