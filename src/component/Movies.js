import React, { Component } from 'react';
import Movie from './Movie';

export class Movies extends Component {
    render() {
        let movieInfo = this.props.movieInfo
        return (

            <>
            {
                movieInfo.map(item =>{
                    return <Movie
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

export default Movies;

// this.state.movieInfo.map(item =>{
//     return <Movies
//     title = {item.title} 
//     overview = {item.overview}
//     vote_average = {item.vote_average} 
//     vote_count = {item.vote_count}
//     poster_path = {`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
//     popularity = {item.popularity}
//     release_date = {item.release_date} />
    
//   })
