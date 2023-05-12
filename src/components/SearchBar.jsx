import { Button } from 'react-bootstrap'

const SearchBar = (props) => {
  const { setRequestUrl, searchInput, setSearchInput } = props
  const handleInputSearch = (e) => {
    setSearchInput(e.target.value)

    console.log(searchInput)
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
          onClick={(e) => {
            if (searchInput === '' || null || undefined)
              return setRequestUrl('https://swapi.dev/api/people')
            handleInputSearch(e)
            setSearchInput('')
            setRequestUrl(`https://swapi.dev/api/people/?search=${searchInput}`)
          }}
        >
          Search
        </Button>
      </div>
    </>
  )
}

export default SearchBar
