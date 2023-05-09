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

    for (let character of resultsData) {
      let homeWorldData = await axios.get(character.homeworld)
      character.homeworldName = homeWorldData.data.name

      // threw me off because i didn't think the request would be bad if the first index was empty.
      if (character.species.length !== 0) {
        let speciesData = await axios.get(character.species)
        character.species = speciesData.data.name
      } else character.species = 'Human'
      console.log(character.species)
    }

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
    </>
  )
}

export default App
