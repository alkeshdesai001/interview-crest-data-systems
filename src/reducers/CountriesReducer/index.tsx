import { createContext, useCallback, useContext, useReducer } from "react";

import * as actions from "./actions";

interface InitialState {
  isLoading: boolean;
  countriesList: { id: number; name: string; flag: string }[];
  getCountriesData: (countryName: string) => void;
  resetCountriesData: () => void;
  search: string;
}

const initialState: Partial<InitialState> = {
  isLoading: false,
  countriesList: [],
  search: "",
};

const context = createContext<InitialState>(initialState as InitialState);

export const useCountriesContext = () => useContext(context);

interface Response {
  name: { common: string; official: string };
  flag: string;
}

const reducer = (
  state: InitialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case actions.GET_COUNTRIES_DATA_PENDING:
      return { ...state, isLoading: true };
    case actions.GET_COUNTRIES_DATA_FULFILLED: {
      const countriesList = action?.payload?.data?.map(
        ({ name, flag }: Response, index: number) => ({
          id: index + 1,
          name: name?.common || name?.official,
          flag,
        })
      );
      const search = action?.payload?.search;
      return { ...state, isLoading: false, countriesList, search };
    }
    case actions.GET_COUNTRIES_DATA_REJECTED: {
      const search = action?.payload?.search;
      return { ...state, isLoading: false, countriesList: [], search };
    }
    case actions.RESET_COUNTRIES_DATA:
      return { ...state, countriesList: [], search: "" };

    default:
      return state;
  }
};

interface CountriesProviderProps {
  children: React.ReactNode;
}

export const CountriesProvider: React.FC<CountriesProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState as InitialState);

  const getCountriesData = useCallback(async (countryName: string) => {
    dispatch({ type: actions.GET_COUNTRIES_DATA_PENDING });
    const url = `${
      //@ts-ignore
      import.meta.env.VITE_COUNTRIES_BASE_API
    }/name/${countryName}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data?.status === 404) {
        return dispatch({
          type: actions.GET_COUNTRIES_DATA_REJECTED,
          payload: { data: data?.message, search: countryName },
        });
      }
      return dispatch({
        type: actions.GET_COUNTRIES_DATA_FULFILLED,
        payload: { data, search: countryName },
      });
    } catch (error) {
      return dispatch({
        type: actions.GET_COUNTRIES_DATA_REJECTED,
        payload: { data: error, search: countryName },
      });
    }
  }, []);

  const resetCountriesData = useCallback(
    () => dispatch({ type: actions.RESET_COUNTRIES_DATA }),
    []
  );

  return (
    <context.Provider
      value={{ ...state, getCountriesData, resetCountriesData }}
    >
      {children}
    </context.Provider>
  );
};

export default CountriesProvider;
