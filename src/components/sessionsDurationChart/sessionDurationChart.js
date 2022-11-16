import React from 'react';

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

import PropTypes from "prop-types";

import CustomTooltipSession from "../customTooltipSession/customTooltipSession.js"

import "./sessionDurationChart.css"

/**
 * This chart will initialise a the duration of a sport session on the average
 * A custom tooltip is also added, but initially created in another component file.
 * @component used in Dashboard
 */

const SessionStats = ({userAverageSessions}) => {
        return (
            <div className="sessionStatsDuration">
                <span className='chartTitle'> Durée moyenne de vos sessions</span>
                <ResponsiveContainer  width='100%' height='100%'aspect={1.2}>
                    <LineChart width='100%' height='100%' data={userAverageSessions} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                        <XAxis dataKey="day" stroke='white' opacity={0.5} tickLine={false} axisLine={false}/>
                        <YAxis padding={{ top: 50 }} stroke='white' opacity={0.5} tickLine={false} axisLine={false} hide/>
                        <Tooltip content={<CustomTooltipSession />} cursor={{stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 30 }}/>
                        <Line type="basis" dataKey="sessionLength" dot = {false} strokeWidth={2}  activeDot={{stroke: "white", strokeOpacity: 0.2, fill: "white", strokeWidth: 15, r: 5, }}stroke="white" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }

    SessionStats.propTypes = {
        userAverageSessions: PropTypes.arrayOf(
            PropTypes.shape({
                day: PropTypes.string,
                sessionsLength: PropTypes.number,
              })
          ),
        }
  export default SessionStats