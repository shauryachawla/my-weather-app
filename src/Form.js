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
      <div className="field">
        <form type="submit" onSubmit={this.handleChange}>
          <label class="label">Country</label>
          <input className="input" type="text" defaultValue="" name="country" placeholder="Country" ref={this.country} />
          <p class="help is-success">Ex: IN</p>
          <br />

          <label class="label">Region</label>
          <input className="input" type="text" defaultValue="" placeholder="Region" ref={this.region} />
          <p class="help is-success">Ex: Delhi</p>

          <br />
          <button type="submit"
            className="button">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;