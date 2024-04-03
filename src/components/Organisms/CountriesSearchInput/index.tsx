import { useEffect } from "react";

import { useCountriesContext } from "../../../reducers/CountriesReducer";

import { classNameGenerator } from "../../../utils";

import styles from "./CountriesSearchInput.module.scss";

interface CountriesSearchInputProps {}

const CountriesSearchInput: React.FC<CountriesSearchInputProps> = () => {
  const cls = classNameGenerator(styles);

  const { isLoading, getCountriesData } = useCountriesContext();

  console.log("[log-isLoading]", isLoading);

  useEffect(() => {
    getCountriesData("india");
  }, [getCountriesData]);

  return <div className={cls("countriesSearchInput")}></div>;
};

export default CountriesSearchInput;
