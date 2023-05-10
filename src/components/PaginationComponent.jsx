import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
// import { characterData } from './src/App.jsx'

const PaginationComponent = (props) => {
  const { nextPage, setHomePageUrl, homePageUrl } = props
  // save the page numebr in state .  then can add or subrtract from the state
  // get the page number

  const clickNextButton = () => {
    setHomePageUrl(nextPage)
    console.log('nextPage', nextPage, 'homePageUrl', homePageUrl)
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
          variant="danger"
          size="sm"
          onClick={() => clickNextButton()}
        >
          {'>'}
        </Button>
      </div>
      {/* <Button
        type="button"
        variant="danger"
        size="sm"
        onClick={() => nextPage()}
      >
        Next Page
      </Button> */}
    </>
  )
}

export default PaginationComponent
