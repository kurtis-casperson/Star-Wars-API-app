import { Button } from 'react-bootstrap'
// import { characterData } from './src/App.jsx'

const PaginationComponent = (props) => {
  const { nextPage, prevPage, setRequestUrl } = props
  // save the page numebr in state .  then can add or subrtract from the state
  // get the page number

  ////// to add page numbers.  Take the output data.count and divide by 10
  //

  const clickNextButton = () => {
    setRequestUrl(nextPage)
  }

  const clickPrevButton = () => {
    setRequestUrl(prevPage)
  }

  return (
    <>
      <div className="page-turn-buttons">
        <Button
          id="prevButton"
          type="button"
          variant="dark"
          size="sm"
          onClick={() => clickPrevButton()}
        >
          Previous Page
        </Button>
        <Button
          id="nextButton"
          type="button"
          variant="dark"
          size="sm"
          onClick={() => clickNextButton()}
        >
          Next Page
        </Button>
      </div>
    </>
  )
}

export default PaginationComponent
