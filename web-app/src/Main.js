import React from 'react';
// import { useIntl } from 'react-intl';
// import Switch from 'react-switch';
// import { FaBars } from 'react-icons/fa';
// import reactLogo from './assets/logo.png';
import './style.css'
// import Carousel from './Components/CarouselContainer'
// import Ticker from './Components/Ticker';
// import AppName from './Components/AppName';
// import Footer from './Components/Footer';
// import SignInSide from './Components/SignInSide';
// import Links from './Components/Links';
// import Header from './Components/Header';
// import ChildMain from './Components/ChildMain';
import { Switch ,Route } from 'react-router-dom'
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import Gallery from './Pages/Media/Gallery';
import SeratTyeba from './Pages/Library/SeratTyeba';
import MilaadIbneKaseer from './Components/PDF/MilaadIbneKaseer';
import TafseerHindustankaTazkirah from './Pages/Library/TafseerHindustankaTazkirah';
// import { intl } from 'react-intl';


const Main = ( {image,
  toggled,
  collapsed,
  rtl,
  handleToggleSidebar,
  handleCollapsedChange,
  // handleRtlChange={handleRtlChange}
  handleImageChange}) => {

  return (
    <>

      <main>
        {/* <Links />
        <Header/>
        <ChildMain/> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route exact path='/Contact' component={ContactUs} />
          <Route exact path='/Gallery' component={Gallery} />
          <Route exact path='/Library_SeratTyeba' component={SeratTyeba} />
          <Route exact path='/Library_MilladIbneKaseer' component={MilaadIbneKaseer} />
          <Route exact path='/Library_hindustankaTazkirah' component={TafseerHindustankaTazkirah} />
          {/* <Route exact path='/LibrarySeratTyeba' component={SeeratETyeba} /> */}

        </Switch>





        {/* <div className="block ">
          <Switch
            height={16}
            width={30}
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={handleCollapsedChange}
            checked={collapsed}
            onColor="#219de9"
            offColor="#bbbbbb"
          />
          <span>
            {intl.formatMessage({ id: 'collapsed' })}
          </span>
        </div> */}






      </main>
    </>
  );
};

export default Main;