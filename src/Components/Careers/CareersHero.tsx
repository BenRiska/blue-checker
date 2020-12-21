import React from 'react'
import "../../styles/Careers/CareersHero.css"

function CareersHero() {
    return (
        <div className="careersHero">
            <h1>
                <span>Want to Build</span>
                <span>the Future of E-Commerce?</span>
            </h1>
            <div className="careersHero__cards">
                <div className="careersHero__card">
                        <h2>Apply as a Designer</h2>
                        <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b5897de5ba4d446560350_Group%2041412.png" ></img>
                        <div className="card__popups">
                            <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b5897de5ba4cdfb560356_BlueReceipt_Render_38_0004%201.png" />
                            <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b5897de5ba4820a560354_BlueReceipt_Render_38_0004-1%201.png" ></img>
                            <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b5897de5ba45495560359_BlueReceipt_Render_38_0004-3%201.png"></img>
                            <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b5897de5ba4dd1656035b_BlueReceipt_Render_38_0004-2%201.png"></img>
                        </div>
                </div>
                <div className="careersHero__card">
                        <h2>Apply as a Developer</h2>
                        <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b5897de5ba42e7f56034c_Group%2041411.png" />
                        <div className="card__popups">
                            <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b5897de5ba4cdfb560356_BlueReceipt_Render_38_0004%201.png" />
                            <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b5897de5ba4820a560354_BlueReceipt_Render_38_0004-1%201.png" ></img>
                            <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b5897de5ba45495560359_BlueReceipt_Render_38_0004-3%201.png"></img>
                            <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6b5897de5ba4dd1656035b_BlueReceipt_Render_38_0004-2%201.png"></img>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default CareersHero
