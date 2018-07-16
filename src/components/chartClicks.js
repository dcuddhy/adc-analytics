import React, { Component } from 'react';
import './chartClicks.css';


class ChartClicks extends Component {
  render() {
    return (
      <div className="chart chartClicks">
        <h3>Total Clicks: </h3>
        <div className="chartValue">
          {this.props.totalClicks}
        </div>
        <h5>Avg. / Hour: {this.props.averageClicks}</h5>
      </div>
    );
  }
}

export default ChartClicks;
