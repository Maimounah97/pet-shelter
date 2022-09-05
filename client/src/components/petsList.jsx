import axios from 'axios';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
//import React, { useEffect, useState } from 'react'
//team
const PetsList = (props) => {
    const { removeFromDom } = props;

    // const deletePet = (petId) => {
    //     axios.delete('http://localhost:8000/api/pet/delete/' + petId)
    //         .then(res => {
    //             removeFromDom(petId)
    //         })
    //         .catch(err => console.error(err));
    // }
    
                
    return (
        <div>

            <Link to={"/pet/new"}>
                add a pet to the shelter
            </Link>
            
            <h1>Pet Shelter</h1>

            <h2>These pets are looking for a good home</h2>
          

            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions </th>
                </tr>
                </thead>
                <tbody>
                    
            {props.pets.map((pet, i) =>
                
                <tr key={i}>
                    <td>
                 <Link to={"/pet/" + pet._id}>
                    {pet.name}
                </Link>
                </td>
                <td>{pet.type}</td>
                <td>
                    {/* <button style={{ marginLeft: '20px' }} onClick={(e) => { deletePet(pet._id) }}>
                        Delete
                    </button> */}
                    
                    <Link to={"/pet/edite/" + pet._id}>
                        Edit
                    </Link>
                    |
                    <Link to={"/pet/" + pet._id}>
                        Details
                    </Link>
                    </td>

                </tr>
            )}
            </tbody>
            </table>
        </div>
    )
}

export default PetsList;