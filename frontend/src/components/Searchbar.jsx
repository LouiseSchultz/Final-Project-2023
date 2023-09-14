
import React, { useState } from "react";
import "./styletest.css";
import data from "../Data.json";
import BookDetails from "./BookDetails"; // Import the BookDetails component

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  // Function to handle book selection
  const handleBookClick = (book) => {
    setSelectedBook(book);
    setSearchTerm(""); // Clear the search term when a book is clicked
  };

  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            value={searchTerm} // Use value instead of onChange
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="template_Container">
          {searchTerm !== "" &&
            data
              .filter((val) => {
                return val.title.toLowerCase().startsWith(searchTerm.toLowerCase());
              })
              .map((val) => {
                return (
                  <div
                    className="template"
                    key={val.id}
                    onClick={() => handleBookClick(val)} // Handle book click
                  >
                    <h3>{val.title}</h3>
                  </div>
                );
              })}
        </div>
      </div>

      {/* Conditionally render BookDetails component */}
      {selectedBook && <BookDetails book={selectedBook} />}
    </>
  );
}

export default SearchBar;




// import React, { useState } from "react";

// function SearchBar({ placeholder, data }) {
//   const [filteredData, setFilteredData] = useState([]);
//   const [wordEntered, setWordEntered] = useState("");

//   const handleFilter = (event) => {
//     const searchWord = event.target.value;
//     setWordEntered(searchWord);
//     const newFilter = data.filter((value) => {
//       return value.title.toLowerCase().startsWith(searchWord.toLowerCase());
//     });

//     if (searchWord === "") {
//       setFilteredData([]);
//     } else {
//       setFilteredData(newFilter);
//     }
//   };

//   const clearInput = () => {
//     setFilteredData([]);
//     setWordEntered("");
//   };

//   return (
//     <div className="search">
//       <div className="searchInputs">
//         <input
//           type="text"
//           placeholder={placeholder}
//           value={wordEntered}
//           onChange={handleFilter}
//         />

//       </div>
//       {filteredData.length !== 0 && (
//         <div className="dataResult">
//           {filteredData.slice(0, 15).map((value, key) => {
//             return (
//               <a className="dataItem" href={value.link} target="_blank">
//                 <p>{value.title} </p>
//               </a>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// export default SearchBar;
