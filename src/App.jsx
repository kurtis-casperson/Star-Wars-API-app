import { useState, useEffect } from 'react'
import './App.css'
import './components/TableHeader.css'
import './components/SearchBar.css'
import './components/PaginationComponent.css'
import './assets/original.avif'
import axios from 'axios'
import TableHeader from './components/TableHeader.jsx'
import PaginationComponent from './components/PaginationComponent'
import SearchBar from './components/SearchBar'

function App() {
  const apiRequest = 'https://swapi.py4e.com/api/people/'
  const [requestUrl, setRequestUrl] = useState(apiRequest)
  const [starWarsData, setStarWarsData] = useState([])
  const [searchQueryRequest, setSearchQueryRequest] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [nextPage, setNextPage] = useState([])
  const [prevPage, setPrevPage] = useState(null)
  const [loading, setLoading] = useState(false)

  const characterData = async () => {
    setLoading(true)
    let peopleData = await axios.get(requestUrl)
    let resultsData = peopleData.data.results
    let nextPageData = peopleData.data.next
    let prevPageData = peopleData.data.previous

    for (let character of resultsData) {
      let homeWorldData = await axios.get(character.homeworld)
      character.homeworldName = homeWorldData.data.name

      if (character.species.length !== 0) {
        let speciesData = await axios.get(character.species)
        character.species = speciesData.data.name
      } else character.species = 'Human'
    }

    setStarWarsData(resultsData)
    setLoading(false)
    setNextPage(nextPageData)
    setPrevPage(prevPageData)
  }
  useEffect(
    function () {
      characterData()
    },
    [requestUrl]
  )

  const wait = () => {
    if (loading) {
      return <h2>Loading Star Wars Data...</h2>
    }
  }

  return (
    <>
      <h1 id="title">iN AN APi FAR, FAR AWAy...</h1>
      <div className="app-body">
        <SearchBar
          setRequestUrl={setRequestUrl}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          searchQueryRequest={searchQueryRequest}
          setSearchQueryRequest={setSearchQueryRequest}
        />
        <TableHeader
          loading={loading}
          starWarsData={starWarsData}
          setStarWarsData={setStarWarsData}
        />
        <div id="loadingText">{wait()}</div>
        <PaginationComponent
          setRequestUrl={setRequestUrl}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    </>
  )
}

export default App
