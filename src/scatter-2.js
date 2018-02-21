import React from 'react';
import { data } from './coffee.js';
import { VictoryScatter, VictoryChart, VictoryTheme } from 'victory';
//take 1
export default class Scatter extends React.Component {
  render() {
    const formattedData = data.map((item) => {
      return {
        x: item.Date, y: parseInt(item.Amount)
      }
    })
    console.log(formattedData)
    return (
      <VictoryChart
      >
        <VictoryScatter
          style={{ data: { fill: "#c43a31" } }}
          data={ formattedData }
        />
      </VictoryChart>
    )
  }
}