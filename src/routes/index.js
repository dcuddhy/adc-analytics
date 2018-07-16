import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header.js'
import Chart01 from '../components/chart01.js'
import Chart02 from '../components/chart02.js'
import Chart03 from '../components/chart03.js'
import Footer from '../components/footer.js'
import './index.css';


class Index extends Component {
  constructor() {
    super();
    this.state = {
      uniqueHours: [],
      dataRows: [],
      totalImpressions: 0,
      averageImpressions: 0,
      totalViews: 0
        };
  }

  componentWillMount() {
    console.log('componentWillMount()');
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

      // Get uniqueHours
      var uniqueHours = [];
      for (var i = 0; i < dataRows.length; i++) {
        if (! uniqueHours.includes(dataRows[i]['hourOfDay'])) {
          uniqueHours.push(dataRows[i]['hourOfDay']);
        }
      }
      this.setState({uniqueHours: uniqueHours});
      var totalHours = uniqueHours.length;

      //Get totalImpressions;
      var totalImpressions = 0;
      for (var i = 0; i < dataRows.length; i++) {
        var shortDeviceName = dataRows[i]['device'].split(' ')[0];
        totalImpressions = totalImpressions + dataRows[i]['impressions'];
      }
      this.setState({totalImpressions: totalImpressions});

      // Get averageImpressions
      var averageImpressions = (totalImpressions / totalHours).toFixed(2);;
      this.setState({averageImpressions: averageImpressions});

    }).catch(function() {
      console.log("Fetching data failed at UserList.componentDidMount()");
    });
  }
  // This is where we will show a sortable table with all details from all columns
  // NOTE: this is inherently not mobile-friendly.  Will likely use media queries to
  // hide/show elements based on width with a disclaimer.

  // <DetailsTable dataRows={this.state.dataRows} dataRowsOrder={this.state.dataRowsOrder} sortDataRows={this.sortDataRows}/>
  render() {
    return (
      <div>
        <Header />
        <div className="body-container">
          <Link to="./details/">
            View Details
          </Link>
          <Chart01 totalImpressions={this.state.totalImpressions} averageImpressions={this.state.averageImpressions} />
          <Chart02 />
          <Chart03 />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Index;
