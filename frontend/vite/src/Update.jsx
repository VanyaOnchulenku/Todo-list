import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


function Update() {

    const [pet, setPet] = useState({
        type : '',
        breed : '',
        desc : '',
        age : null,
        host : '' 
     })

     const navigate = useNavigate()
     const {id} = useParams()

     const sendData = async e => {
        e.preventDefault()
        try{
            await axios.put(`http://localhost:3000/pets/` + id, pet)
            navigate('/pets')
        }catch(err) {
            console.log(err)}
     }

     const handleChange = e =>{ 
        const pet = e.target
        setPet(prevPet => {
            return{
            ...prevPet,
            [pet.name] : pet.value
            }
        } )
     }

     console.log(pet)

    return ( 
        <div className='Update'>
        <input type="text" placeholder='type' name='type' onChange={handleChange} />
        <input type="text" placeholder='breed' name='breed' onChange={handleChange} />
        <input type="text" placeholder='desc' name='desc' onChange={handleChange} />
        <input type="number" placeholder='age' name='age' onChange={handleChange} />
        <input type="text" placeholder='host' name='host' onChange={handleChange} />
        <button className='add-btn' onClick={sendData}> <Link to ='/pets'> Update </Link> </button>
    </div>
     );
}

export default Update;