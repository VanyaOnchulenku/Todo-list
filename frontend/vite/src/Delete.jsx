import React from 'react';

function Delete() {

    const deletePet = async(id) => {
        try{
            const res = await axios.delete('http://localhost:3000/pets/' + id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
        
     }

    return ( 
        <button className=' delete-btn' onClick = {() => deletePet(pet.id)}>Delete</button>
     );
}

export default Delete ;