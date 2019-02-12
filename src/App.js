import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';
import { open_key } from "./keys"
import Meter from "./Meter"
class App extends Component {
  constructor() {
    super()
    this.state = {
      country: "",
      region: "",
      data: {
        temperature: 0,
        humidity: 0,
        conditions: ""
      }

    }
  }


  getInfo = (obj) => {
    this.setState({ country: obj.country, region: obj.region })
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${obj.region},${obj.country}&units=metric&APPID=` + open_key)
      .then(res => {
        const data = res.data;
        // this.setState({ persons });
        // console.log(data)
        this.showWeather(data)
      })
  }

  showWeather = (data) => {
    console.log(data)
    const temp_c = data.main.temp
    const humidity = data.main.humidity
    const conditions = data.weather[0].main
    const oldData = this.state.data
    oldData['temperature'] = temp_c
    oldData['humidity'] = humidity
    oldData['conditions'] = conditions
    this.setState({ data: oldData })
    // console.log(conditions)
  }


  componentDidMount() {

    // console.log(`lolol` + open_key)
  }

  render() {
    return (
      <div className="App">
        <section className="hero is-danger is-fullheight">
          <div className="hero-body ">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <div className="container is-fluid">
                    <div className="notification has-background-warning">
                      <Form getInfo={this.getInfo} />
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="container is-fluid">
                    <div className="notification has-background-grey-dark">
                      <Meter details={this.state} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
    );
  }
}

export default App;
