import React, { Component } from 'react'

export class RecyclerCity extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.cityName}</h1>
                <h3>{this.props.lon}</h3>
                <h3>{this.props.lat}</h3>
            </div>
        )
    }
}

export default RecyclerCity
