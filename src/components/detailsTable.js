import React, { Component } from 'react';
import DetailsTableRow from './detailsTableRow.js'
import './detailsTable.css';


class DetailsTable extends Component {
  constructor() {
    super();
    this.state = {
      dataRows: []
    };
  }

  sortDataRows(object, value, order) {
    object.sort(function (a, b) {
      if (a[value] < b[value]) {
        return order === 'asc' ? -1 : 1;
      } else if (a[value] > b[value]) {
        return order === 'asc' ? 1 : -1;
    } else {
        // Object values are equal.
        return 0;
      }
    })
    this.setState({dataRowsOrder:  this.state.dataRowsOrder === 'asc' ? 'dsc' : 'asc' });
  }

  // I ran into a CORS issue when trying to run server locally.  Became easier to
  // set up free online JSON server for sake of speed.
  componentDidMount() {
    fetch('//api.jsonbin.io/b/5b4a8b29dd2c022ecda27a5c')
    .then(results => {
      return results.json();
    }).then(data => {
      let dataRows = data.rows;
      this.setState({dataRows: dataRows});
    }).catch(function() {
      console.log("Fetching data failed at UserList.componentDidMount()");
    });
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
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.state.dataRows, 'device', this.state.dataRowsOrder)}></i>
            </td>
            <td title="Hour Of Day">
              Hour
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.state.dataRows, 'hourOfDay', this.state.dataRowsOrder)}></i>
            </td>
            <td title="Clicks">
              Clicks
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.state.dataRows, 'clicks', this.state.dataRowsOrder)}></i>
            </td>
            <td title="Impressions">
              Impressions
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.state.dataRows, 'impressions', this.state.dataRowsOrder)}></i>
            </td>
            <td title="Click Through Rate">
              CTR
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.state.dataRows, 'ctr', this.state.dataRowsOrder)}></i>
            </td>
            <td title="Cost">
              Cost
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.state.dataRows, 'cost', this.state.dataRowsOrder)}></i>
            </td>
            <td title="Average Cost Per Click">
              Avg CPC
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.state.dataRows, 'avgCpc', this.state.dataRowsOrder)}></i>
            </td>
            <td title="Average Position">
              Avg Position
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.state.dataRows, 'avgPosition', this.state.dataRowsOrder)}></i>
            </td>
            {
            // TODO: Verify that SIS is an appropriate abbreviation to searchImpressionShare.
            }
            <td title="Search Impressions Share">
              SIS
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.state.dataRows, 'searchImpressionShare', this.state.dataRowsOrder)}></i>
            </td>
            <td title="Max Impressions">
              Max Impressions
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.state.dataRows, 'maxImpressions', this.state.dataRowsOrder)}></i>
            </td>
            <td title="Conversions">
              Conversions
              <i className="fas fa-sort" onClick={() => this.sortDataRows(this.state.dataRows, 'conversions', this.state.dataRowsOrder)}></i>
            </td>
          </tr>
        </thead>
        <tbody>
        {
        // We can use dataRow.searchImpressionShare as a key, but that seems weird.
        // Let's use an index. Using an index might get messy if users are able to
        // mutate data, but I think it'l be fine for sorting.
        }
        {this.state.dataRows.map((dataRow, index)=> {
          return <DetailsTableRow dataRow={dataRow} key={index} sortDataRows={this.sortDataRows} />
        })}
        </tbody>
      </table>
    );
  }
}

export default DetailsTable;
