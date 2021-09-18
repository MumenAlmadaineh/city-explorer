import React, { Component } from 'react';
import WeatherDay from './WeatherDay';

export class Weather extends Component {
render() {
    return (
        <>
        <WeatherDay weatherInfo = {this.props.weatherInfo} />
        </>
    )
}
}

export default Weather;
