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
      console.log('page1', result)
    })
  }, [])

  // useEffect(function () {
  //   axios.get(`https://swapi.dev/api/people/?page=${count+ 1 || count -1}`).then((response) => {
  //     let result = response
  //     setStarWarsData(result)
  //     console.log('result', result)
  //   })
  // }, [])

  // }
  // const firstTenCharacters = (StarWarsCahracterRequest, (result)=>{
  //   // setStarWarsData(result.slice(0, 11))
  //   console.log('1to10', result.slice(0, 11))

  // }
  // )

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
