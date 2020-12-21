import React from 'react'
import Solutions from '../Components/Pricing/Solutions'
import Faq from '../Components/Pricing/Faq'
import Features from '../Components/Pricing/Features'
import PricingHero from '../Components/Pricing/PricingHero'

function Pricing() {
    return (
        <div>
            {/* PricingHero*/}
            <PricingHero/>
            {/* Features*/}
            <Features/>
            {/* Faq*/}
            <Faq/>
            {/* Solutions*/}
            <Solutions/>
            {/* Grid */}
        </div>
    )
}

export default Pricing
