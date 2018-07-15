import React, { Component } from 'react';
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

render() {
    return (
      <div className="display-table">
        display table <br /> <br />
      </div>
    );
  }
}

export default DetailsTable;
