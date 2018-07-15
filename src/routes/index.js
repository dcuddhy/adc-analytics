import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header.js'
import Chart01 from '../components/chart01.js'
import Chart02 from '../components/chart02.js'
import Chart03 from '../components/chart03.js'
import Footer from '../components/footer.js'
import './index.css';


class Index extends Component {
  // This is where we will display charts etc.
  render() {
    return (
      <div>
        <Header />
        <div className="body-container">
          <Link to="./details/">
            View Details
          </Link>
          <Chart01 />
          <Chart02 />
          <Chart03 />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Index;
