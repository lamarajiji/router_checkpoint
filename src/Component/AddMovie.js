import { React , useState } from 'react'
import {Button,Modal,Form } from "react-bootstrap";



 function AddMovie({movies,setMovies}) {
        const [title, setTitle] = useState("");
        const [rating, setRating] = useState(1);
        const [url, setUrl] = useState("")
        const [show, setShow] = useState(false);
        const newmovie={id:Math.random(),img:url,titre:title,rate:rating}

        
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const Addmovie = () => {
          setMovies([...movies, newmovie])
          handleClose()
        }
     

      
        return (
          <>
            <Button variant="primary" onClick={handleShow}>
                Add  Movie +
            </Button>
      
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Add Movie</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              
  <Form.Group controlId="formBasicEmail">
    <Form.Label>TiTle</Form.Label>
    <Form.Control type="text"
    placeholder="Enter The Movie Title.."
    onChange={(e)=>setTitle(e.target.value)} />
    
    <Form.Label>Rating</Form.Label>
    <Form.Control type="number" placeholder="Enter The Rtaing.."  min="1" max="5"
        onChange={(e)=>setRating(e.target.value)} />
        <Form.Label>Image URL</Form.Label>
    <Form.Control type="text" placeholder="Enter The Url.."  min="1" max="5"
        onChange={(e)=>setUrl(e.target.value)} />

    
   </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary"
                 onClick={Addmovie}
                 
                 >
                  Add Movie
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
      
    
export default AddMovie
