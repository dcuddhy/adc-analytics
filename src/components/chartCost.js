import React, { Component } from 'react';
import './chartCost.css';


class ChartCost extends Component {
  render() {
    return (
      <div className="chart chartCost">
        Total Cost: {this.props.totalCost} <br />
        Avg Cost / Hour: {this.props.averageCost} <br />
      </div>
    );
  }
}

export default ChartCost;
