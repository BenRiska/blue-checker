import React from 'react'
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

function Home() {
    return (
        <div>
                
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
