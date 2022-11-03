import "./customLegend.css"

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