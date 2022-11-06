import PropTypes from 'prop-types'

import "./customTooltipSession.css"

/**
 * Creates a tooltip which shows the duration of a session via payload.
 * @component used in sessionDurationChart
 * @param active only true if a box appears
 * @param payload datas selected to be shown
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

CustomTooltipSession.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
}

export default CustomTooltipSession