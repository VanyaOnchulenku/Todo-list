import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState} from 'react';
import {useNavigate} from 'react-router-dom'



function Add() {

    const [pet, setPet] = useState({
        type : '',
        breed : '',
        desc : '',
        age : null,
        host : '' 
     })

     const navigate = useNavigate()

     const sendData = async e => {
        e.preventDefault()
        try { 
            await axios.post('http://localhost:3000/pets', pet)
            navigate('/pets')
        }catch(err){
            return console.log(err)
        } 
     }

    const handleChange = e => {
        const pet = e.target
        setPet( prevPet => {
            return{
                ...prevPet,
                [pet.name] : pet.value
            }
        } )

    }

 
    return ( 
        <div className='Add'>
            <input type="text" placeholder='type' name='type' onChange={handleChange} />
            <input type="text" placeholder='breed' name='breed' onChange={handleChange} />
            <input type="text" placeholder='desc' name='desc' onChange={handleChange} />
            <input type="number" placeholder='age' name='age' onChange={handleChange} />
            <input type="text" placeholder='host' name='host' onChange={handleChange} />
            <button className='add-btn' onClick={sendData}> <Link to ='/pets'> Add </Link> </button>
        </div>
     );
}

export default Add;