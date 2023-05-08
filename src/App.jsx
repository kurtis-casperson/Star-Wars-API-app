import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import TableHeader from './components/TableHeader.jsx'

function App() {
  const [starWarsData, setStarWarsData] = useState([])

  // side effects

  // anytime state changes, the component will re-render
  // the endless loop happens because of the state changing. anytime state changes then the functions starts again.
  // debugger
  const characterData = async () => {
    let peopleData = await axios.get('https://swapi.dev/api/people')
    let resultsData = peopleData.data.results
    console.log(resultsData)

    for (let character of resultsData) {
      let homeWorldData = await axios.get(character.homeworld)
      character.homeworldName = homeWorldData.data.name
      console.log(character.homeworld)
    }

    // for (let character of resultsData) {
    //   let speciesData = await axios.get(character.species)
    //   let speciesName = await speciesData
    //   console.log(speciesName)
    //   speciesName
    // }
    setStarWarsData(resultsData)
  }
  useEffect(function () {
    characterData()
  }, [])

  return (
    <>
      <TableHeader
        starWarsData={starWarsData}
        setStarWarsData={setStarWarsData}
      />
      {/* <DataTable starWarsData={setStarWarsData}/> */}

      {/* <pre>{JSON.stringify(starWarsData, null, 2)}</pre> */}
    </>
  )
}

export default App
