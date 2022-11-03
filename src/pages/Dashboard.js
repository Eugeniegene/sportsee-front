import React from "react"
import { useState, useEffect } from 'react'

import CaloriesIcon from "../assets/calories-icon.png"
import CarbsIcon from "../assets/carbs-icon.png"
import ProteinIcon from "../assets/protein-icon.png"
import LipidIcon from "../assets/lipid-icon.png"

import DailyChart from "../components/dailyChart/dailyChart.js"
import RightStats from "../components/rightSideDetails/rightSideDetails.js"
import SessionStats from "../components/sessionsDurationChart/sessionDurationChart.js"
import PerformanceRadar from "../components/performanceValueRadar/performanceValueRadar.js"
import UserScoreStats from "../components/scoreChart/scoreChart.js"

import { fetchMainInformation, fetchMainUserInformation } from "../Api-Data/userData-Api.js"

import "./Dashboard.css"

const Dashboard = () => {

    const [mainInformation, setMainInformation] = useState([])
    const [mainUserinformation, setmainUserInformation] = useState([])
    let isConnected = false
  
    useEffect(() => {
        fetchUserData()
    }, [isConnected])
  
    async function fetchUserData () {
      const neededData = await fetchMainInformation()
      setMainInformation(neededData)
      const userData = await fetchMainUserInformation()
      setmainUserInformation(userData)
    }
  
    if (mainUserinformation?.firstName !== undefined) {
        isConnected = true
    } else {
        isConnected = false
    }

    return (
        <div className="WelcomePage">
            <div className="greeting">
                <h1>Bonjour <span className='nom'> {mainUserinformation?.firstName}</span></h1>
                <span>Félicitations ! Vous avez explosé vos objectifs hier 👏</span>
            </div>
            <div className="daily_stats_chart">
                <DailyChart />
            </div>
            <div className="three_charts_block">
                <SessionStats />
                <PerformanceRadar />
                <UserScoreStats />
            </div>
            <div className="rightUserStats">
                <RightStats icon={CaloriesIcon} grData={mainInformation?.calorieCount} type='Calories' />
                <RightStats icon={CarbsIcon} grData={mainInformation?.proteinCount} type='Proteines' />
                <RightStats icon={ProteinIcon} grData={mainInformation?.carbohydrateCount} type='Glucides' />
                <RightStats icon={LipidIcon} grData={mainInformation?.lipidCount} type='Lipides' />
            </div>
        </div>
    )
  }

export default Dashboard