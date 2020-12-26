import React from 'react'
import "../../styles/Pricing/SolutionsGrid.css"

const SolutionsGrid: React.FC = (): JSX.Element => {
    return (
        <div className="solutionsGrid">
            <div className="solutionsGrid__row">
                <div className="solutionsGrid__row-item item-1">
                    <h2>Total Business Solution</h2>
                    <p>Consultation, Landing Pages, Social Media, Logo, Branding, Popups, Ads, Videos</p>
                </div>
            </div>
            <div className="solutionsGrid__row">
                <div className="solutionsGrid__row-item item-2">
                    <h2>Landing Pages</h2>
                    <p>From our expertise we can create a complete solution in days that will blow your mind</p>
                </div>
                <div className="solutionsGrid__row-item item-3">
                    <h2>Social Media Content</h2>
                    <p>From our expertise we can create a complete solution in days that will blow your mind</p>
                </div>
            </div>
            <div className="solutionsGrid__row">
                <div className="solutionsGrid__row-item item-4">
                    <h2>Custom Created Popups</h2>
                    <p>We will create popups dedicated to your brand and increase CR %</p>
                </div>
            </div>
            <div className="solutionsGrid__row">
                <div className="solutionsGrid__row-item item-5">
                    <h2>Videos</h2>
                    <p>We will create the absolute best marketing or brand videos</p>
                </div>
                <div className="solutionsGrid__row-item item-6">
                    <h2>Facebook Advertisement</h2>
                    <p>We will develop and advertise to achieve 3+ ROAS guaranteed</p>
                </div>
                <div className="solutionsGrid__row-item item-7">
                    <h2>Google Advertisement</h2>
                    <p>We will develop and advertise to achieve 3+ ROAS guaranteed</p>
                </div>
            </div>
            <div className="solutionsGrid__row">
                <div className="solutionsGrid__row-item item-8">
                    <h2>George Consultation</h2>
                    <p>In 30 Minutes I will give you strategy to double your business or your money back.</p>
                </div>
                <div className="solutionsGrid__row-item item-9">
                    <h2>Snapchat, Pinterest, Other</h2>
                    <p>We will create a full advertisement strategy for lesser utilized ways of marketing!</p>
                </div>
            </div>
        </div>
    )
}

export default SolutionsGrid
