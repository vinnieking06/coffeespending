import React, { Component } from 'react';
import Scatter from './scatter-2';
import ZoomScatter from './scatter';
import Line from './line';
import logo from './logo.svg';
import Pie from './pie';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      graph: null
    }
  }
  changeGraph = (graph) => {
    this.setState({ graph })
  } 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={'https://cdn.thealternativedaily.com/wp-content/uploads/2017/05/Just-one-coffee-drink-may-contain-50-grams-of-sugar.jpg'} className="App-logo" alt="logo" />
          <h1 className="App-title">Spending too much on coffee</h1>
          <span onClick={() => { this.changeGraph('pie')}}>Pie   </span><span onClick={() => { this.changeGraph('line')}}>Line   </span><span onClick={() => { this.changeGraph('scatter')}}>First try scatter </span> <span onClick={() => { this.changeGraph('zoom')}}> Zoom</span>
        </header>
      { renderGraph(this.state.graph)}
      </div>
    );
  }
}

const renderGraph = (state) => {
  switch (state) {
    case 'pie':
      return <Pie />;
    case 'line':
      return <Line />;
    case 'scatter':
      return <Scatter />
    case 'zoom':
      return <ZoomScatter />
    default:
      return <div> <h1> Who likes Starbucks? </h1></div>
  }
}
export default App;
