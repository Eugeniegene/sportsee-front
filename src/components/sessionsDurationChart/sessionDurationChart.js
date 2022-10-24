import React from 'react';

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const SessionStats = (userAverageDuration) => {
    return (
        <div className="sessionStatsDuration">
            <span className='chartTitle'> Durée moyenne de vos sessions</span>
            <ResponsiveContainer width='100%' height='100%'>
                <LineChart
                    className='durationLine'
                    data={userAverageDuration}
                    outerRadius="75%"
                    margin={{ top: 0, right: 12, bottom: 24, left: 12 }}>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
  }
  export default SessionStats