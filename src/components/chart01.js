import React, { Component } from 'react';
import './chart01.css';


class Chart01 extends Component {
  // This is where we will display the first chart.
  render() {
    return (
      <div className="chart01">
        Total Impressions: {this.props.totalImpressions} <br />
        Average Impressions Per Hour: {this.props.averageImpressions} <br />
        {console.log('totalImpressions! ', this.props.totalImpressions)}
      </div>
    );
  }
}

export default Chart01;
