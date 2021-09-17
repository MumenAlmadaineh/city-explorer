import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export class Movies extends Component {
    render() {
        return (

            <>
                {<Card style={{ width: '18rem' }}>
                    <Card.Img style = {{maxWidth: '100%'}} variant="top" src= {this.props.poster_path} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.overview}<br/>
                            {this.props.vote_average}<br/>
                            {this.props.vote_count}<br/>
                            {this.props.popularity}<br/>
                            {this.props.release_date}<br/>                  
                        </Card.Text>
                    </Card.Body>
                </Card>
                }

            </>
        )
    }
}

export default Movies
