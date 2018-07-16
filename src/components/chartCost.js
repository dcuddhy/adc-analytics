import React, { Component } from 'react';
import './chartCost.css';


class ChartCost extends Component {
  render() {
    return (
      <div className="chartCost">
        Total Cost: {this.props.totalCost} <br />
        Average Cost Per Hour: {this.props.averageCost} <br />
      </div>
    );
  }
}

export default ChartCost;
