import PropTypes from 'prop-types'
import CharacterTableRows from './CharacterTableRows'
import NavigationButtons from './NavigationButtons'

const TableHeader = ({starWarsData}) => {
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
            <CharacterTableRows />
          </tbody>
        </table>
        <NavigationButtons />
      </div>
    </>
  )
}
TableHeader.propTypes = { starWarsData: PropTypes.object.isRequired }
export default TableHeader
