import React from 'react'
import '../../styles/App.scss'

const Ticker = () => {
    return (
        <div className="Ticker">
            <div className="TickerHeader">Latest News</div>
            {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
            <div className="TickerContent"><marquee behavior="scroll" direction="left" scrollamount="5">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus facere a, reprehenderit quo in temporibus corrupti modi blanditiis qui aspernatur sapiente ipsam vitae similique unde quos aliquid! Odio, et ut.
                </p>
            </marquee>
            </div>
        </div>
    )
}

export default Ticker