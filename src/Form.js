import React, { Component } from 'react';

class Form extends Component {
  // Refs
  country = React.createRef()
  region = React.createRef()

  handleChange = e => {
    e.preventDefault()
    const infoObj = {
      country: this.country.current.value,
      region: this.region.current.value
    }
    // console.log(oldState)
    this.props.getInfo(infoObj)
    e.target.reset()
  }


  render() {
    return (
      <form type="submit" onSubmit={this.handleChange}>
        <input className="input" type="text" name="country" placeholder="Country" ref={this.country} />
        <br />
        <br />
        <input className="input" type="text" placeholder="Region" ref={this.region} />
        <br />
        <br />
        <button type="submit"
          className="button">Submit</button>
      </form>
    );
  }
}

export default Form;