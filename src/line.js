import React from 'react';
import moment from 'moment';
import { data } from './coffee.js';
import { VictoryScatter, VictoryChart, VictoryTheme, VictoryZoomContainer, VictoryLine, VictoryLegend, VictoryAxis } from 'victory';
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
    console.log('17',year17ByMonth)
    const year18ByMonth = this.monthly(year18);

    const formattedData = data.map((item) => {
      return {
        x: item.Date, y: parseInt(item.Amount)
      }
    })

    return (
      <VictoryChart height={200} >
        <VictoryLegend y={0}
          title='Coffee spending by year'
          centerTitle gutter={20}
          orientation='horizontal'
          data={[
            {name: '2013', symbol: { fill: 'black'}},
            {name: '2014', symbol: { fill: 'red' }},
            {name: '2015', symbol: { fill: 'yellow' }},
            {name: '2016', symbol: { fill: 'orange' }},
            {name: '2017', symbol: { fill: 'blue' }},
            {name: '2018', symbol: { fill: 'silver' }},
            ]} />
          <VictoryAxis style={ { axisLabel: { fontSize: 8 }, tickLabels: { fontSize: 8 } } } label='year'/>
          <VictoryAxis style={ { axisLabel: { fontSize: 8 }, tickLabels: { fontSize: 8 } } } label='dollars' dependentAxis />
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
            data={year18ByMonth}
          />
      </VictoryChart>
    )
  }
}