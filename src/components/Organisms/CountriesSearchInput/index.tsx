import { useCallback } from "react";

import SearchInput from "../../Molecules/SearchInput";

import { useCountriesContext } from "../../../reducers/CountriesReducer";

import { classNameGenerator } from "../../../utils";

import styles from "./CountriesSearchInput.module.scss";

interface CountriesSearchInputProps {}

const CountriesSearchInput: React.FC<CountriesSearchInputProps> = () => {
  const cls = classNameGenerator(styles);

  const { getCountriesData, restCountriesData } = useCountriesContext();

  const handleCountriesData = useCallback(
    (countryName) => {
      if (countryName) {
        getCountriesData(countryName);
      } else {
        restCountriesData();
      }
    },
    [getCountriesData]
  );

  return (
    <div className={cls("countriesSearchInput")}>
      <SearchInput callback={handleCountriesData} />
    </div>
  );
};

export default CountriesSearchInput;
