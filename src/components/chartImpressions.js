import React, { Component } from 'react';
import './chartImpressions.css';


class ChartImpressions extends Component {
  render() {
    return (
      <div className="chart chartImpressions">
        Total Impressions: {this.props.totalImpressions} <br />
        Avg Impressions / Hour: {this.props.averageImpressions} <br />
      </div>
    );
  }
}

export default ChartImpressions;
