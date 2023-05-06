import PropTypes from 'prop-types'
import CharacterTableRows from './CharacterTableRows'
import NavigationButtons from './NavigationButtons'

const TableHeader = ({ starWarsData }) => {
  return (
    <>
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
          <CharacterTableRows starWarsData={[starWarsData]} />
        </tbody>
      </table>
      <div>
        <NavigationButtons />
      </div>
    </>
  )
}
TableHeader.propTypes = { starWarsData: PropTypes.object.isRequired }
export default TableHeader
