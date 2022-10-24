import React from "react"
import { useParams } from "react-router";

import CaloriesIcon from "../assets/calories-icon.png"
import CarbsIcon from "../assets/carbs-icon.png"
import ProteinIcon from "../assets/protein-icon.png"
import LipidIcon from "../assets/lipid-icon.png"

import DailyChart from "../components/dailyChart/dailyChart"
import RightStats from "../components/rightSideDetails/rightSideDetails.js"
import SessionStats from "../components/sessionsDurationChart/sessionDurationChart.js"

import { APIMockKey, APIMockName } from "../Api-Data/userData-Api.js"

import "./Dashboard.css"

const Dashboard = () => {

    const apiMocked = new APIMockKey()
    const apiMockedName = new APIMockName()

    let { userId } = useParams()
    userId = parseInt(userId)
  
    const userData = apiMocked.fetchKeyDataId(userId)
    const userName = apiMockedName.fetchNameId(userId)

    return (
        <div className="WelcomePage">
            <div className="greeting">
                <h1>Bonjour <span className='nom'> {userName} </span></h1>
                <span>Félicitations ! Vous avez explosé vos objectifs hier 👏</span>
            </div>
            <div className="daily_stats_chart">
                <DailyChart />
            </div>
            <div className="three_charts_block">
                <SessionStats />
                Value chart 
                Score chart
            </div>
            <div className="rightUserStats">
                <RightStats icon={CaloriesIcon} grData={userData?.calorieCount} type='Calories' />
                <RightStats icon={CarbsIcon} grData={userData?.proteinCount} type='Proteines' />
                <RightStats icon={ProteinIcon} grData={userData?.carbohydrateCount} type='Glucides' />
                <RightStats icon={LipidIcon} grData={userData?.lipidCount} type='Lipides' />
            </div>
        </div>
    )
  }

export default Dashboard