import axios from 'axios';

import * as React from 'react';
import './App.css';
import Navbar from './components/NavBar'

interface IMyState {
  city: string;
  weather: string;
  temp: string;
  pressure: string;
  humidity: string;
}

class App extends React.Component<{}, IMyState> {
  constructor(props: any) {
    super(props)

    this.state = {
      city: '',
      humidity: '',
      pressure: '',
      temp: '',
      weather: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  public handleChange = (e: any) => {
    this.setState({
      city: e.target.value
    })
  }

  public handleSubmit = (e: any) => {
    e.preventDefault();

    const city = this.state.city;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=cdc325a1121a5e7e1445559f03712d5e";
    axios
      .get(url)
      .then(response => {

        const data = response.data;
        let weather = ''
        const temp = 'Temp: ' + data.main.temp + '˚F';
        const pressure = 'Pressure: ' + data.main.pressure + 'hPa';
        const humidity = 'Humidity: ' + data.main.humidity + '%';

        for (const element of data.weather) {
          weather = element.main + ': ' + element.description;
        }
        
        const newState = {
          humidity,
          pressure,
          temp,
          weather,
        }

        this.setState(newState)
      });
  }

  public render() {
    return (
      <div className="App">
      <Navbar />
        <form onSubmit={this.handleSubmit} >
          <input className="App-input" type="text" onChange={this.handleChange} placeholder="Enter a city name..." />
          <button className="App-button">Weather go!</button>
        </form>
        <div className="Result">
          <p>{this.state.weather}</p>
          <p>{this.state.temp}</p>
          <p>{this.state.pressure}</p>
          <p>{this.state.humidity}</p>
        </div>
      </div>
    );
  }
}

export default App;
