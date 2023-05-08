const CharacterTableRows = ({ starWarsData }) => {
  return (
    <>
      {starWarsData.map((character, index) => (
        <tr key={index}>
          <td>{character.name}</td>
          <td>{character.height + 'in'}</td>
          <td>{character.mass}</td>
          <td>{character.birth_year}</td>
          <td>{character.homeworldName}</td>
          <td>{character.species}</td>
        </tr>
      ))}
    </>
  )
}

export default CharacterTableRows
