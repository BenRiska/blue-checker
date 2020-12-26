import React from 'react'
import "../../styles/Blog/BlogHeader.css"

const BlogHeader: React.FC = (): JSX.Element => {
    return (
        <div className="blogHeader">
            <h1>
                <span>Latest News</span>
                <span>&</span>
                <span>Updates</span>
            </h1>
            <p>
                Integrate reviews & feedback into any
                <br/>
                website or social platform
            </p>

            <div className="blogHeader__input">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7138 6.8382C18.1647 9.28913 18.1647 13.2629 15.7138 15.7138C13.2629 18.1647 9.28913 18.1647 6.8382 15.7138C4.38727 13.2629 4.38727 9.28913 6.8382 6.8382C9.28913 4.38727 13.2629 4.38727 15.7138 6.8382" stroke="#b1bdda" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M19.0009 19L15.7109 15.71" stroke="#b1bdda" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <input type="text" placeholder="Search..."/>
            </div>
            <img className="blogHeader__img1" alt="blog header logo" src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5fad2f6259b5638896186658_Cylinder.png" ></img>
            <img className="blogHeader__img2" alt="blog header logo" src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5fad2f6259b563cc4718665b_Bee.png"></img>
        </div>
    )
}

export default BlogHeader
