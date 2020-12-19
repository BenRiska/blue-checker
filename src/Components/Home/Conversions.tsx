import React from 'react'
import "../../styles/Home/Conversions.css"
import image from "../../Assets/Images/conversions.png"

function Conversions() {
    return (
        <div className="conversions">
            <img className="conversions__backdrop" src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b78052573758934f6c0db_Group%2042619.png" loading="lazy" sizes="(max-width: 1399px) 100vw, 1399px"></img>
            
            <div className="conversions__header">
                <div className="conversions__info">
                    <h3>Personal Conversions at Scale</h3>
                    <h1>
                        <span>The Backbone for</span>
                        <span>Internet Business</span>
                    </h1>
                    <p>
                    Text marketing has the best statistics for helping your business make more revenue. The opportunity it presents is unlike anything else. The metrics below tell a story. These metrics allows you to achieve record breaking revenue numbers in a few clicks. At BlueReceipt we service millions of Text messages monthly for <span>8-9 Figure companies.</span>
                    </p>
                </div>
                <img src={image} alt="conversions logo"/>
            </div>
            <div className="conversions__stats">
                <div className="conversions__stat">
                    <h3>98%</h3>
                    <span>Open Rate</span>
                    <p>Transform your Marketing % customer service.</p>
                </div>
                <div className="conversions__stat">
                    <h3>19%</h3>
                    <span>Abandoned checkout CR</span>
                    <p>Our pricing is simple. You only pay for generated sales.</p>
                </div>
                <div className="conversions__stat">
                    <h3>1000%</h3>
                    <span>guaranteed roas</span>
                    <p>Automate your texts. Achieve insane conversion rates!</p>
                </div>
                <div className="conversions__stat">
                    <h3>7Day</h3>
                    <span>free trial</span>
                    <p>Automate your texts. Achieve insane conversion rates!</p>
                </div>
            </div>
        </div>
    )
}

export default Conversions
