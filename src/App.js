import React, { Component } from 'react'
import CityLocation from './component/CityLocation'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import RecyclerCity from './component/RecyclerCity';

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cityName: '',
      lon: '',
      lat: '',
      flag: false,
    };
  };
  getCityName = e => {e.preventDefault();
    let cityObj = {
      method: 'GET',
      baseURL:`https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_API_KEY_FOR_CITY_PROJECT}&q=${this.state.cityName}`,
    }
    axios(cityObj).then(re => 
      {
        let axArray = re.data[0];
        this.setState(
          {
            cityName: axArray.display_name,
            lon: axArray.lon,
            lat: axArray.lat,
            flag: true,
          })
      })

  } 

  getFromUser = e => {
    let cityNameEvent = e.target.value;
    this.setState({
      cityName: cityNameEvent,
    })
  }
  render() {
    return (
      <div>
        <CityLocation getCityName={this.getCityName} getFromUser={this.getFromUser} />
        {
          this.state.flag && <RecyclerCity cityName = {this.state.cityName} lon = {this.state.lon} lat = {this.state.lat} />
        }
      </div>
    )
  }
}

export default App
