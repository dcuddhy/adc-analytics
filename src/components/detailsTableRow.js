import React, { Component } from 'react';
import './detailsTableRow.css';


class detailsTableRow extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <tr className="display-table-row">
        <td className="device">
          {this.props.dataRow.device}
        </td>
        <td className="hourOfDay">
          {this.props.dataRow.hourOfDay}
        </td>
        <td className="impressions">
          {this.props.dataRow.impressions}
        </td>
        <td className="clicks">
          {this.props.dataRow.clicks}
        </td>
        <td className="ctr">
          {this.props.dataRow.ctr}
        </td>
        <td className="cost">
          {this.props.dataRow.cost}
        </td>
        <td className="avgCpc">
          {this.props.dataRow.avgCpc}
        </td>
        <td className="avgPosition">
          {this.props.dataRow.avgPosition}
        </td>
        <td className="searchImpressionShare">
          {this.props.dataRow.searchImpressionShare}
        </td>
        <td className="maxImpressions">
          {this.props.dataRow.maxImpressions}
        </td>
        <td className="conversions">
          {this.props.dataRow.conversions}
        </td>
      </tr>
    );
  }
}

export default detailsTableRow;
