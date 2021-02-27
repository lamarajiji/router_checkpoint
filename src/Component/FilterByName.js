import './FilterByName.css'
import{React} from 'react'
import {Form} from 'react-bootstrap';



const FilterByName = ({movie,setSearch}) => {
    return (
        <div >
                <Form.Control  className="inputfield" onChange={(e)=>setSearch(e.target.value)
     } type="text" placeholder="Search" />
   
                

    

       </div>
       
    )
}

export default FilterByName
