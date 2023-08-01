import React from "react";
import "./Chart.css";

import ChartBars from "./ChartBars";

const Charts = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxExpense = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBars
          value={dataPoint.value}
          maxValue={maxExpense}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Charts;
