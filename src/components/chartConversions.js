import React, { Component } from 'react';
import './chartClicks.css';


class ChartConversions extends Component {
  render() {
    return (
      <div className="chart chartConversions">
        Total Conversions: {this.props.totalConversions} <br />
        Avg. Conversions / Hour: {this.props.averageConversions} <br />
      </div>
    );
  }
}

export default ChartConversions;
