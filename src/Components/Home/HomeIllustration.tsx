import React from 'react'
import "../../styles/Home/HomeIllustration.css"

const HomeIllustration: React.FC = (): JSX.Element => {
    return (
        <div className="homeIllustration">
            <h1>
                <span>Texting subscribers is easy!</span>
                <span>BlueReceipt is your solution!</span>
            </h1>
            <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6a3fc82178f38ec7094971_Image%2001%20White%201.jpg" loading="lazy" width="1280" alt=""></img>
        </div>
    )
}

export default HomeIllustration
