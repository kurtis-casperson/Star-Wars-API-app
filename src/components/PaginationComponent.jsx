import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
// import { characterData } from './src/App.jsx'

const PaginationComponent = (props) => {
  const { nextPage, prevPage, setHomePageUrl, homePageUrl } = props
  // save the page numebr in state .  then can add or subrtract from the state
  // get the page number

  ////// to add page numbers.  Take the output data.count and divide by 10
  //

  const clickNextButton = () => {
    setHomePageUrl(nextPage)
  }

  const clickPrevButton = () => {
    setHomePageUrl(prevPage)
  }

  //   useEffect(function () {
  //
  //       })
  //   }, [])
  return (
    <>
      <div>
        <Button
          type="button"
          variant="info"
          size="sm"
          onClick={() => clickNextButton()}
        >
          Next Page
        </Button>
      </div>
      <Button
        type="button"
        variant="dark"
        size="sm"
        onClick={() => clickPrevButton()}
      >
        Previous Page
      </Button>
    </>
  )
}

export default PaginationComponent
