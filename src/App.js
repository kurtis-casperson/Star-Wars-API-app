import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import axios from 'axios'
import TableHeader from './TableHeader'

function App() {
  const [starWarsData, setStarWarsData] = useState({})

  // side effects
  useEffect(function () {
    axios.get('https://swapi.dev/api/people/').then((response) => {
      let result = response.data.results
      setStarWarsData(result.slice(0, 11))
      console.log('1to10', result.slice(0, 11))
    })
  }, [])

  return (
    <div>
      <TableHeader
        starWarsData={starWarsData}
        setStarWarsData={setStarWarsData}
      />
      {/* <DataTable starWarsData={setStarWarsData}/> */}
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}

export default App
