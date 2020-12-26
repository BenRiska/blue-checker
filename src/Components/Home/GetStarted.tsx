import React from 'react'
import "../../styles/Home/GetStarted.css"
import image from "../../Assets/Images/get-started.png"

const GetStarted: React.FC = (): JSX.Element => {
    return (
        <div className="getStarted">
            <div className="getStarted__content">
                <h3>BlueReceipt is your Hub
                <svg width="21" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.7347 2.3917L.2711 16.095c-1.0632 1.952 1.234 4.0022 2.8586 2.5515L14.536 8.4621c2.1109-1.8847 2.1502-5.324.0831-7.2627C12.4848-.8024 9.1609-.2267 7.7347 2.3917zM15.1336 16.1364l-9.9664 6.0994c-1.8388 1.1254-.8139 4.1218 1.2755 3.729l11.3245-2.1291c2.3558-.4429 3.7893-3.0096 3.0272-5.4201-.787-2.4889-3.5201-3.5894-5.6608-2.2792z" fill="#0083FF"></path></svg>
                </h3>
                <h1>Capture, Connect and Convert your Subscribers</h1>
                <p>Personalized Omnichannel Conversational Commerce at scale. Make thousands on autopilot in minutes! Every brand asset in one!</p>
                <div className="getStarted__buttons">
                    <button className="getStarted__blue-btn">Get Started</button>
                    <button className="getStarted__white-btn">Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default GetStarted
