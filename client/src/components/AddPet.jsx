import React, { useEffect, useState } from 'react'
import PetForm from '../views/petForm';
import { useHistory, useParams } from "react-router-dom";
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import axios from 'axios';
    //team
const AddPet = (props) => {
    const [pets, setPets] = useState([]);
    const [errors, setErrors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const history = useHistory();

    const createPet = (Pets) => {
        axios
          .post('http://localhost:8000/api/pet/new', Pets)
          .then((res) => {
            console.log(res.data.Pets);
            history.push("/");
          })
          .catch((err) => {
            const errorResponse = err.response.data.errors;
            console.log("this error")
            console.log(errorResponse);
            
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
              // Loop through all errors and get the messages
              errorArr.push(errorResponse[key].message);
            }
            setErrors(errorArr);
          });
      };

    
    
    return (
        <div>
            <Link to={"/"}>
                        Home
                    </Link>
            <div style={{ backgroundColor: 'white', marginTop: '20px', padding: '10px' }}>
            {errors.map((err, index) =>( <p className="text-danger" key={index}>{err}</p>))}
            <PetForm onSubmitProp={createPet} initialName="" initialType="" initialDesc="" initialSkill1="" initialSkill2="" initialSkill3=""/>
            </div>
        </div>
    )
}
    
export default AddPet;