import React, { Component } from 'react';
import './chart02.css';


class Chart02 extends Component {
  // This is where we will display the second chart.
  render() {
    return (
      <div className="chart02">
        Total Impressions: {this.props.totalImpressions} <br />
        Average Impressions Per Hour: {this.props.averageImpressions} <br />
      </div>
    );
  }
}

export default Chart02;
