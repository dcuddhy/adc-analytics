import React, { Component } from 'react';
import './chartCost.css';


class ChartCost extends Component {
  render() {
    return (
      <div className="chartCost">
        <h3>Total Cost: <span>{this.props.totalCost}</span></h3>

        <h5>Avg / Hour: <span>{this.props.averageCost}</span></h5>
      </div>
    );
  }
}

export default ChartCost;
