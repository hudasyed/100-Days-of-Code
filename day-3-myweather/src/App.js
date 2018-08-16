import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Statistic } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: null,
      loading: true
    };
  }

  componentWillMount() {
    this.setTemperature();
  }

  setTemperature() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
       const latitude = position.coords.latitude;
       const longitude = position.coords.longitude;
       fetch(`https://api.weather.gov/points/${latitude},${longitude}`)
      .then(response => response.json())
      .then(data => {
        fetch(data.properties.forecast)
          .then(res => res.json())
          .then(d => this.setState({
            temperature: d.properties.periods[0].temperature,
            loading: false
          }));
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <style>{'body {background-color: #80b9e5}'}</style>
        </Helmet>
        <Container>
          { !this.state.loading && 
          <Statistic>
            <Statistic.Value>{this.state.temperature}</Statistic.Value>
            <Statistic.Label>Degrees Fahrenheit</Statistic.Label>
          </Statistic>}
        </Container>        
      </div>
    );
  }
}


export default App;
