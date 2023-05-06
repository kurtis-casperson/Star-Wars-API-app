import PropTypes from 'prop-types'

const CharacterTableRows = ({ starWarsData }) => {
  // loop through an array of objects

  // for (const character of starWarsData) {
  //   console.log(character, 'character')
  // }
  starWarsData.forEach((character, index) => console.log(character, index))

  return (
    <>
      {starWarsData.forEach(
        (character, index) => (
          <tr key={index}>
            <td>{character.name}</td>
            <td>{character.height}</td>
            <td>{character.mass}</td>
            <td>{character.birth_year}</td>
            <td>{character.homeworld}</td>
            <td>{character.species}</td>
          </tr>
        )
        // console.log(character, index)
      )}
    </>
  )
}
CharacterTableRows.propTypes = { starWarsData: PropTypes.object.isRequired }

export default CharacterTableRows
