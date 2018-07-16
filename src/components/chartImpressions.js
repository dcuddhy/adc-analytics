import React, { Component } from 'react';
import './chartImpressions.css';


class ChartImpressions extends Component {
  render() {
    return (
      <div className="chartImpressions">
        Total Impressions: {this.props.totalImpressions} <br />
        Average Impressions Per Hour: {this.props.averageImpressions} <br />
      </div>
    );
  }
}

export default ChartImpressions;
