import React from 'react'
import Mureed from './Mureed'
import OnlineFatwa from './OnlineFatwa'

const SideAd = () => {
  return (
    <>
      <div className="MainSideAd col-md-3">
          <div className="MainSideAd-div1">
            <Mureed />
          </div>
          <div className="MainSideAd-div2">
            <OnlineFatwa />
          </div>
        </div>
    </>
  )
}

export default SideAd