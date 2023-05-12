import CharacterTableRows from './CharacterTableRows'
import { Table } from 'react-bootstrap'

const TableHeader = ({ starWarsData }) => {
  return (
    <>
      <Table id="tableCharacterData" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Birth date </th>
            <th>Homeworld</th>
            <th>Species</th>
          </tr>
        </thead>

        <tbody>
          <CharacterTableRows starWarsData={starWarsData} />
        </tbody>
      </Table>
    </>
  )
}

export default TableHeader
