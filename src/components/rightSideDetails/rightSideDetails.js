import React from "react"

import PropTypes from "prop-types"

import "./rightSideDetails.css"

/**
 * Generates the data that will be displayed in the dashboard file :
 * @component used in Dashboard
 * @param {String} icon gets the specific image for a card
 * @param {Number} grData gets the total data for a cart 
 * @param {String} type gets the type of nutrient 
 * @returns -returns a React component
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

RightStats.propTypes = {
    icon: PropTypes.string.isRequired,
    grData: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
}
export default RightStats