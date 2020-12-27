import React from 'react'
import "../../styles/Home/HeroVideo.css"
import placeholder from "../../Assets/Images/blurred-hero-placeholder.jpg"

const HeroVideo: React.FC = (): JSX.Element => {
    return (
        <div className="heroVideo">
            <div className="heroVideo__container">
                <img className="blurredImg" src={placeholder} alt="blurred video placeholder"/> 
                <a href="https://youtu.be/n9B4Isq-dM8" rel="noreferrer" target="_blank">
                <div className="heroVideo__play-button">
                    <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5 9.93782C30.1667 12.6321 30.1667 19.3679 25.5 22.0622L10.5 30.7224C5.83333 33.4167 2.15153e-06 30.0489 2.38707e-06 24.6603L3.14418e-06 7.33974C3.37972e-06 1.95114 5.83334 -1.41673 10.5 1.27757L25.5 9.93782Z" fill="url(#paint0_linear)"></path>
                    <defs>
                    <linearGradient id="paint0_linear" x1="12" y1="7" x2="12" y2="62.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                    </linearGradient>
                    </defs>
                    </svg>
                </div>
                </a>
            </div>
        </div>
    )
}

export default HeroVideo
