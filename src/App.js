import React, { Component } from 'react'
import CityLocation from './component/CityLocation'
import axios from 'axios';
import RecyclerCity from './component/RecyclerCity';
import Weather from './component/Weather';
import AlertMes from './component/AlertMes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './component/Movies';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      lon: '',
      lat: '',
      map: '',
      flag: false,
      weatherInfo: [],
      weatherFlag: false,
      alertFlag: false,
      movieInfo: [],
      movieFlag: false,
    };
  };

  getCityName = e => {
    e.preventDefault();
    if (this.state.cityName !== "") {
      let cityObj = {
        method: 'GET',
        baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_API_KEY_FOR_CITY_PROJECT}&q=${this.state.cityName}`,
      }
      axios(cityObj).then(re => {
        let axArray = re.data[0];
        this.setState(
          {
            cityName: axArray.display_name,
            lon: axArray.lon,
            lat: axArray.lat,
            map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY_FOR_CITY_PROJECT}&center=${axArray.lat},${axArray.lon}&zoom=1-18`,
            flag: true,
          })
      }).then(() => {
        // let searchQuery = this.state.cityName.split(',')[0]; &searchQuery=${searchQuery}
        axios.get(`${process.env.REACT_APP_API_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`)
          .then(res => {
            this.setState({
              weatherInfo: res.data,
              weatherFlag: true,
            })
          })
      }).then(() => {
        let searchQuery = this.state.cityName.split(',')[0];
        axios.get(`${process.env.REACT_APP_API_URL}/movies?searchQuery=${searchQuery}`).then(res => {
            this.setState({
              movieInfo: res.data,
              movieFlag: true,
            })
          })
      })

    } else {
      this.setState({
        alertFlag: true,
      })
    }
  }

  getFromUser = e => {
    let cityNameEvent = e.target.value;
    this.setState({
      cityName: cityNameEvent,
    })
  }
  render() {
    return (
      <>
        <h1>City location and weather</h1>
        {this.state.alertFlag && <AlertMes />}

        <CityLocation getCityName={this.getCityName} getFromUser={this.getFromUser} />
        {
          this.state.flag && <RecyclerCity cityName={this.state.cityName} lon={this.state.lon} lat={this.state.lat} map={this.state.map} />
        }

        {
          this.state.weatherFlag && <Weather weatherInfo={this.state.weatherInfo} />
        }

        {
          this.state.movieFlag && this.state.movieInfo.map(item =>{
            return <Movies
            title = {item.title} 
            overview = {item.overview}
            vote_average = {item.vote_average} 
            vote_count = {item.vote_count}
            poster_path = {`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
            popularity = {item.popularity}
            release_date = {item.release_date} />
            
          })
        }
      </>
    )
  }
}


export default App