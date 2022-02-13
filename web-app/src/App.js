import React from "react";
import "./styles/App.scss";
import { BrowserRouter } from "react-router-dom";
import MainScreen from "./RootScreen/RootScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainScreen />
      </BrowserRouter>
    </>
  );
}

export default App;
