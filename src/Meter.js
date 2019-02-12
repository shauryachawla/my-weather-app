import React, { Component } from 'react';

class Meter extends Component {
  render() {

    // if (this.props.details.country === "") {
    //   return null
    // } else {
    return (
      <div className="section">
        <ul className="content">
          <li>Country: {this.props.details.country}</li>
          <li>Region: {this.props.details.region}</li>
          <li>Temperature: {this.props.details.data.temperature}</li>
          <li>Humidity: {this.props.details.data.humidity}</li>
          <li>Conditions: {this.props.details.data.conditions}</li>

        </ul>
      </div>
    )
    // }

  }
}

export default Meter;