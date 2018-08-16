import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: null
    };
  }

  componentWillMount() {
    this.setTemperature();
  }

  setTemperature() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
       console.log(position);
       const latitude = position.coords.latitude;
       const longitude = position.coords.longitude;
       fetch(`https://api.weather.gov/points/${latitude},${longitude}`)
      .then(response => response.json())
      .then(data => {
        fetch(data.properties.forecast)
          .then(res => res.json())
          .then(d => this.setState({
            temperature: d.properties.periods[0].temperature
          }));
      });

       
       this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
      },
      (error) => alert(error.message)
    );
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <style>{'body {background-color: #3e939b;}'}</style>
        </Helmet>
        <p>Your temperature is{this.state.temperature}</p>
      </div>
    );
  }
}


export default App;
