import React from 'react'
import "../../styles/Home/Hero.css"

function Hero() {
    return (
        <div className="hero">
            <div className="hero__container">
                <h1>
                    <span className="hero__svg"><span style={{color: "#0083ff"}}>Text</span> Marketing
                    <svg width="21" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.7347 2.3917L.2711 16.095c-1.0632 1.952 1.234 4.0022 2.8586 2.5515L14.536 8.4621c2.1109-1.8847 2.1502-5.324.0831-7.2627C12.4848-.8024 9.1609-.2267 7.7347 2.3917zM15.1336 16.1364l-9.9664 6.0994c-1.8388 1.1254-.8139 4.1218 1.2755 3.729l11.3245-2.1291c2.3558-.4429 3.7893-3.0096 3.0272-5.4201-.787-2.4889-3.5201-3.5894-5.6608-2.2792z" fill="#0083FF"></path></svg>
                    </span>
                    <span>For Shoppify E-Commerce</span>
                </h1>
                <p className="hero__margin-top">Increase your revenue by $1000's with BlueReceipt Texts.</p>
                <p>Send Broadcasts, Create Automations, Text 1-On-1</p>
                <div className="button-container">
                    <div className="icon-container">
                    <svg width="23" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3582 15.6129c-.8448.5323-1.8451.8403-2.9166.8403a5.4564 5.4564 0 01-2.9167-.8403c-.4575-.2878-.9682.3009-.616.7125.8538.9972 2.119 1.6292 3.5327 1.6292s2.6789-.632 3.5327-1.6292c.3511-.4106-.1585-1.0003-.6161-.7125z" fill="#0083FF"></path><path d="M12.9709 3.675a11.2886 11.2886 0 00-1.4739-.1096l.0041-.005c-.0111 0-.0221.001-.0332.001a3.6456 3.6456 0 00-.607-1.9282A3.6657 3.6657 0 009.1623.2536 3.628 3.628 0 007.824 0c-1.0665 0-2.0267.4599-2.693 1.1915l-.006.006S-.8296 6.998.273 15.9188c.0442.4408.1134.8745.2077 1.2992 0 .001.001.003.001.004 1.0876 4.9158 5.3898 8.6191 10.581 8.773 6.3299.1882 11.5913-4.9903 11.5201-11.3411-.0622-5.6021-4.2199-10.218-9.6118-10.9788zm-6.368-1.0475s1.1066-1.2307 2.0989-.2355c.006.006.011.012.017.0181.1325.145.9622 1.1522-.4715 2.2874v.001c-.7525.5917-1.3725 1.3424-1.7418 2.24a5.3864 5.3864 0 011.9966-1.1814 8.0536 8.0536 0 011.9575-.2395c.1696 0 .3391.006.5067.0161.301.0181.598.0533.8889.1047 3.8066.6631 6.7012 3.994 6.7012 8.0021 0 4.4852-3.625 8.122-8.0978 8.122-4.4728 0-8.0988-3.6368-8.0988-8.122 0-.0704.001-.1398.002-.2093.001-.0432.002-.0855.004-.1288.0743-2.5178.7014-4.8967 1.7629-7.019.1505-.2999.308-.5947.4755-.8845A16.9584 16.9584 0 016.603 2.6275z" fill="#0083FF"></path></svg>
                    </div>
                    <p>Start Sending Texts</p>
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 8l4 4-4 4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <p className="hero__margin-bottom">Get Started Now - No Credit Card Necessary</p>
            </div>
        </div>
    )
}

export default Hero
