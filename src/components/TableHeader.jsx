import CharacterTableRows from './CharacterTableRows'
// import NavigationButtons from './NavigationButtons'

const TableHeader = ({ starWarsData }) => {
  return (
    <>
      <table className="Expense-Table rounded-2">
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
      </table>
      <div>{/* <NavigationButtons /> */}</div>
    </>
  )
}

export default TableHeader
