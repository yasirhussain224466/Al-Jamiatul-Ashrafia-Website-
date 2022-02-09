import React from 'react'
import Links from '../../Components/Links'
import Header from '../../Components/Header'
import GalleryModal from '../../Components/GalleryModal'
import Mureed from '../../Components/Mureed'
import OnlineFatwa from '../../Components/OnlineFatwa'

const Gallery = () => {
    return (
        <>
            <Links />
            <Header />  {/* AppName - Carousel - Ticker  */}

            <div className="row ChildMain">
                <div className="col-md-9">
                    <GalleryModal />
                </div>

                <div className='MainSideAd' className="col-md-3">
                    <div className='MainSideAd-div1'>
                        <Mureed />
                    </div>
                    <div className='MainSideAd-div2'>
                        <OnlineFatwa />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Gallery
