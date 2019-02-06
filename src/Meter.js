import React, { Component } from 'react';

class Meter extends Component {
  render() {

    if (this.props.details.country === "") {
      return null
    } else {
      return (

        <ul>
          <li>{this.props.details.country}</li>
          <li>{this.props.details.region}</li>
          <li>{this.props.details.data.temperature}</li>
          <li>{this.props.details.data.humidity}</li>
          <li>{this.props.details.data.conditions}</li>

        </ul>
      )
    }

  }
}

export default Meter;