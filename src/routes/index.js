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
      dataRows: [],
      uniqueHours: [],
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
      // Set dataRows, the full data set.
      let dataRows = data.rows;
      this.setState({dataRows: dataRows});

      // Set all data subsets.
      var uniqueHours = [];
      var totalImpressions = 0;
      for (var i = 0; i < dataRows.length; i++) {
        // Device values are so verbose, the data seems out of place amongst other data
        // TODO: Verify that this change is acceptable.
        var shortDeviceName = dataRows[i]['device'].split(' ')[0];
        dataRows[i]['device'] = shortDeviceName;

        // Get uniqueHours
        if (! uniqueHours.includes(dataRows[i]['hourOfDay'])) {
          uniqueHours.push(dataRows[i]['hourOfDay']);
        }

        //Get totalImpressions;
        totalImpressions = totalImpressions + dataRows[i]['impressions'];
      }
      var totalHours = uniqueHours.length;
      var averageImpressions = (totalImpressions / totalHours).toFixed(2);
      this.setState({uniqueHours: uniqueHours});
      this.setState({totalImpressions: totalImpressions});
      this.setState({averageImpressions: averageImpressions});
    }).catch(function() {
      console.log("Fetching data failed at UserList.componentDidMount()");
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="body-container">
          <Link to="./details/">
            View Details
          </Link>
          <Chart01 totalImpressions={this.state.totalImpressions} averageImpressions={this.state.averageImpressions} />
          <Chart02 totalImpressions={this.state.totalImpressions} averageImpressions={this.state.averageImpressions} />
          <Chart03 totalImpressions={this.state.totalImpressions} averageImpressions={this.state.averageImpressions} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Index;
