import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

import {
    BrowserRouter,
    Switch,
    Route,
    Link 
  } from "react-router-dom";
import PetsList from '../components/petsList';
  //team  
const Detail = (props) => {
    
    const [pets, setPets] = useState({})
    const[like,setLike]= useState(0)
    const [pet, setPet] = useState({})
    const { id } = useParams();
   

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' +id)
            .then(res => setPet(res.data))
            .catch(err => console.error(err));
    }, []);

     const deletePet = (petId) => {
        axios.delete('http://localhost:8000/api/pet/delete/' + petId)
            .then(res => {
                removeFromDom(petId)
            })
            .catch(err => console.error(err));
    }
    
    const removeFromDom = petId => {
        setPets(props.pets.filter(pet => pet._id != petId))
            
    }
    return (
        <div>
            <Link to={"/"}>
                       back to Home
                    </Link>
        <div >
            <div style={{ backgroundColor: 'white', marginTop: '20px', padding: '10px' }}>
        {/* <Delete petId={pet._id} successCallback={()=>removeFromDom(pet._id)}/> */}
        <button onClick={(e)=>{deletePet(pet._id)}}>Adopt {pet.name}</button>
        <h1>Pet Shelter</h1>
        
            <h2>Details about :{pet.name}</h2>
            <h3>Pet Type :{pet.type}</h3>
            <h3>Description :{pet.desc}</h3>
            <h3>Skills :{pet.skill1} {pet.skill2} {pet.skill3}</h3>
            
        </div>
        <Link to={"/pet/edite/" + pet._id }>
        Edit
    </Link>
    {/* <button onClick={setLike(like+1)}>Like</button> */}
    </div>
    </div>
    )
}
    
export default Detail;