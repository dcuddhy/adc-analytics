import React, { Component } from 'react';
import DetailsTableRow from './detailsTableRow.js'
import './detailsTable.css';


class DetailsTable extends Component {
  sortDataRows(object, value, order) {
    this.props.sortDataRows(object, value, order);
  }

  // We should probably create a detailsTableHeader component.  There is a lot of
  // repetition here.  That may require creating an array of values - referring to sortDataRows() params.
  render() {
    return (
      <table className="display-table">
        <thead>
          <tr>
            <td title="Device">
              Device
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.props.dataRows, 'device', this.props.dataRowsOrder)}></i>
            </td>
            <td title="Hour Of Day">
              Hour
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.props.dataRows, 'hourOfDay', this.props.dataRowsOrder)}></i>
            </td>
            <td title="Clicks">
              Clicks
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.props.dataRows, 'clicks', this.props.dataRowsOrder)}></i>
            </td>
            <td title="Impressions">
              Impressions
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.props.dataRows, 'impressions', this.props.dataRowsOrder)}></i>
            </td>
            <td title="Click Through Rate">
              CTR
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.props.dataRows, 'ctr', this.props.dataRowsOrder)}></i>
            </td>
            <td title="Cost">
              Cost
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.props.dataRows, 'cost', this.props.dataRowsOrder)}></i>
            </td>
            <td title="Average Cost Per Click">
              Avg CPC
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.props.dataRows, 'avgCpc', this.props.dataRowsOrder)}></i>
            </td>
            <td title="Average Position">
              Avg Position
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.props.dataRows, 'avgPosition', this.props.dataRowsOrder)}></i>
            </td>
            {
            // TODO: Verify that SIS is an appropriate abbreviation to searchImpressionShare.
            }
            <td title="Search Impressions Share">
              SIS
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.props.dataRows, 'searchImpressionShare', this.props.dataRowsOrder)}></i>
            </td>
            <td title="Max Impressions">
              Max Impressions
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.props.dataRows, 'maxImpressions', this.props.dataRowsOrder)}></i>
            </td>
            <td title="Conversions">
              Conversions
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
    );
  }
}

export default DetailsTable;
