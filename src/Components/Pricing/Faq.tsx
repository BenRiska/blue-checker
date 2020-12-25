import React, {useState} from 'react'
import "../../styles/Pricing/Faq.css"

function Faq() {

    const [question1, setQuestion1] = useState(false)
    const [question2, setQuestion2] = useState(false)
    const [question3, setQuestion3] = useState(false)

    return (
        <div className="faq">
            <h1>
                <span>Frequently Asked</span>
                <span>Questions</span>
            </h1>
            <div className="faq__list">
                <div 
                className="faq__question" 
                style={{background: question1 ? "#f8faff" : ""}}
                onClick={() => setQuestion1(prev => !prev)}>
                    <h2>What is the Free Forever Plan
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9999 12H7.99988M11.9999 16V8" stroke="CurrentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    </h2>
                    {question1 && <div className="faq__answer">
                        <p>The free plan goes up to 50,000 active subscribers.This means that you pay a guaranteed rate of 1000% ROAS (or 10% of sales) for using all of BlueReceipt’s features. This means unlimited texts, conversations, campaigns, automations</p>
                    </div>}
                </div>
                <div 
                className="faq__question" 
                style={{background: question2 ? "#f8faff" : ""}}
                onClick={() => setQuestion2(prev => !prev)}>
                    <h2>How is the Enterprise Plan Different?
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9999 12H7.99988M11.9999 16V8" stroke="CurrentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    </h2>
                    { question2 && <div className="faq__answer">
                        <p>The enterprise is for those who do over $100,000 a month in revenue/50,000 subscribers. You will receive VIP access to new features and have 1-1 guidance to transform everything about your business. In 1 consultation with George you will likely receive $20,000+ worth of value. Schedule a free consultation if you fit the criteria.</p>
                    </div>}
                </div>
                <div 
                className="faq__question" 
                style={{background: question3 ? "#f8faff" : ""}}
                onClick={() => setQuestion3(prev => !prev)}>
                    <h2>How can I achieve 15-25%increase in revenue?
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9999 12H7.99988M11.9999 16V8" stroke="CurrentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    </h2>
                     {question3 && <div className="faq__answer">
                        <p>After onboarding you should be able to convert 15-20% of your abandoned cart subscribers. With our patent pending popup you should be able to subscribe 30-40% of visitors allowing you to increase CR, LTV and NPS as you grow your business. These simple things will transform your business</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Faq
