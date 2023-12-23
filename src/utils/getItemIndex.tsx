import { CountryProps } from "consts/types";

export default (list: CountryProps[], code: string) => {
  const idList = list.map((item: CountryProps) => item.code);
  return idList.indexOf(code);
};
