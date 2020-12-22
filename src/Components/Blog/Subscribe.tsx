import React from 'react'
import "../../styles/Blog/Subscribe.css"

function Subscribe() {
    return (
        <div className="subscribe">
            <img className="subscribe__img1" src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5fad2f80aaa08380663f618e_Mask%20Group.png"  alt="" ></img>
            <img className="subscribe__img2" src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5fad2f80aaa08303203f618c_Mask%20Group-1.png" alt="" ></img>
            <h1>
                <span>Subscribe to</span>
                <span>BlueReceipt</span>
            </h1>
            <p>Get the latest posts delivered right to your inbox</p>
            <div className="subscribe__input">
                <input type="text" placeholder="Your@mail.com"/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default Subscribe
