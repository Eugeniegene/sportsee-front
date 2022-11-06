import "./customTooltip.css"

/**
 * Creates a tooltip to show a detailed overlook on a selected day :
 * weight and calories.
 * @component
 * @payload 
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
          <div className="customTooltipBlock">
            <p>{`${payload[0].value} kg`}</p>
            <p>{`${payload[1].value} kCal`}</p>     
          </div>
      )
    }
    return null;
}

export default CustomTooltip