import React from 'react';
import moment from 'moment';
import { data } from './coffee.js';
import { VictoryScatter, VictoryChart, VictoryTheme, VictoryZoomContainer, VictoryLine, VictoryPie } from 'victory';

export default class Pie extends React.Component {
  calculateByWeek = (data) => {
    const days = {
      0: 'sunday',
      1: 'monday',
      2: 'tuesday',
      3: 'wednesday',
      4: 'thursday',
      5: 'friday',
      6: 'saturday'
    }
    const week = {
      sunday: 0,
      monday: 0,
      tuesday: 0,
      wednesday: 0,
      thursday: 0,
      friday: 0,
      saturday: 0
    }
    data.forEach((item) => {
      const numberDayOfWeek = new Date(item.Date).getDay();
      const day = days[numberDayOfWeek];
      week[day] = week[day] += parseInt(item.Amount);
    })
    const daysOfWeek = [];
    for (const key in week) {
      const day = {}
      day.x = key;
      day.y = week[key]
      if (week[key] > 0) {
        daysOfWeek.push(day)
      }
    }
    return daysOfWeek;
  }
  render(){
    const year13 = data.filter(item => new Date(item.Date).getFullYear() === 2013)
    const year14 = data.filter(item => new Date(item.Date).getFullYear() === 2014)
    const year15 = data.filter(item => new Date(item.Date).getFullYear() === 2015)
    const year16 = data.filter(item => new Date(item.Date).getFullYear() === 2016)
    const year17 = data.filter(item => new Date(item.Date).getFullYear() === 2017)
    const year18 = data.filter(item => new Date(item.Date).getFullYear() === 2018);

    const year13ByDayOfWeek = this.calculateByWeek(year13);
    const year14ByDayOfWeek = this.calculateByWeek(year14);
    const year15ByDayOfWeek = this.calculateByWeek(year15);
    const year16ByDayOfWeek = this.calculateByWeek(year16);
    const year17ByDayOfWeek = this.calculateByWeek(year17);
    const year18ByDayOfWeek = this.calculateByWeek(year18);
    return (
      <div>
        <h1> Day of the week</h1>
        <h2> 2013 </h2>
          <VictoryPie
            data={year13ByDayOfWeek}
            cornerRadius={3}
            height={150}
            labelRadius={70}
            style={{ labels: { fontSize: 7 } }}
            padding={10}
          />
          <h2> 2014 </h2>
          <VictoryPie
            data={year14ByDayOfWeek}
            cornerRadius={3}
            height={150}
            labelRadius={70}
            style={{ labels: { fontSize: 7 } }}
            padding={10}
          />
         <h2> 2015 </h2>
          <VictoryPie
            data={year15ByDayOfWeek}
            cornerRadius={3}
            height={150}
            labelRadius={70}
            style={{ labels: { fontSize: 7 } }}
            padding={10}
          />
          <h2> 2016 </h2>
            <VictoryPie
            data={year16ByDayOfWeek}
            cornerRadius={3}
            height={150}
            labelRadius={70}
            style={{ labels: { fontSize: 7 } }}
            padding={10}
          />
          <h2> 2017 </h2>
           <VictoryPie
            data={year17ByDayOfWeek}
            cornerRadius={3}
            height={150}
            labelRadius={70}
            style={{ labels: { fontSize: 7 } }}
            padding={10}
          />
          <h2> 2018 </h2>
          <VictoryPie
            data={year18ByDayOfWeek}
            cornerRadius={3}
            height={150}
            labelRadius={70}
            style={{ labels: { fontSize: 7 } }}
            padding={10}
          />
      </div>
    )
  }
}


//college years I went to coffee more during th week, now more during the weekend