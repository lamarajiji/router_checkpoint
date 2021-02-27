import React from 'react'
 import {Card} from 'react-bootstrap'
 import  {Rating} from '@material-ui/lab';
import './MovieCard.css'
import {Link  } from 'react-router-dom';

const MovieCard = ({movie}) => {
    
    return (
    <Link to={{pathname: "/description", state: { movie : movie } }}>
 <Card className="card" >
           <Card.Img className="cardimg"  src= {movie.img} alt=""/>
           

           <Card.ImgOverlay  >
    <Card.Body className="body">
        <Card.Text className="cardtext">
<Card.Title className="cardtitle"> {movie.titre}</Card.Title>
           <Rating name="read-only" value={movie.rate} readOnly />
        </Card.Text>
     </Card.Body>
     </Card.ImgOverlay>
</Card>
</Link>


    )
}

export default MovieCard
