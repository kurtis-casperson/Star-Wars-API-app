import { useState, useEffect } from 'react'
import './App.css'
import './components/TableHeader.css'
import axios from 'axios'
import TableHeader from './components/TableHeader.jsx'
import PaginationComponent from './components/PaginationComponent'

function App() {
  const apiRequest = 'https://swapi.dev/api/people'
  const [homePageUrl, setHomePageUrl] = useState(apiRequest)
  const [starWarsData, setStarWarsData] = useState([])
  const [nextPage, setNextPage] = useState([])
  const [prevPage, setPrevPage] = useState(null)
  const [loading, setLoading] = useState(false)

  // side effects

  // anytime state changes, the component will re-render
  // the endless loop happens because of the state changing. anytime state changes then the functions starts again.
  // debugger
  const characterData = async () => {
    let peopleData = await axios.get(homePageUrl)
    let resultsData = peopleData.data.results
    let nextPageData = peopleData.data.next
    let prevPageData = peopleData.data.previous

    for (let character of resultsData) {
      let homeWorldData = await axios.get(character.homeworld)
      character.homeworldName = homeWorldData.data.name

      // threw me off because i didn't think the request would be bad if the first index was empty.
      if (character.species.length !== 0) {
        let speciesData = await axios.get(character.species)
        character.species = speciesData.data.name
      } else character.species = 'Human'
    }

    setStarWarsData(resultsData)
    setNextPage(nextPageData)
    setPrevPage(prevPageData)
  }
  useEffect(
    function () {
      characterData()
    },
    [homePageUrl]
  )

  return (
    <>
      <TableHeader
        starWarsData={starWarsData}
        setStarWarsData={setStarWarsData}
      />
      <PaginationComponent
        homePageUrl={homePageUrl}
        setHomePageUrl={setHomePageUrl}
        nextPage={nextPage}
        setNextPage={setNextPage}
        prevPage={prevPage}
        setPrevPage={setPrevPage}
      />
    </>
  )
}

export default App
