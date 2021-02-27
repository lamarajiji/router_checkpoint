import React from 'react'
import MovieCard from './MovieCard.js';
import './MovieList.css'



const MovieList = ({movies,search,rating}) => {
    return (
        <div className="liste">
    {movies.filter(
                  movie=>((movie.titre.toLowerCase().match(search.toLowerCase()))&&(movie.rate>=rating))
               )
             .map((el)=>
           <MovieCard movie={el} />)}
           
        </div>
    )
}

export default MovieList
