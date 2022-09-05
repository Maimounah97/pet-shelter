import React, { useEffect, useState } from 'react'
import PetForm from './petForm';
import PetsList from '../components/petsList';
import axios from 'axios';
//
const Main = (props) => {
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

    // const removeFromDom = petId => {
    //     setPets(pets.filter(pet => pet._id != petId));
    // }




    return (
        <div className="container">

            <h2>Pet Shelter</h2>
            <div style={{ backgroundColor: 'white', marginTop: '20px', padding: '10px' }}>

            {loaded && <PetsList pets={pets} />}
            </div>


            
        </div>
    )
}

export default Main;