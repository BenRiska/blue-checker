import React from 'react'
import "../../styles/Home/Banner.css"

function Banner() {
    return (
        <div className="banner">
            <div className="banner__content">
                <h1>
                    <span>Are you excited</span>
                    <span>for BlueReceipt?</span>
                </h1>
                <p>Start sending Texts In Under 3 Minutes</p>
                <button>Start sending SMS today</button>
            </div>
            <div className="banner__img-container">
            </div>
        </div>
    )
}

export default Banner
