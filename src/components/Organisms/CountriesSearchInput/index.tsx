import { useCallback } from "react";

import SearchInput from "../../Molecules/SearchInput";

import { useCountriesContext } from "../../../reducers/CountriesReducer";

import { classNameGenerator } from "../../../utils";

import styles from "./CountriesSearchInput.module.scss";

interface CountriesSearchInputProps {}

const CountriesSearchInput: React.FC<CountriesSearchInputProps> = () => {
  const cls = classNameGenerator(styles);

  const { getCountriesData, resetCountriesData } = useCountriesContext();

  const handleCountriesData = useCallback(
    (countryName: string) => {
      if (countryName) {
        getCountriesData(countryName);
      } else {
        resetCountriesData();
      }
    },
    [getCountriesData, resetCountriesData]
  );

  return (
    <div className={cls("countriesSearchInput")}>
      <SearchInput callback={handleCountriesData} />
    </div>
  );
};

export default CountriesSearchInput;
