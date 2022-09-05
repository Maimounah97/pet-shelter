//team
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PetForm from '../views/petForm';
import { useHistory, useParams } from "react-router-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
const Update = (props) => {
    const { id } = useParams();
    //const [name, setName] = useState('');
    const [pet, setPet] = useState();
    const [errors, setErrors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [isLoading, setLoading] = useState(true)
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => {
                console.log("from update")
                console.log(res.data)
                setPet(res.data);
                // setData(res.data);
                setLoading(false);
                setLoaded(true);
            })
            .catch(err => {
                setLoading(false);

                console.log("We have an error");

            })
    }, [])
 
    const updatePet = pet => {
        axios.put('http://localhost:8000/api/pet/edite/' + id, pet)
            .then(res => {
                console.log(res)
                history.push("/");
            })

            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }


    if (isLoading) {
        return <div>...Loading</div>;
    }

    return (
        <div>
            <p><Link to={"/"}>back to Home</Link></p>

            <div>
                

                {loaded && (
                    (pet == null || pet.name === "CastError") ?
                        <div>
                            <p>We're sorry, but we could not find the pet you are looking for. Would you like to add this pet to our database?</p>
                            <Link to={"/pet/new"}>Click here to add a new pet</Link>
                        </div>
                        :
                        <div>
                            <h1>Pet Shelter</h1>
                            <h3>Edit {pet.name}</h3>

                            {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
                            {errors.map((err, index) => (<p key={index}>{err}</p>))}

                            <PetForm onSubmitProp={updatePet} initialName={pet.name} initialType={pet.type} initialDesc={pet.desc} initialSkill1={pet.skill1} initialSkill2={pet.skill2} initialSkill3={pet.skill3} />
                            <button><Link to={"/"}> Cancel </Link></button>
                        </div>


                )}

            </div>

        </div>

    )
}




export default Update;