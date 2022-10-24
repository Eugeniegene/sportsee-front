import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { APIMockSessions } from '../../Api-Data/userData-Api.js'
import { useState, useEffect } from 'react'

const DailyChart = ({ userId }) => {

    const [sessionAverageData, setSessionAverageData] = useState([])

    useEffect(() => {
      getSessionAverageData()
    }, [])
  
    async function getSessionAverageData () {
      const info = await new APIMockSessions()
      setSessionAverageData(info)
    }

    return (
        <div className="DailyChart-container">
            <span className="chart-title">Activité quotidienne</span>
            <div className="userDataChart">
                <span className="weight-data">Poids (kg)</span>
                <span className="cal-data">Calories brûlées (kCal)</span>
            </div>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={sessionAverageData}
                margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
                barGap={8}
                barCategoryGap="35%"
                >
                <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke={2}
                />
                <XAxis
                    dataKey="day"
                    dy={16}
                    padding={{ left: -48, right: -48 }}
                    stroke={2}
                    tickLine={false}
                    tick={{ fontSize: 14, fontWeight: 500 }}
                />
                <YAxis
                    yAxisId="kg"
                    dataKey="kilogram"
                    domain={["dataMin - 1", "dataMax + 2"]}
                    allowDecimals={false}
                    dx={48}
                    orientation="right"
                    stroke={20}
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis
                    yAxisId="cal"
                    dataKey="calories"
                    domain={[0, "dataMax + 50"]}
                    hide={true}
                />
                <Bar
                    yAxisId="kg"
                    dataKey="kilogram"
                    maxBarSize={8}
                    fill={2}
                    radius={[50, 50, 0, 0]}
                />
                <Bar
                    yAxisId="cal"
                    dataKey="calories"
                    maxBarSize={8}
                    fill={2}
                    radius={[50, 50, 0, 0]}
                />
                <Tooltip
                    content={" "}
                    cursor={{
                    fill: "rgba(0, 0, 0, 0.1)",
                    }}
                />
            </BarChart>
                </ResponsiveContainer>
            </div>
    )
  }

export default DailyChart