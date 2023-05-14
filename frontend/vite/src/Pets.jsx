import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import  {Link} from 'react-router-dom'
import Delete from './Delete';


function Pets() {

    const [pet, setPet] = useState([])
 
    useEffect(()=> {
        const fetchPets = async () => {
            try{
              const res = await axios.get('http://localhost:3000/pets')
              setPet(res.data)
            }catch(err) {
                return console.log(err)
            }
        }

        fetchPets()
        console.log(pet)   
     }, [] )

     const deletePet = async(id) => {
        try{
            const res = await axios.delete('http://localhost:3000/pets/' + id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
        
     }

    return (
       <div >
            <button> <Link to='/'> Home page</Link></button>
            <h1>Pet's list</h1>
            <div className='list'> 
            {pet.map( pet => (
            <div className='pets' key = {pet.id}>
                <h2>{pet.type}</h2>  
                <h2>{pet.breed}</h2>  
                <h2>{pet.desc}</h2>  
                <span>{pet.age}</span>
                <h3>{pet.host}</h3>
                <br />
                <button className=' update-btn'> <Link to = {`/update/${pet.id}`}> Update</Link></button>
                <button className=' delete-btn' onClick = {() => deletePet(pet.id)}>Delete</button>
            </div>) )}
            <br />
                <button className='add-btn'> <Link to = '/add'> Add </Link></button>
            
            </div>


       </div>
    );
}

export default Pets;