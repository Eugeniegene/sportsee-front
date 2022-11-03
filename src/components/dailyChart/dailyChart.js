import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { useState, useEffect } from 'react'

import CustomTooltip from "../customTooltip/customTooltip.js"

import {fetchDailyActivityById} from "../../Api-Data/userData-Api"

import "./dailyChart.css"

const DailyChart = () => {
    

    const [activity, setActivity] = useState([])

    useEffect(() => {
      fetchActivityUser()
    }, [])
  
    async function fetchActivityUser () {
      const info = await fetchDailyActivityById()
      setActivity(info)
    }

    return (
        <div className="DailyChart-container">
            <span className="chart-title">Activité quotidienne</span>
            <div className="userDataChart">
                <div className="weight-block">
                    <i style={{marginRight:"10px"}} className="fa-solid fa-circle"></i>
                    <span className="weight-data">Poids (kg)</span>
                </div>
                <div className="cal-block">
                    <i style={{color: "red", marginRight:"10px"}} className="fa-solid fa-circle"></i>
                    <span className="cal-data">Calories brûlées (kCal)</span>
                </div>
                
            </div>
            <ResponsiveContainer width="100%" height="100%"aspect={3}>
                <BarChart width='50%' height='50%' data={activity} >
                <CartesianGrid strokeDasharray='3 3' vertical={false} />
                <XAxis dataKey='day' tickLine={false} axisLine={false} />
                <XAxis dataKey='calories' type='number' tickLine={false} axisLine={false} />
                <YAxis dataKey='kilogram' type='number' tickLine={false} orientation='right' axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} />
                <Tooltip content={<CustomTooltip />} offset={30} />{' '}
                <YAxis dataKey='calories' type='number' yAxisId='calorie' hide />
                <Bar name='Poids (kg)' dataKey='kilogram' radius={[10, 10, 0, 0]} barSize={7} fill='#282D30' />
                <Bar name='Calories brûlées (kCal)' dataKey='calories' radius={[10, 10, 0, 0]} barSize={7} yAxisId='calorie' fill='#E60000' />
            </BarChart>
            </ResponsiveContainer>
            </div>
    )
  }

export default DailyChart