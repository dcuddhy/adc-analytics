import React, { Component } from 'react';
import './chart03.css';


class Chart03 extends Component {
  // This is where we will display the third chart.
  render() {
    return (
      <div className="chart03">
        Total Clicks: {this.props.totalClicks} <br />
        Average Clicks Per Hour: {this.props.averageClicks} <br />
      </div>
    );
  }
}

export default Chart03;
