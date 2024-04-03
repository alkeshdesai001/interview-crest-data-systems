import { createContext, useCallback, useContext, useReducer } from "react";

import * as actions from "./actions";

interface InitialState {
  isLoading: boolean;
  getCountriesData: (countryName: string) => void;
}

const initialState: Partial<InitialState> = {
  isLoading: false,
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
    case actions.GET_COUNTRIES_DATA_FULFILLED:
      return { ...state, isLoading: false };
    case actions.GET_COUNTRIES_DATA_REJECTED:
      return { ...state, isLoading: false };

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

    console.log("[log-url]", url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("[log-data]", data);
      dispatch({ type: actions.GET_COUNTRIES_DATA_FULFILLED, payload: data });
    } catch (error) {
      dispatch({ type: actions.GET_COUNTRIES_DATA_REJECTED, payload: error });
    }
  }, []);

  return (
    <context.Provider value={{ ...state, getCountriesData }}>
      {children}
    </context.Provider>
  );
};

export default CountriesProvider;