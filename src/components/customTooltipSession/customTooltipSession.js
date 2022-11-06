import "./customTooltipSession.css"

/**
 * Creates a tooltip which shows the duration of a session via payload.
 * @component
 * @payload 
 */

const CustomTooltipSession = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
          <div className='duration-tooltip'>
            <p> {`${payload[0].value} min`}</p>
          </div>
        )
      }
    return null
}

export default CustomTooltipSession