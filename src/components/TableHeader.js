import React from 'react'
import CharacterTableRows from './CharacterTableRows'

const ExpenseTable = ({ starWarsData }) => {
  return (
    <>
      <div>
        <table className="Expense-Table rounded-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Birth date </th>
              <th>Height</th>
              <th>Mass</th>
              <th>Homeworld</th>
              <th>Species</th>
            </tr>
          </thead>

          <tbody>
            <CharacterTableRows starWarsData={starWarsData} />
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ExpenseTable
