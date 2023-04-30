import { useState, useEffect } from 'react'
// import React from 'react'

import './App.css'
// import axios from 'axios'


 function App() {
    const [starWarsData, setStarWarsData] = useState({})
    
    // console.log("Component rendered")
    
        
    // side effects
   useEffect(function() {
    
        fetch("https://swapi.dev/api/people/")
            .then(res => res.json())
            .then(data => setStarWarsData(data))
            .then(data => console.log(data))


    })
   
    
    return (
        <div>
        {/* <DataTable starWarsData={setStarWarsData}/> */}
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

export default App
