import React from 'react'
import "../../styles/Home/RevenueInfo.css"

function RevenueInfo() {
    return (
        <div className="revenueInfo">
            <div className="revenueInfo__header">
                <h2>
                    <span>3 Steps to</span>
                    <span>More Revenue
                    <svg width="320" height="86" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M214.141 1.35718C156.53-2.51195 97.8727 1.25668 42.5189 20.7907c-11.4778 4.045-22.7888 9.3588-32.3314 17.7628C5.14924 42.9879-1.05679 49.583.155496 57.6227 1.26769 64.8962 8.16328 69.3306 13.5018 72.2827c6.8184 3.6836 14.0022 6.4333 21.3986 8.1905 27.1152 6.7081 56.1323 5.6403 83.7256 5.1755 32.254-.5527 64.418-2.6883 96.516-6.0674 21.719-2.0913 43.323-5.4963 64.719-10.2005 12.301-2.8139 30.318-6.281 37.959-18.931 5.083-8.4543.634-16.0167-6.417-20.7023-13.024-8.6553-27.928-13.5419-42.62-16.9965-34.322-8.07744-70.424-7.14784-105.146-3.30384-.59.06281-1.546 1.80894-.657 1.74614 28.57-2.14106 57.263-.535 85.506 4.7861 13.146 2.5125 26.27 5.5022 38.927 10.3638 5.71 2.2225 11.264 4.9268 16.616 8.0899 3.792 2.2235 9.298 5.3138 10.399 10.4768 1.279 6.0675-6.073 8.8814-10.01 10.6652-6.796 2.9585-13.817 5.2081-20.976 6.7207-17.384 4.0701-35.09 6.8212-52.729 8.9694-28.328 3.4671-56.833 5.6906-85.305 6.8463-27.938 1.1306-56.177 1.9471-84.0486-.9296-16.06-1.6456-33.9552-4.0576-48.0133-13.9942-4.44877-3.2033-10.68817-9.0572-6.67316-15.4513C12.6009 38.1892 25.7137 32.486 34.9671 28.5541 60.9257 17.4492 89.4757 11.3063 116.947 7.53772c31.664-4.44698 63.606-4.91177 95.482-2.98978 1.112.06281 2.913-3.11539 1.712-3.19076z" fill="#0083FF"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h320v86H0z"></path></clipPath></defs></svg>
                    </span>
                </h2>
                <p>In less than 5 minutes you can generate $1,000’s on autopilot. Our  simple process is dedicated towards enhancing your business. Subscribe, connect and convert. These are the steps to success.</p>
            </div>
            <div className="revenueInfo__row">
                <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6e05fa90d82b60c65164f1_Group%2042592.svg" loading="lazy" alt="" />
                <div className="revenueInfo__row-content">
                    <div className="revenueInfo__row-number">1</div>
                    <h3>
                        <span>Start Your</span>
                        <span>Free Account</span>
                    </h3>
                    <p>Simply connect your Shopify account and get started. For other platforms simply connect using our easy to use code snippet.</p>
                </div>
            </div>
            <div className="row-reverse">
                <div className="revenueInfo__row-content">
                    <div className="revenueInfo__row-number">2</div>
                    <h3>
                        <span>Setup Your</span>
                        <span>Abandoned Cart</span>
                    </h3>
                    <p>Set up your automations and begin sending text messages to those that didn’t complete checkout. Use our tools to see exactly how your message will look</p>
                </div>
                <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6e0613ad7baca63797b28b_Group%2042593.svg" loading="lazy" alt="" />
            </div>
            <div className="revenueInfo__row">
                <img src="https://uploads-ssl.webflow.com/5f637e323fd92186000b17a2/5f6e0620d26f3c29d1a44409_Group%2042594.svg" loading="lazy" alt=""/>
                <div className="revenueInfo__row-content">
                    <div className="revenueInfo__row-number">3</div>
                    <h3>
                        <span>Setup Your Popup</span>
                        <span>& Start Free Trial</span>
                    </h3>
                    <p>Your popup will be ready for you with all your information prefilled. Simply change colors to make it unique and start subscribing! During the 7 day free trial you should increase revenue by 15%</p>
                </div>
            </div>
        </div>
    )
}

export default RevenueInfo
