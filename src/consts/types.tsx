export interface CountryProps {
  code: string;
  emoji: string;
  name: string;
  native: string;
  currencies: string[];
  continent: {
    code: string;
  };
}
