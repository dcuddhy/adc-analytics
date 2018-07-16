import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header.js'
import DetailsTable from '../components/detailsTable.js'
import Footer from '../components/footer.js'
import './details.css';


class Details extends Component {
  constructor() {
    super();
    this.state = {
      dataRows: []
    };
    this.sortDataRows = this.sortDataRows.bind(this);
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

  componentDidMount() {
    fetch('//api.jsonbin.io/b/5b4a8b29dd2c022ecda27a5c')
    .then(results => {
      return results.json();
    }).then(data => {
      let dataRows = data.rows;

      // Device values are so verbose, the data seems out of place amongst other data
      // TODO: Verify that this change is acceptable.
      for (var i = 0; i < dataRows.length; i++) {
        var shortDeviceName = dataRows[i]['device'].split(' ')[0];
        dataRows[i]['device'] = shortDeviceName;
      }
      this.setState({dataRows: dataRows});
    }).catch(function() {
      console.log("Fetching data failed at UserList.componentDidMount()");
    });
  }

  // This is where we will show a sortable table with all details from all columns
  // NOTE: this is inherently not mobile-friendly.  Will likely use media queries to
  // hide/show elements based on width with a disclaimer.
  render() {
    return (
      <div>
        <Header />
        <div className="body-container">
          <Link to="../">
            View Index
          </Link>
          <DetailsTable dataRows={this.state.dataRows} dataRowsOrder={this.state.dataRowsOrder} sortDataRows={this.sortDataRows}/>
        </div>
          <Footer />
      </div>
    );
  }
}

export default Details;
