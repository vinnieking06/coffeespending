import React from 'react';
import { data } from './coffee.js';
import { VictoryScatter, VictoryChart, VictoryTheme, VictoryBrushContainer, VictoryZoomContainer, VictoryAxis } from 'victory';
//take 1
export default class Scatter extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleZoom(domain) {
    this.setState({selectedDomain: domain});
  }

  handleBrush(domain) {
    this.setState({zoomDomain: domain});
  }
  render() {
    const formattedData = data.map((item) => {
      return {
        x: new Date(item.Date), y: parseInt(item.Amount)
      }
    })
    console.log(formattedData)
    return (
          <VictoryChart width={1000} height={650} scale={{x: "time"}}
            containerComponent={
              <VictoryZoomContainer responsive={false}
                zoomDimension="x"
                zoomDomain={this.state.zoomDomain}
                onZoomDomainChange={this.handleZoom.bind(this)}
              />
            }
          >
        <VictoryAxis style={ { axisLabel: { fontSize: 15 }, tickLabels: { fontSize: 15 } } } label='year'/>
        <VictoryAxis style={ { axisLabel: { fontSize: 15 }, tickLabels: { fontSize: 15 } } } label='dollars' dependentAxis />
        <VictoryScatter
          style={{ data: { fill: "#c43a31" } }}
          data={ formattedData }
        />
      </VictoryChart>
    )
  }
}