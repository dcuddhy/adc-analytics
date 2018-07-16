import React, { Component } from 'react';
import './chart01.css';


class Chart01 extends Component {
  // This is where we will display the first chart.
  render() {
    return (
      <div className="chart01">
        Total Cost: {this.props.totalCost} <br />
        Average Cost Per Hour: {this.props.averageCost} <br />
      </div>
    );
  }
}

export default Chart01;
