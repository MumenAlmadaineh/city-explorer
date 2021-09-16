import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export class Movies extends Component {
    render() {
        let movieInfo = this.props.movieInfo;
        return (

            <>
                {movieInfo.map(item => {
                    return <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="th" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                })}

            </>
        )
    }
}

export default Movies
