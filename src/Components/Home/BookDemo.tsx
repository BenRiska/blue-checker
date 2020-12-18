import React from 'react'
import "../../styles/Home/BookDemo.css"
import instagramIcon from "../../Assets/Images/instagram-icon.svg"
import analyticsIcon from "../../Assets/Images/analytics-icon.svg"
import messengerIcon from "../../Assets/Images/messenger-icon.svg"
import mailChimpIcon from "../../Assets/Images/mailchimp-icon.svg"
import clickFunnelsIcon from "../../Assets/Images/click-funnels-icon.svg"
import klayvioIcon from "../../Assets/Images/klayvio-icon.svg"
import cartHookIcon from "../../Assets/Images/carthook-icon.svg"
import okendoIcon from "../../Assets/Images/okendo-icon.svg"

function BookDemo() {
    return (
        <div className="bookDemo">
            <div className="bookDemo-left">
                <h2>Connect all your favorite apps!</h2>
                <button>Book a Demo</button>
            </div>
            <div className="bookDemo-center">
                <div className="bookDemo__icon">
                    <img src={instagramIcon} alt="app icon"/>
                </div>
                <div className="bookDemo__icon">
                    <img src={analyticsIcon} alt="app icon"/>
                </div>
                <div className="bookDemo__icon">
                    <img src={messengerIcon} alt="app icon"/>
                </div>
                <div className="bookDemo__icon">
                    <img src={mailChimpIcon} alt="app icon"/>
                </div>
                <div className="bookDemo__icon">
                    <img src={clickFunnelsIcon} alt="app icon"/>
                </div>
                <div className="bookDemo__icon">
                    <img src={klayvioIcon} alt="app icon"/>
                </div>
                <div className="bookDemo__icon">
                    <img src={cartHookIcon} alt="app icon"/>
                </div>
                <div className="bookDemo__icon">
                    <img src={okendoIcon} alt="app icon"/>
                </div>
            </div>
            <div className="bookDemo-right">
                <h2>Just on BlueReceipt</h2>
                <p>One Click integrations. Connect and start using BlueReceipt right away. Need another? Use Zapier instantly</p>
            </div>
        </div>
    )
}

export default BookDemo
