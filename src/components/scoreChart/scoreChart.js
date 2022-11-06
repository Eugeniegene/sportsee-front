import React from 'react'

import PropTypes from "prop-types";

import { RadialBar, RadialBarChart, ResponsiveContainer,Legend, PolarAngleAxis } from 'recharts'

import CustomScoreData from "../customLegend/customLegend.js"

import "./scoreChart.css"

/**
 * Creates the chart which allows the user to see his progression percentage regarding 
 * their initial objective. 
 * @param {number} data User's displayed score
 * @component used in Dashboard
 */
const UserScoreStats = ({todayScore}) => {
    
    const userScore = [
        {
            todayScore: todayScore * 100
        }
    ]
    return (
        <div className="userScoreChart">
            <span className='userTitle'> Score</span>
            <ResponsiveContainer width='100%' height='100%' aspect={1.2}>
                <RadialBarChart startAngle={140} endAngle={500} cx='50%' cy='50%' innerRadius={70} barSize={10} outerRadius={120} data={userScore} fill="white">
                    <PolarAngleAxis type='number' domain={[0,100]} dataKey={'todayScore'} angleAxisId={0} tick={false}/>
                    <RadialBar cornerRadius='50%' dataKey='todayScore' fill='#E60000' />
                    <Legend content={<CustomScoreData />} />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
  }

  UserScoreStats.propTypes = {
    todayScore: PropTypes.number.isRequired,
  }

  export default UserScoreStats