import React, { Component } from 'react';
import './chartClicks.css';


class ChartConversions extends Component {
  render() {
    return (
      <div className="chartConversions">
        Total Conversions: {this.props.totalConversions} <br />
        Average Conversions Per Hour: {this.props.averageConversions} <br />
      </div>
    );
  }
}

export default ChartConversions;
