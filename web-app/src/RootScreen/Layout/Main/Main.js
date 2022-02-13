import React from "react";
// import "./style.css";
import { Switch, Route } from "react-router-dom";
import ContactUs from './Pages/ContactUs/ContactUs'
import Home from "./Pages/Home/Home";
import Books from "./Pages/Library/Books/Books";
import Articles from './Pages/Library/Articles/Articles'
// import Gallery from "./Pages/Media/Gallery";
// import SeratTyeba from "./Pages/Library/SeratTyeba";
// import MilaadIbneKaseer from "./Components/PDF/MilaadIbneKaseer";
// import TafseerHindustankaTazkirah from "./Pages/Library/TafseerHindustankaTazkirah";

const Main = () => {
  return (
    <>
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/Contact" component={ContactUs} />
          <Route exact path="/library/books" component={Books} />
          <Route exact path="/library/articles" component={Articles} />
          {/* <Route exact path="/Gallery" component={Gallery} />
          <Route exact path="/Library_SeratTyeba" component={SeratTyeba} />
          <Route
            exact
            path="/Library_MilladIbneKaseer"
            component={MilaadIbneKaseer}
          />
          <Route
            exact
            path="/Library_hindustankaTazkirah"
            component={TafseerHindustankaTazkirah}
          /> */}
        </Switch>
      </main>
    </>
  );
};

export default Main;
