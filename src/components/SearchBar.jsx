// import  { useState, useEffect } from 'react'
// import { Button } from 'react-bootstrap'

// const SearchBar = ({ setStarWarsData }) => {
//   useEffect(() => {
//     localStorage.setItem('formData', JSON.stringify(formData))
//   }, [formData])

//   const emptySearchResult = (value) => {
//     if (value === '' || null || undefined) {
//       return { setStarWarsData }
//     }
//   }

//   function handleInputChange(event) {
//     const { name, value } = event.target

//     setFormData((prevExpense) => ({ ...prevExpense, [name]: value }))
//   }

//   return (
//     <>
//       <div className="row-one">
//         <input
//           type="input"
//           placeholder="Search a character name"
//           name="searchBar"
//           //   value
//           onChange={handleInputChange}
//         ></input>
//       </div>
//       <Button type="submit" variant="custom" size="lg" onClick={() => {}}>
//         Add Expense
//       </Button>
//     </>
//   )
// }

// export default SearchBar
