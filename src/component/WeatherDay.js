import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

export class WeatherDay extends Component {
    render() {
        let weatherInfo = this.props.weatherInfo;
        return (
            <>
                {
                    weatherInfo.map(item=>{
                        return <ListGroup>
                        <ListGroup.Item>Date: {item.date}</ListGroup.Item>
                        <ListGroup.Item>Description: {item.description}</ListGroup.Item>
                    </ListGroup>
                    })
    
                }
            </>
        )
    }
}

export default WeatherDay;
