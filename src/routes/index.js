import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header.js'
import ChartCost from '../components/chartCost.js'
import ChartImpressions from '../components/chartImpressions.js'
import ChartClicks from '../components/chartClicks.js'
import ChartConversions from '../components/chartConversions.js'
import Footer from '../components/footer.js'
import './index.css';


class Index extends Component {
  constructor() {
    super();
    this.state = {
      dataRows: [],
      uniqueHours: [],
      totalCost: 0,
      averageCost: 0,
      totalImpressions: 0,
      averageImpressions: 0,
      totalClicks: 0,
      averageClicks: 0,
      totalConversions: 0,
      averageConversions: 0
    };
  }

  componentDidMount() {
    fetch('//api.jsonbin.io/b/5b4a8b29dd2c022ecda27a5c')
    .then(results => {
      return results.json();
    }).then(data => {
      // Set dataRows, the full data set.
      let dataRows = data.rows;

      // Set all data subsets.
      var uniqueHours = [],
          totalCost = 0,
          totalImpressions = 0,
          totalClicks = 0,
          totalConversions = 0;
      for (var i = 0; i < dataRows.length; i++) {
        // Device values are so verbose, the data seems out of place amongst other data
        // TODO: Verify that this change is acceptable.
        var shortDeviceName = dataRows[i]['device'].split(' ')[0];
        dataRows[i]['device'] = shortDeviceName;

        // Get uniqueHours.
        if (! uniqueHours.includes(dataRows[i]['hourOfDay'])) {
          uniqueHours.push(dataRows[i]['hourOfDay']);
        }

        //Get totalCost.
        totalCost = totalCost + dataRows[i]['cost'];

        //Get totalImpressions.
        totalImpressions = totalImpressions + dataRows[i]['impressions'];

        //Get totalClicks.
        totalClicks = totalClicks + dataRows[i]['clicks'];

        //Get totalConversions.
        totalConversions = totalConversions + dataRows[i]['conversions']
      }
      // Create Averages
      var totalHours = uniqueHours.length,
          averageCost = '$' + Math.round(totalCost / totalHours).toLocaleString(),
          averageImpressions = (totalImpressions / totalHours).toFixed(2).toLocaleString(),
          averageClicks = (totalClicks / totalHours).toFixed(2).toLocaleString(),
          averageConversions = (totalConversions / totalHours).toFixed(2).toLocaleString();
      // Clean up Totals
      totalCost = '$' + totalCost.toLocaleString();
      totalImpressions = totalImpressions.toLocaleString();
      totalClicks = totalClicks.toLocaleString();
      totalConversions = totalConversions.toLocaleString();
      // Set states to pass as props
      this.setState({dataRows: dataRows});
      this.setState({uniqueHours: uniqueHours});
      this.setState({totalCost: totalCost});
      this.setState({averageCost: averageCost});
      this.setState({totalImpressions: totalImpressions});
      this.setState({averageImpressions: averageImpressions});
      this.setState({totalClicks: totalClicks});
      this.setState({averageClicks: averageClicks});
      this.setState({totalConversions: totalConversions});
      this.setState({averageConversions: averageConversions});
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
          <ChartCost totalCost={this.state.totalCost} averageCost={this.state.averageCost} />
          <ChartImpressions totalImpressions={this.state.totalImpressions} averageImpressions={this.state.averageImpressions} />
          <ChartClicks totalClicks={this.state.totalClicks} averageClicks={this.state.averageClicks} />
          <ChartConversions totalConversions={this.state.totalConversions} averageConversions={this.state.averageConversions} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Index;
