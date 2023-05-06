import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import TableHeader from './components/TableHeader.jsx'

function App() {
  const [starWarsData, setStarWarsData] = useState([])

  // side effects

  // anytime state changes, the component will re-render
  // the endless loop happens because of the state changing. anytime state changes then the functions starts again.

  useEffect(function () {
    axios.get('https://swapi.dev/api/people').then((response) => {
      let result = response.data.results
      setStarWarsData(result)
      console.log('resultNames', result)
    })
  }, [])

  // }
  // const firstTenCharacters = (StarWarsCahracterRequest, (result)=>{
  //   // setStarWarsData(result.slice(0, 11))
  //   console.log('1to10', result.slice(0, 11))

  // }
  // )

  return (
    <>
      <TableHeader
        starWarsData={[starWarsData]}
        setStarWarsData={setStarWarsData}
      />
      {/* <DataTable starWarsData={setStarWarsData}/> */}

      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </>
  )
}

export default App
