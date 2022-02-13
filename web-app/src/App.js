import React from "react";
import { IntlProvider } from "react-intl";
import "./styles/App.scss";
import { BrowserRouter } from "react-router-dom";
import MainScreen from "./RootScreen/RootScreen";
// import MainScreen from './Components/Screen'

function App() {
  return (
    <>
      <IntlProvider>
        <BrowserRouter>
          <MainScreen />
        </BrowserRouter>
      </IntlProvider>
    </>
  );
}

export default App;
