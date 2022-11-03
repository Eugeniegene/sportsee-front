import "./customTooltip.css"

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