import React from 'react'
import Solutions from '../Components/Pricing/Solutions'
import Faq from '../Components/Pricing/Faq'
import Features from '../Components/Pricing/Features'
import PricingHero from '../Components/Pricing/PricingHero'
import SolutionsGrid from '../Components/Pricing/SolutionsGrid'

function Pricing() {
    return (
        <div>
            
            <PricingHero/>
            
            <Features/>
            
            <Faq/>
            
            <Solutions/>
            
            <SolutionsGrid/>
        </div>
    )
}

export default Pricing
