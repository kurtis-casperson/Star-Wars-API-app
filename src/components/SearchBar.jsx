import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

const SearchBar = ({ setStarWarsData }) => {
  
  const [searchData, setSearchData] = useState([])
  
  const SearchResult = () => {
    if (searchData === '' || null || undefined) return
  }

  let a = await axios.get('https://swapi.dev/api/people/?search=Boba')
  console.log(a.data.results)
  for (var i = 0; i < peopleData.data.results.length; i++) {
    // console.log('peopleData', peopleData.data.results[i].name)
    // myOptions.push(res.data[i].employee_name)
  }

  useEffect(() => {
    
  }, [])

  return (
    <>
      <div className="search-bar">
        <input
          id="searchBar"
          type="input"
          placeholder="Search a character by name"
          name="searchBar"
          onChange={}
        ></input>
      </div>
      <Button type="button" variant="info" size="sm" onClick={() => {}}>
        Search
      </Button>
    </>
  )
}

export default SearchBar
