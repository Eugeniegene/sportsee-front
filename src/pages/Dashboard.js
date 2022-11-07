import React from "react"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import CaloriesIcon from "../assets/calories-icon.png"
import CarbsIcon from "../assets/carbs-icon.png"
import ProteinIcon from "../assets/protein-icon.png"
import LipidIcon from "../assets/lipid-icon.png"

import DailyChart from "../components/dailyChart/dailyChart.js"
import RightStats from "../components/rightSideDetails/rightSideDetails.js"
import SessionStats from "../components/sessionsDurationChart/sessionDurationChart.js"
import PerformanceRadar from "../components/performanceValueRadar/performanceValueRadar.js"
import UserScoreStats from "../components/scoreChart/scoreChart.js"
import ErrorPage from "../components/errorPage/errorPage.js"

import { fetchMainInformation, fetchDailyActivityById, fetchSessionsId, fetchUserPerformanceById } from "../services/userData-Api.js"

import "./Dashboard.css"

/**
 * Generates a dashboard page which contains all hooks to charts 
 * NB : 'todayScore' is used for user 12, whereas 'score' is used for user 18 (see backend)
 * @component used in index.js
 * @param {Array} returns global data about a specific user = id and UserInfos
 * @param {String} returns UserInfo data : FirstName, LastName and Age
 */

const Dashboard = () => {
    const { id } = useParams();
    const [mainInformation, setMainInformation] = useState([])

    const [userPerformance, setUserPerformance] = useState({
        "data": []
    })

    const [userActivity, setUserActivity] = useState({
        "sessions": []
    })

    const [userAverageSessions, setUserAverageSessions] = useState({
        "sessions": []
    })

    let isConnected = false
  
    useEffect(() => {
        fetchMainInformation(id).then(data => setMainInformation(data));
        fetchUserPerformanceById(id).then(data => setUserPerformance(data));
        fetchDailyActivityById(id).then(data => setUserActivity(data));
        fetchSessionsId(id).then(data => setUserAverageSessions(data));
    }, [id]);
  
    if (mainInformation?.userInfos?.firstName !== undefined) {
        isConnected = true
    } else {
        isConnected = false
    }

    return (
        isConnected ? (
        <div className="WelcomePage">
            <div className="greeting">
                <h1>Bonjour <span className='nom'> {mainInformation?.userInfos?.firstName}</span></h1>
                <span>Félicitations ! Vous avez explosé vos objectifs hier 👏</span>
            </div>
            <div className="daily_stats_chart">
                <DailyChart userActivity={userActivity}/>
            </div>
            <div className="three_charts_block">
                <SessionStats userAverageSessions={userAverageSessions} />
                <PerformanceRadar userPerformance={userPerformance}/>
                <UserScoreStats todayScore={mainInformation.todayScore  || mainInformation.score }/>
            </div>
            <div className="rightUserStats">
                <RightStats icon={CaloriesIcon} grData={mainInformation?.keyData?.calorieCount} type='Calories' />
                <RightStats icon={CarbsIcon} grData={mainInformation?.keyData?.proteinCount} type='Proteines' />
                <RightStats icon={ProteinIcon} grData={mainInformation?.keyData?.carbohydrateCount} type='Glucides' />
                <RightStats icon={LipidIcon} grData={mainInformation?.keyData?.lipidCount} type='Lipides' />
            </div>
        </div>
        ) : 
        (<ErrorPage />)
    )
  }

export default Dashboard