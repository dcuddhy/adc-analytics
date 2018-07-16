import React, { Component } from 'react';
import './chartClicks.css';


class ChartClicks extends Component {
  render() {
    return (
      <div className="chart chartClicks">
        Total Clicks: {this.props.totalClicks} <br />
        Avg. Clicks / Hour: {this.props.averageClicks} <br />
      </div>
    );
  }
}

export default ChartClicks;
