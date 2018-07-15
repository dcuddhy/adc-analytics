import React, { Component } from 'react';
import './detailsTable.css';


class detailsTableRow extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="display-table-row">
        display table row<br /> <br />
        <div className="device">
          {this.props.dataRow.device}
        </div>
        <div className="hourOfDay">
          {this.props.dataRow.hourOfDay}
        </div>
        <div className="clicks">
          {this.props.dataRow.clicks}
        </div>
        <div className="impressions">
          {this.props.dataRow.impressions}
        </div>
        <div className="ctr">
          {this.props.dataRow.ctr}
        </div>
        <div className="cost">
          {this.props.dataRow.cost}
        </div>
        <div className="avgCpc">
          {this.props.dataRow.avgCpc}
        </div>
        <div className="avgPosition">
          {this.props.dataRow.avgPosition}
        </div>
        <div className="searchImpressionShare">
          {this.props.dataRow.searchImpressionShare}
        </div>
        <div className="maxImpressions">
          {this.props.dataRow.maxImpressions}
        </div>
        <div className="campaignStatus">
          {this.props.dataRow.campaignStatus}
        </div>
        <div className="conversions">
          {this.props.dataRow.conversions}
        </div>
      </div>
    );
  }
}

export default detailsTableRow;
