import React, { Component } from 'react'

export class CityLocation extends Component {
    render() {
        return (
            <div>
              <form>
                  <input onChange={this.props.getFromUser} type='text' placeholder='Please city name' />
                  
                  <button onClick={this.props.getCityName} >Explore!</button>

              </form>  
            </div>
        )
    }
}

export default CityLocation
