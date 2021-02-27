import React from 'react'
import './MovieDescription.css'
import {Button} from 'react-bootstrap'
import  {Rating} from '@material-ui/lab';
import {Link  } from 'react-router-dom';


const MovieDescription = ({location}) => {
 const movie = location.state.movie;
 

    return (
        <div >
            
            <div className="movie-card">
  <div className="container">
  <Button className="cover"  type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href=movie.trailerUrl;
      }}  >WATCH TRAILER</Button> {'  '}

  
    <div className="hero"  style={{backgroundImage:`url(${movie.img}) `,backgroundSize:"contain"}}>
      <div className="details">
        <div className="title1"> {movie.titre} <span>PG-13</span></div>
        <fieldset className="rating">
        <Rating name="read-only" value={movie.rate} readOnly />
        </fieldset>
        <span className="likes">109 likes</span>
      </div> {/* end details */}
    </div> {/* end hero */}
    <div className="description">
      <div className="column1">
        <span className="tag">action</span>
        <span className="tag">fantasy</span>
        <span className="tag">adventure</span>
      </div> {/* end column1 */}
      <div className="column2">
        <p>{movie.description}
            
            <a href="#">read more</a></p>
        
      </div> {/* end column2 */}
    </div> {/* end description */}
    <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>
</Link> 
  </div> {/* end container */}
 
</div> {/* end movie-card */}


        </div>
    )
}

export default MovieDescription
