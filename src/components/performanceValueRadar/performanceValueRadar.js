import React from 'react';

import { ResponsiveContainer, PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'
import { useState, useEffect } from 'react'

import {fetchUserPerformanceById} from "../../Api-Data/userData-Api"

import "./performanceValueRadar.css"

/**
 * Creates the performance radar based on the users' general sports practice. 
 * @component
 */

const PerformanceRadar = () => {

  const [userPerformance, setUserPerformance] = useState([])

    useEffect(() => {
      fetchUserPerformance()
    }, [])

    async function fetchUserPerformance () {
      const userData = await fetchUserPerformanceById()
      setUserPerformance(userData)
    }

    return (
        <div className='performanceRadar'>
        <ResponsiveContainer outerRadius={90} width='100%'height="100%" aspect={1.2}>
          <RadarChart data={userPerformance}>
              <PolarGrid radialLines={false}/>
              <PolarAngleAxis dataKey='kind' stroke='white' dy={4} fontSize={10.5} tickLine={false}/>
              <Radar dataKey='value' stroke='#E60000' fill='#E60000' fillOpacity={0.7} legendType='none' />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    )
  }
  export default PerformanceRadar