import React from "react"

import "./sideBanner.css"

import WeightsIcon from "../../assets/weights-icon.png"
import CyclingIcon from "../../assets/cycling-icon.png"
import ZenIcon from "../../assets/zen-icon.png"
import SwimmingIcon from "../../assets/swimming-icon.png"

/**
 * Creates the side banner by importing icons straight from assets files 
 * along with a copyright disclaimer
 * @component used in Dashboard file
 * @returns - returns a React component 
 */

const SideBanner = () => {
    return (
      <div className="sideFooter">
        <nav className="activitiesListed">
            <div className='sideFooterIcon'>
                <img src={ZenIcon} alt='relaxation' />
            </div>
            <div className='sideFooterIcon'>
                <img src={SwimmingIcon} alt='natation' />
            </div>
            <div className='sideFooterIcon'>
                <img src={CyclingIcon} alt='cyclisme' />
            </div>
            <div className='sideFooterIcon'>
                <img src={WeightsIcon} alt='musculation' />
            </div>
        </nav>
        <p className="Disclaimer">Copyright SportSee 2021</p>
      </div>
    )
}
export default SideBanner