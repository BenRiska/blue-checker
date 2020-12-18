import React from 'react'
import BookDemo from '../Components/Home/BookDemo'
import GetStarted from '../Components/Home/GetStarted'
import Hero from '../Components/Home/Hero'
import HeroVideo from '../Components/Home/HeroVideo'
import HomeDesktopAnimation from '../Components/Home/HomeDesktopAnimation'
import RevenueInfo from '../Components/Home/RevenueInfo'

function Home() {
    return (
        <div>
                {/* Hero */}
                <Hero/>
                {/* Video */}
                <HeroVideo/>
                {/* BookDemo */}
                <BookDemo/>
                {/* GetStarted */}
                <GetStarted/>
                {/*HomeDesktopAnimation*/}
                <HomeDesktopAnimation/>
                {/* RevenueSteps */}
                <RevenueInfo/>
                {/* Video */}
                <div className="home__illustartion"></div>
                {/* Banner */}
                {/* HomeMobileAnimation */}
                {/* Solutions */}
                {/* HomeStaggerAnimation */}
                {/* ConversionDemo */}
                {/* Testimonials */}
                {/* Banner */}
                
        </div>
    )
}

export default Home
