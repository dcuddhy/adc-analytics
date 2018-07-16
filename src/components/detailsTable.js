import React, { Component } from 'react';
import DetailsTableRow from './detailsTableRow.js'
import './detailsTable.css';


class DetailsTable extends Component {
  sortDataRows(object, value, order) {
    this.props.sortDataRows(object, value, order);
  }

  render() {
    return (
      <div className="display-table-container">
        <div className="responsive-message"><em>
          Your browser currently isn't wide enough to view all of this data. Some
          of it is being hidden for now. We'll share it again when you're working
          in a larger window.
        </em></div>
        <table className="display-table">
          {
            // We should probably create a detailsTableHeader component.  There is a lot of
            // repetition here.  That may require creating an array of values - referring to sortDataRows() params.
          }
          <thead>
            <tr>
              <td className="device" title="Device">
                Device
                <i className="fas fa-sort" onClick={() => this.sortDataRows(this.props.dataRows, 'device', this.props.dataRowsOrder)}></i>
              </td>
              <td className="hourOfDay" title="Hour Of Day">
                Hour
                <i className="fas fa-sort" onClick={() => this.sortDataRows(this.props.dataRows, 'hourOfDay', this.props.dataRowsOrder)}></i>
              </td>
              <td className="impressions" title="Impressions">
              Imprs.
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.props.dataRows, 'impressions', this.props.dataRowsOrder)}></i>
              </td>
              <td className="clicks" title="Clicks">
                Clicks
                <i className="fas fa-sort" onClick={() => this.sortDataRows(this.props.dataRows, 'clicks', this.props.dataRowsOrder)}></i>
              </td>
              <td className="ctr" title="Click Through Rate">
                CTR
                <i className="fas fa-sort" onClick={() => this.sortDataRows(this.props.dataRows, 'ctr', this.props.dataRowsOrder)}></i>
              </td>
              <td className="cost" title="Cost">
                Cost
                <i className="fas fa-sort" onClick={() => this.sortDataRows(this.props.dataRows, 'cost', this.props.dataRowsOrder)}></i>
              </td>
              <td className="avgCpc" title="Average Cost Per Click">
                Avg CPC
                <i className="fas fa-sort" onClick={() => this.sortDataRows(this.props.dataRows, 'avgCpc', this.props.dataRowsOrder)}></i>
              </td>
              <td className="avgPosition" title="Average Position">
                Avg Pos.
                <i className="fas fa-sort" onClick={() => this.sortDataRows(this.props.dataRows, 'avgPosition', this.props.dataRowsOrder)}></i>
              </td>
              {
              // TODO: Verify that SIS is an appropriate abbreviation to searchImpressionShare.
              }
              <td className="searchImpressionShare" title="Search Impressions Share">
                SIS
                <i className="fas fa-sort" onClick={() => this.sortDataRows(this.props.dataRows, 'searchImpressionShare', this.props.dataRowsOrder)}></i>
              </td>
              <td className="maxImpressions" title="Max Impressions">
                Max Imprs.
                <i className="fas fa-sort" onClick={() => this.sortDataRows(this.props.dataRows, 'maxImpressions', this.props.dataRowsOrder)}></i>
              </td>
              <td className="conversions" title="Conversions">
                Convs.
                <i className="fas fa-sort" onClick={() => this.sortDataRows(this.props.dataRows, 'conversions', this.props.dataRowsOrder)}></i>
              </td>
            </tr>
          </thead>
          <tbody>
          {
          // We can use dataRow.searchImpressionShare as a key, but that seems weird.
          // Let's use an index. Using an index might get messy if users are able to
          // mutate data, but I think it'l be fine for sorting.
          }
          {this.props.dataRows.map((dataRow, index)=> {
            return <DetailsTableRow dataRow={dataRow} key={index} sortDataRows={this.sortDataRows} />
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DetailsTable;
