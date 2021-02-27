import FilterByName from './FilterByName';
import FilterByRating from './FilterByRating';
import {moviesData} from '../data';
import {useState,React} from'react';
import MovieList from './MovieList'
import AddMovie from './AddMovie';





function MovieApp() {
  const [movies, setMovies] = useState(moviesData)
  const [search, setSearch] = useState("")
  const [rating, setRating] = useState(1);

  return (
   
<>
    <div className="App" >
         <div className="up">
      <FilterByName setSearch={setSearch}/>
      <FilterByRating  setRating={setRating} rating={rating}/>
      </div>
      <div>
      <MovieList movies={movies} search={search} rating={rating}  />
      
        
      <AddMovie movies={movies} setMovies={setMovies} />
      

      

      
      </div>
    </div>
  
    
    </>
    
  );
}

export default MovieApp
