import { React} from 'react'
import  {Rating} from '@material-ui/lab';


const FilterByRating = ({rating,setRating}) => {
    

    return (
        <div>
             <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        </div>
    )
}

export default FilterByRating
