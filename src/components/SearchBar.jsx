import { Button } from 'react-bootstrap'

const SearchBar = (props) => {
  const { setRequestUrl, searchInput, setSearchInput } = props
  const handleInputSearch = (e) => {
    e.preventDefault()
    setSearchInput(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchInput === '' || null || undefined)
      return setRequestUrl('https://swapi.py4e.com/api/people/')
    setRequestUrl(`https://swapi.py4e.com/api/people/?search=${searchInput}`)
  }

  const handleClearSearch = (e) => {
    e.preventDefault()
    setRequestUrl('https://swapi.py4e.com/api/people/')
    setSearchInput('')
  }
  return (
    <>
      <div className="search-bar-container">
        <input
          id="searchBar"
          type="input"
          placeholder="Search by name"
          name="searchBar"
          value={searchInput}
          onChange={handleInputSearch}
        ></input>

        <Button
          id="searchButton"
          type="button"
          variant="info"
          size="sm"
          onClick={handleSearchSubmit}
        >
          Search
        </Button>

        <Button
          id="clearButton"
          type="button"
          variant="info"
          size="sm"
          onClick={handleClearSearch}
        >
          Clear
        </Button>
      </div>
    </>
  )
}

export default SearchBar
