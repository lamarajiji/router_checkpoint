import { Switch,Route } from 'react-router-dom';
import './App.css';

import MovieApp from './Component/MovieApp.js'
import MovieDescription from "./Component/MovieDescription";




function App() {
  

  return (
   
<>
    <div className="App" >
    <Switch>
        <Route exact path="/" component={MovieApp} />
        <Route  path="/description" component={MovieDescription} />
    </Switch>
    </div>
  
    
    </>
   
  );
}

export default App;
