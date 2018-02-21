import React from 'react';
import moment from 'moment';
import { data } from './coffee.js';
import { VictoryScatter, VictoryChart, VictoryTheme, VictoryZoomContainer } from 'victory';
//take 1
export default class Scatter extends React.Component {
  monthly = (data) => {
    const year = {};
    data.forEach((item) => {
      const month = new Date(item.Date).getMonth();
      if (!year[month]) {
        year[month] = parseInt(item.Amount)
      } else {
        year[month] += parseInt(item.Amount)
      }
    })
    return year;
  }
  render() {
    const year13 = data.filter(item => new Date(item.Date).getFullYear() === 2013)
    const year14 = data.filter(item => new Date(item.Date).getFullYear() === 2014)
    const year15 = data.filter(item => new Date(item.Date).getFullYear() === 2015)
    const year16 = data.filter(item => new Date(item.Date).getFullYear() === 2016)
    const year17 = data.filter(item => new Date(item.Date).getFullYear() === 2017)
    const year17Good = this.monthly(year17);
    console.log(year17Good)
    const formattedData = data.map((item) => {
      return {
        x: item.Date, y: parseInt(item.Amount)
      }
    })

    return (
      <VictoryChart
        containerComponent={<VictoryZoomContainer zoomDomain={{x: [5, 35], y: [1,40]}}/>}
      >
        <VictoryScatter
          style={{ data: { fill: "#c43a31" } }}
          data={ formattedData }
          maxBubbleSize={ 1 }
        />
      </VictoryChart>
    )
  }
}