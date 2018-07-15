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
  // I ran into a CORS issue when trying to run server locally.  Became easier to
  // set up free online JSON server for sake of speed.
  componentDidMount() {
    fetch('//api.jsonbin.io/b/5b4a8b29dd2c022ecda27a5c')
    .then(results => {
        return results.json();
    }).then(data => {
        // Complete list of users of all users
        let dataRows = data.rows;
        this.setState({dataRows: dataRows});
        console.log('state0: ', this.state.dataRows);

    }).catch(function() {
        console.log("Fetching data failed at UserList.componentDidMount()");
    });
}

// We can use dataRow.searchImpressionShare as a key, but that seems weird.  Let's use an index.
// Using an index might get messy if users are able to mutate data, but we are strictly displaying.
// TODO: Verify that SIS is an appropriate abbreviation to searchImpressionShare.
render() {
    return (
      <div className="display-table">
        <span title="Device">Device</span>
        <span title="Hour Of Day">Hour</span>
        <span title="Clicks">Clicks</span>
        <span title="Impressions">Impressions</span>
        <span title="Click Through Rate">CTR</span>
        <span title="Cost">Cost</span>
        <span title="Average Cost Per Click">Avg CPC</span>
        <span title="Average Position">Avg Position</span>
        <span title="Search Impressions Share">SIS</span>
        <span title="Max Impressions">Max Impressions</span>
        <span title="Campaign Status">Campaign Status</span>
        <span title="Conversions">Conversions</span>
        {this.state.dataRows.map((dataRow, index)=> {
          return <DetailsTableRow dataRow={dataRow} key={index} />
        })}
      </div>
    );
  }
}

export default DetailsTable;
