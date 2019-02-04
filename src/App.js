import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Form from './Form';

class App extends Component {
  constructor() {
    super()
    this.state = {
      country: "yo",
      region: ""
    }
  }

  getInfo = (obj) => {
    this.setState({ country: obj.country, region: obj.region })
  }

  render() {
    return (
      <div className="App">
        <section className="hero is-success is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <div className="container is-fluid">
                    <div className="notification is-info">
                      <Form getInfo={this.getInfo} />
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="container is-fluid">
                    <div className="notification is-info">
                      This container is <strong>fluid</strong>: it will have a 20px gap on either side, on any viewport size.
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
