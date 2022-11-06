import "./customLegend.css"

/**
 * Creates a legend to show a detailed score value of the user based on the payload
 * @component
 * @payload 
 */
const CustomScoreData = (payload) => {
    return (
      <div className='custom-legend-score'>
        <p className='custom-legend-score-data'>
          {payload?.payload[0]?.payload.todayScore}%
        </p>
        <p className='custom-legend-score-objective'> de votre objectif</p>
      </div>
    )
  }
export default CustomScoreData