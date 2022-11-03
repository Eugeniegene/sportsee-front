import React from 'react'

import { RadialBar, RadialBarChart, ResponsiveContainer,Legend } from 'recharts'

import { useState, useEffect } from 'react'

import {fetchUserScoreById} from "../../Api-Data/userData-Api"

import CustomScoreData from "../customLegend/customLegend.js"

import "./scoreChart.css"

const UserScoreStats = () => {
    
    const [userScore, setUserScore] = useState([])

        useEffect(() => {
        fetchUserUserScore()
        }, [])

        async function fetchUserUserScore () {
            const userData = await fetchUserScoreById()
            setUserScore(userData)
    }
    return (
        <div className="userScoreChart">
            <span className='userTitle'> Score</span>
            <ResponsiveContainer width='100%' height='100%' aspect={1.2}>
                <RadialBarChart startAngle={140} endAngle={500} cx='50%' cy='50%' innerRadius={70} barSize={10} outerRadius={120} data={userScore} fill="white">
                    <RadialBar cornerRadius='50%' dataKey='todayScore' fill='#E60000' />
                    <Legend content={<CustomScoreData />} />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
  }
  export default UserScoreStats