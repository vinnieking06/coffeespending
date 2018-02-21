import React from 'react';
import moment from 'moment';
import { data } from './coffee.js';
import { VictoryScatter, VictoryChart, VictoryTheme, VictoryZoomContainer, VictoryLine } from 'victory';
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
    const final = [];
    for (var key in year) {
      const obj = {};
      obj.x = parseInt(key);
      obj.y = year[key]
      final.push(obj)
    }
    return final
  }
  render() {
    const year13 = data.filter(item => new Date(item.Date).getFullYear() === 2013)
    const year14 = data.filter(item => new Date(item.Date).getFullYear() === 2014)
    const year15 = data.filter(item => new Date(item.Date).getFullYear() === 2015)
    const year16 = data.filter(item => new Date(item.Date).getFullYear() === 2016)
    const year17 = data.filter(item => new Date(item.Date).getFullYear() === 2017)
    const year18 = data.filter(item => new Date(item.Date).getFullYear() === 2018)
   
    const year13ByMonth = this.monthly(year13);
    const year14ByMonth = this.monthly(year14);
    const year15ByMonth = this.monthly(year15);
    const year16ByMonth = this.monthly(year16);
    const year17ByMonth = this.monthly(year17);
    const year18ByMonth = this.monthly(year18);
    console.log(year17, year17ByMonth)


   // console.log(year15ByMonth)
    const formattedData = data.map((item) => {
      return {
        x: item.Date, y: parseInt(item.Amount)
      }
    })

    return (
      <VictoryChart
      >
        <VictoryLine
          style={{
            data: { stroke: "black" },
            parent: { border: "1px solid #ccc"}
          }}
          data={year13ByMonth}
        />
                <VictoryLine
          style={{
            data: { stroke: "red" },
            parent: { border: "1px solid #ccc"}
          }}
          data={year14ByMonth}
        />
                <VictoryLine
          style={{
            data: { stroke: "yellow" },
            parent: { border: "1px solid #ccc"}
          }}
          data={year15ByMonth}
        />
                <VictoryLine
          style={{
            data: { stroke: "orange" },
            parent: { border: "1px solid #ccc"}
          }}
          data={year16ByMonth}
        />
                <VictoryLine
          style={{
            data: { stroke: "blue" },
            parent: { border: "1px solid #ccc"}
          }}
          data={year17ByMonth}
        />
                       <VictoryLine
          style={{
            data: { stroke: "silver" },
            parent: { border: "1px solid #ccc"}
          }}
          data={year17ByMonth}
        />
      </VictoryChart>
    )
  }
}