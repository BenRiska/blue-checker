import React from 'react'
import "../../styles/Home/HomeMobileAnimation.css"

function HomeMobileAnimation() {
    return (
        <div className="homeMobileAnimation">
            <div className="hma__content">
                <h1>
                    <span>Text Messaging</span>
                    <span>is the Future</span>
                </h1>
                <p>Emails are the past. Today’s customers need to communicate on all channels, and texting is #1</p>
                <div className="hma__images">
                <img className="hma__hide hma__phone-1" src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f70d82e10f599276d286325_ORWHAT%20-%20iPhone.svg" loading="lazy" />
                <img className="hma__main-img" src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f73482344d2ea7072305f78_ORWHAT%20-%20iPhone.svg" loading="lazy" alt="" ></img>
                <img className="hma__hide hma__phone-2" src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f70d82f849ec39377539c07_ORWHAT%20-%20iPhone-1.svg" loading="lazy"></img>
                </div>
            </div>
        </div>
    )
}

export default HomeMobileAnimation
