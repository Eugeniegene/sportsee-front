import React from "react"

import "./rightSideDetails.css"

/**
 * Generates the data that will be displayed in the dashboard file :
 * - Caloriesd intake, carbs, lipids and protein.
 * @component
 */
const RightStats = ({ icon, grData, type }) => {
    return (
        <div className="sideStats">
            <div className="userIcons">
                <img src={icon} alt={type} />
            </div>
            <div className="userData">
                {type === 'Calories' ? <span className='grData'> {grData}kCal </span> 
                :
                <span className='grData'> {grData}g </span>}
                <span className='info-type'> {type} </span>
            </div>
        </div>
    )
}
export default RightStats