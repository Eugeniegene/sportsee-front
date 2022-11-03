import React from 'react';

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { useState, useEffect } from 'react'

import {fetchSessionsId} from "../../Api-Data/userData-Api"

import "./sessionDurationChart.css"

const SessionStats = () => {
    
    const [userValue, setUserValue] = useState([])

        useEffect(() => {
        fetchUserValue()
        }, [])

        async function fetchUserValue () {
            const userData = await fetchSessionsId()
            setUserValue(userData)
    }
    return (
        <div className="sessionStatsDuration">
            <span className='chartTitle'> Durée moyenne de vos sessions</span>
            <ResponsiveContainer  width='100%' height='100%'aspect={1.2}>
            <LineChart width='50%' height='50%' data={userValue}
                margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                <XAxis dataKey="day" stroke='white' opacity={0.5} tickLine={false} axisLine={false}/>
                <YAxis padding={{ top: 50 }} stroke='white' opacity={0.5} tickLine={false} axisLine={false} hide />
                <Line type="monotone" dataKey="sessionLength" dot = {false} stroke="white" />
            </LineChart>
            </ResponsiveContainer>
        </div>
    )
  }
  export default SessionStats