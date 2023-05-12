import { Button } from 'react-bootstrap'

const PaginationComponent = (props) => {
  const { nextPage, prevPage, setRequestUrl } = props

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
