import "./style.scss";

interface ContinentProps {
  code: string;
  name: string;
}

interface ContinentsListProps {
  continent: string;
  continentsData: ContinentProps[];
  setContinent: (continent: string) => void;
}

const ContinentsList = ({
  continent,
  continentsData,
  setContinent,
}: ContinentsListProps) => {
  const changeContinentHandler = (
    evt: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setContinent(evt.target.value);
  };

  return (
    <select
      className="continents-list"
      value={continent}
      onChange={changeContinentHandler}>
      {continentsData.map((continent: ContinentProps) => (
        <option key={continent.code} value={continent.code}>
          {continent.name}
        </option>
      ))}
    </select>
  );
};

export default ContinentsList;
