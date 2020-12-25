import React, {useEffect} from 'react'
import Solutions from '../Components/Pricing/Solutions'
import Faq from '../Components/Pricing/Faq'
import Features from '../Components/Pricing/Features'
import PricingHero from '../Components/Pricing/PricingHero'
import SolutionsGrid from '../Components/Pricing/SolutionsGrid'

function Pricing() {

    useEffect(() => {
        const nav: any = document.querySelector(".header");

        nav.style.background = "#f8faff";
    }, [])
    return (
        <div className="pricing">
            
            <PricingHero/>
            
            <Features/>
            
            <Faq/>
            
            <Solutions/>
            
            <SolutionsGrid/>
        </div>
    )
}

export default Pricing
