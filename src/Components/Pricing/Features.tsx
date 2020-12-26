import React from 'react'
import "../../styles/Pricing/Features.css"

const Features: React.FC = (): JSX.Element => {
    return (
        <div className="features">
            <div className="features__header">
                <h1>
                    <span>Full Suite of Features</span>
                    <span>Every Included in Free Plan</span>
                </h1>
                <p>Experience everything BlueReceipt has to offer. Start sending texts. Book a consultation call if your store does over $100,000 monthly. Onboarding takes 3 mintues. Get started!</p>
            </div>
            <div className="features__grid">
                <div className="features__grid-bg"></div>
                <div className="features__feature">
                    <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b401e12229007fa0339f6_Cylinder.png" />
                    <h3>Revolutionary Dashboard</h3>
                    <p>Best in class analytics designed to provide all the necessary insights for success!</p>
                </div>
                <div className="features__feature">
                    <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b413065eeb5a6e45ed6ef_25%201.png"/>
                    <h3>Unlimited Text Campaigns</h3>
                    <p>Broadcast as many campaigns as you would like! Just be careful for unsubcribes</p>
                </div>
                <div className="features__feature">
                    <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b415b58569103ff248e25_03%201.png" />
                    <h3>Unlimited Automations</h3>
                    <p>Use our default Automations + create your own custom ones. Abandoned Cart, Upsell...</p>
                </div>
                <div className="features__feature">
                    <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b80a1b3bcb118b3719bdf_16%202.png" />
                    <h3>Popups + Themes</h3>
                    <p>Use our Copyrighted Popup themes and our patent pending layout design!</p>
                </div>
                <div className="features__feature">
                    <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b41ef9005f97ad83072b9_30%202.png" />
                    <h3>Conversations</h3>
                    <p>Connect all of your brand assets in one place. Talk through text, email, instagram..</p>
                </div>
                <div className="features__feature">
                    <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b4212b2edac4370aea999_07%201.png" />
                    <h3>Integrations</h3>
                    <p>Integrate through Shopify, mailchimp, klayvio, instagram, facebook and more!</p>
                </div>
            </div>
        </div>
    )
}

export default Features
