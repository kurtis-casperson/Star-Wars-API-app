import PropTypes from 'prop-types'

const CharacterTableRows = ({ starWarsData }) => {
  return (
    <>
      {starWarsData.map((character, index) => {
        // eslint-disable-next-line no-extra-semi
        ;<tr key={index}>
          <td>{character.name}</td>
          <td>{character.height}</td>
          <td>{character.mass}</td>
          <td>{character.birth_year}</td>
          {
            // <td>{character.homeworld}</td>
            // <td>{character.species}</td>
          }
        </tr>
      })}
    </>
  )
}
CharacterTableRows.propTypes = { starWarsData: PropTypes.array.isRequired }

export default CharacterTableRows
