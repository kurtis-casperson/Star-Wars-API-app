import React from 'react'
import { Button } from 'react-bootstrap'

const CharacterTableRows = () => {
  return (
    <>
      {characterData.map((expense, index) => (
        <tr key={index}>
          <td>{expense.date}</td>
          <td>{expense.merchant}</td>
          <td>{expense.paymentType}</td>
          <td>{expense.amount}</td>
        </tr>
      ))}

      <Button
        type="button"
        variant="danger"
        size="sm"
        // onClick={() => lastCharacterArray(expense.id)}
      >
        Last Page
      </Button>
      <Button
        type="button"
        variant="danger"
        size="sm"
        // onClick={() => nextCharacterArray(expense.id)}
      >
        Next Page
      </Button>
    </>
  )
}
export default CharacterTableRows
