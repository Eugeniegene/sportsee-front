import PropTypes from 'prop-types'

import "./customTooltip.css"

/**
 * Creates a tooltip to show a detailed overlook on a selected day :
 * weight and calories.
 * @component used in dailyChart
 * @param active only true if a box appears
 * @param payload datas selected to be shown
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

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
}

export default CustomTooltip