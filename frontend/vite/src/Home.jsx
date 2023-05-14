import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pets from './Pets';



function Home () {
    return (  
        <>        
            <h1>Welcome to our best pet's page</h1>
            <h2>Here you can post information about your pet, find them friends, 
                find person for common purposes and make your pet's life better</h2>
            <button type='submit'> <Link to={'/pets'}> Here we go! </Link>  </button>
        </>
    );
}




export default Home ;