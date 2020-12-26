import React from 'react'
import "../../styles/Home/Solutions.css"

const Solutions: React.FC = (): JSX.Element => {
    return (
        <div className="solutions">
            <div className="solutions__header">
                <h3 className="solutions__tag">Blue World</h3>
                <h1>
                    <span>a Fully Integrated Suite of</span>
                    <span>E-Commerce Solutions</span>
                </h1>
                <p>Personalized Omnichannel Conversational Commerce at scale. Make thousands on autopilot in minutes!</p>
                <button>Get Started</button>
            </div>
            <div className="solutions__grid">
                <div className="solutions__row">
                    <div className="solutions__image-small">
                        <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f70e4aaf217014aa598fff3_campaigns.jpg" loading="lazy" alt="solution demo" />
                        <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f71d56244fb7b549eaf0e6f_blue%20Chart.png"  width="215.5" alt="solution demo"></img>
                        <h2 style={{color: "#004082"}}>Campaigns</h2>
                    </div>
                    <div className="solutions__image-large">
                        <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f70e4bd713f780fd1474b9d_automations.jpg" loading="lazy" alt="solution demo" />
                        <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f71d64b352e4b30da6f5c0d_Red%20Text%20Box.png"  width="250.5" alt="solution demo"></img>
                        <h2 style={{color: "#591f74"}}>Automations</h2>
                    </div>
                </div>
                <div className="solutions__row">
                <div className="solutions__image-large">
                        <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f70e53efabb2241c130a50c_conversation.jpg" alt="solution demo"  />
                        <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f71e2aea713393f0396a180_text.png" width="358.5" height="350" alt="solution demo" sizes="(max-width: 991px) 280px, 360px" />
                        <h2 style={{color: "#7b2d45"}}>Conversations</h2>
                    </div>
                    <div className="solutions__image-small">
                        <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f70e4f114be5ff92f1e4d6c_popups.jpg" alt="solution demo" loading="lazy" />
                        <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f71e2a30b48018009ef4544_buy.png"  width="231" alt="solution demo"/>
                        <h2 style={{color: "#244b34"}}>Pop-Up</h2>
                    </div>
                </div>
                <div className="solutions__row">
                    <div className="solutions__image-small">
                        <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f70e529f487806a931521b6_livechat.jpg" loading="lazy" width="400" alt="solution demo" sizes="(max-width: 991px) 280px, 400px" />
                        <img alt="solution demo" src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f71d73186b23c803a9338ea_Bee.png"  width="240" ></img>
                        <h2 style={{color: "#6f5230"}}>Live Chat</h2>
                    </div>
                    <div className="solutions__image-large">
                        <img alt="solution demo" src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f70e55444d996cd4b6a91d2_dashboard.jpg" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 991px) 532px, (max-width: 1439px) 60vw, 620px" />
                        <img alt="solutions demo" src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f71d79812c4eabc6ff6e4db_Cylinder.png"  width="245.5" />
                        <h2 style={{color: "#1f6274"}}>Automations</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solutions
