import React, {useEffect} from 'react'
import Banner from '../Components/Home/Banner'
import BookDemo from '../Components/Home/BookDemo'
import Conversions from '../Components/Home/Conversions'
import GetStarted from '../Components/Home/GetStarted'
import Hero from '../Components/Home/Hero'
import HeroVideo from '../Components/Home/HeroVideo'
import HomeDesktopAnimation from '../Components/Home/HomeDesktopAnimation'
import HomeIllustration from '../Components/Home/HomeIllustration'
import HomeMobileAnimation from '../Components/Home/HomeMobileAnimation'
import HomeStaggerAnimation from '../Components/Home/HomeStaggerAnimation'
import RevenueInfo from '../Components/Home/RevenueInfo'
import Solutions from '../Components/Home/Solutions'
import Testimonials from '../Components/Home/Testimonials'
import "../styles/Home/Home.css"

function Home() {

    useEffect(() => {
        const cursorImg: any = document.querySelector(".home__cursor-img");
        
        window.addEventListener("mousemove", (e: any) => {
            cursorImg.style.transform = `translateY(${e.clientY}px)`;
        })

    }, [])

    useEffect(() => {
        const nav: any = document.querySelector(".header");

        nav.style.background = "#f8faff";
    }, [])
    return (
        <div className="home">
                <div className="home__cursor-img">
                <span>Get Started</span>
                <svg   fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M78.4064 0C65.1516 0 54.4064 10.7452 54.4064 24C54.4064 37.2548 65.1516 48 78.4064 48H91.289C94.4716 48 97.5239 49.2643 99.7743 51.5147L105.431 57.1716C106.993 58.7337 109.526 58.7337 111.088 57.1716L116.745 51.5147C118.995 49.2643 122.048 48 125.23 48H137.406C150.661 48 161.406 37.2548 161.406 24C161.406 10.7452 150.661 0 137.406 0H78.4064Z" fill="#162148"></path>
                </g>
                <defs>
                <filter id="filter0_d" x="0.406433" y="0" width="255" height="206.343" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                <feOffset dx="20" dy="74"></feOffset>
                <feGaussianBlur stdDeviation="37"></feGaussianBlur>
                <feColorMatrix type="matrix" values="0 0 0 0 0.452708 0 0 0 0 0.512649 0 0 0 0 0.6625 0 0 0 0.08 0"></feColorMatrix>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                </filter>
                </defs>
                </svg>
                <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6de3612847ddd1548257d1_Mask%20Group.png" alt="home logo"></img>
                </div>
                <img className="home__img-1" src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6397a6e595360982d6c0d1_Brightness_Contrast%201%20copy.png" alt="home floating icon"></img>

                <img className="home__img-2" src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6397a6e59536e77ad6c0cf_Brightness_Contrast%201.png" alt="home floating icon"></img>
                
                <Hero/>
                
                <HeroVideo/>
                
                <BookDemo/>
                
                <GetStarted/>
                
                <HomeDesktopAnimation/>
                
                <RevenueInfo/>
                
                <HomeIllustration/>
                
                <Banner/>
                
                <HomeMobileAnimation/>
                
                <Solutions/>
                
                <HomeStaggerAnimation/>
                
                <Conversions/>
                
                <Testimonials/>
                
                <Banner/> 
                
        </div>
    )
}

export default Home
