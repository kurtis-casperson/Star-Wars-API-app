import PropTypes from 'prop-types'


const CharacterTableRows = () => {
  return (
    <>
      {/* {starWarsData.map((character, index) => (
        <tr key={index}>
          <td>{expense.date}</td>
          <td>{expense.merchant}</td>
          <td>{expense.paymentType}</td>
          <td>{expense.amount}</td>
        </tr>
      ))} */}

    </>
  )
}
CharacterTableRows.propTypes = { starWarsData: PropTypes.object.isRequired }

export default CharacterTableRows
