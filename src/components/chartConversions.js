import React, { Component } from 'react';
import './chartConversions.css';


class ChartConversions extends Component {
  render() {
    return (
      <div className="chart chartConversions">
        <h3>Total Conversions: </h3>
        <div className="chartValue">
          {this.props.totalConversions}
        </div>
        <h5>Avg. / Hour: {this.props.averageConversions}</h5>
      </div>
    );
  }
}

export default ChartConversions;
