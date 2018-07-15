import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header.js'
import DetailsTable from '../components/detailsTable.js'
import Footer from '../components/footer.js'
import './details.css';


class Details extends Component {
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
          <DetailsTable />
        </div>
          <Footer />
      </div>
    );
  }
}

export default Details;
