import React, { Component } from 'react';
import './chartClicks.css';


class ChartClicks extends Component {
  render() {
    return (
      <div className="chartClicks">
        Total Clicks: {this.props.totalClicks} <br />
        Average Clicks Per Hour: {this.props.averageClicks} <br />
        {console.log(this.props.totalClicks)}
        {console.log(this.props.averageClicks)}
      </div>
    );
  }
}

export default ChartClicks;
