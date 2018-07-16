import React, { Component } from 'react';
import './chartImpressions.css';


class ChartImpressions extends Component {
  render() {
    return (
      <div className="chart chartImpressions">
        <h3>Total Impressions: </h3>
        <div className="chartValue">
          {this.props.totalImpressions}
        </div>
        <h5>Avg / Hour: {this.props.averageImpressions}  </h5>
      </div>
    );
  }
}

export default ChartImpressions;
