import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './components/Update';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import NewTeam from './views/NewPet';
import AddPet from './components/AddPet';


function App() {
  const [pets, setPets] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api')
    .then(res => {
        setPets(res.data.Pets);
        setLoaded(true);
        console.log(res.data.Pets)
        console.log(pets)
    })
    .catch(err => console.error(err));
}, []);



  return (
    <div className="App" style={{ backgroundColor: 'gray', marginTop: '30px', padding: '20px' }}>
      <div className="container">
      
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/pet/new">
              <AddPet />
            </Route>
            <Route exact path="/pet/:id">
              <Detail pets={pets} />
            </Route>
            <Route exact path="/pet/edite/:id">
              <Update />
            </Route>
          </Switch>
        </BrowserRouter>
        </div>
     

    </div>
    
  );
}

export default App;