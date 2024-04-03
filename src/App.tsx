import CountriesProvider from "./reducers/CountriesReducer";

import HomePage from "./pages/HomePage";

import "./App.scss";

function App() {
  return (
    <CountriesProvider>
      <HomePage />
    </CountriesProvider>
  );
}

export default App;
