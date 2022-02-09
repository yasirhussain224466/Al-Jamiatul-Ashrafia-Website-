import React from 'react'
import AppName from './AppName'
import Carousel from './CarouselContainer'
import Ticker from './Ticker'


const Header = () => {
    return (
        <header>
          
          <AppName />
          <Carousel />
          <Ticker />
        </header>
    )
}

export default Header
