import React, { Component } from 'react';
import './chart03.css';


class Chart04 extends Component {
  // This is where we will display the third chart.
  render() {
    return (
      <div className="chart04">
        Total Clicks: {this.props.totalConversions} <br />
        Average Clicks Per Hour: {this.props.averageConversions} <br />
      </div>
    );
  }
}

export default Chart04;
