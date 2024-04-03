import { createContext, useCallback, useContext, useReducer } from "react";

import * as actions from "./actions";

interface InitialState {
  isLoading: boolean;
  countriesList: { id: number; name: string; flag: string }[];
  getCountriesData: (countryName: string) => void;
  restCountriesData: () => void;
}

const initialState: Partial<InitialState> = {
  isLoading: false,
  countriesList: [],
};

const context = createContext(initialState);

export const useCountriesContext = () => useContext(context);

const reducer = (
  state: InitialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case actions.GET_COUNTRIES_DATA_PENDING:
      return { ...state, isLoading: true };
    case actions.GET_COUNTRIES_DATA_FULFILLED: {
      const countriesList = action?.payload?.map(({ name, flag }, index) => ({
        id: index + 1,
        name: name?.common || name?.official,
        flag,
      }));
      return { ...state, isLoading: false, countriesList };
    }
    case actions.GET_COUNTRIES_DATA_REJECTED:
      return { ...state, isLoading: false };
    case actions.RESET_COUNTRIES_DATA:
      return { ...state, countriesList: [] };

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
  const [state, dispatch] = useReducer(reducer, initialState);

  const getCountriesData = useCallback(async (countryName: string) => {
    dispatch({ type: actions.GET_COUNTRIES_DATA_PENDING });
    const url = `${
      import.meta.env.VITE_COUNTRIES_BASE_API
    }/name/${countryName}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: actions.GET_COUNTRIES_DATA_FULFILLED, payload: data });
    } catch (error) {
      dispatch({ type: actions.GET_COUNTRIES_DATA_REJECTED, payload: error });
    }
  }, []);

  const restCountriesData = useCallback(
    () => dispatch({ type: actions.RESET_COUNTRIES_DATA }),
    []
  );

  return (
    <context.Provider value={{ ...state, getCountriesData, restCountriesData }}>
      {children}
    </context.Provider>
  );
};

export default CountriesProvider;
