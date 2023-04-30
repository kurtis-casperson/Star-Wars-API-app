import { useState, useEffect } from 'react'
// import React from 'react'

import './App.css'
import axios from 'axios'


 function App() {
    const [starWarsData, setStarWarsData] = useState({})
        
    // side effects
   useEffect(function() {
        axios.get("https://swapi.dev/api/people/")
        .then((response) => {
          let result = response.data.results;
          setStarWarsData(result)
          console.log(result);
      })
     

    },[])
   
    
    return (
        <div>
        {/* <DataTable starWarsData={setStarWarsData}/> */}
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

export default App
