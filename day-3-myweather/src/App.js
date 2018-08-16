import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

class App extends Component {
  location() {
    return navigator.geolocation.getCurrentPosition(function success(position){
      console.log(position);
      return position;
    }, function error() {
      return null;
    })
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <style>{'body {background-color: #3e939b;}'}</style>
          <p>Your location is {this.location()}</p>
        </Helmet>
      </div>
    );
  }
}


export default App;
