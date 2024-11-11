// Search.js
import React, { useState } from "react";
import "../styles/search.css";
import { FaSearch } from "react-icons/fa"; // Importing the magnifying glass icon

// Default export of the Search component
export default function Search() {
  // Local state to hold the search term entered by the user
  const [searchTerm, setSearchTerm] = useState("");
  
  // Suggested search terms for the user
  const suggestedSearches = [
    "tattoo artist Aarhus",
    "beginner stick and poke tips",
    "can I swim after getting a tattoo?",
    "user name",
    "realistic tattoos"
  ];

  // Function to handle input changes, updating the search term
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle search submission, either by pressing Enter or clicking the search icon
  const handleSearchSubmit = (e) => {
    // Check if the key pressed is "Enter" or if the user clicked the icon
    if (e.key === "Enter" || e.type === "click") {
      console.log("Searching for:", searchTerm); // Handle the search logic here
      // You could replace the console.log with actual search handling, like redirecting to a search results page
    }
  };

  return (
    <div className="search-container">
      {/* Search form */}
      <form className="search-form">
        <div className="search-bar-container">
          {/* Search icon (magnifying glass) */}
          <FaSearch className="search-icon" onClick={handleSearchSubmit} />
          
          {/* Search input */}
          <input
            type="text"
            placeholder="Search..." // Placeholder text in the input field
            value={searchTerm} // Value bound to state
            onChange={handleSearchChange} // Handle changes in the input field
            onKeyDown={handleSearchSubmit} // Handle "Enter" key press
            className="search-bar"
          />
        </div>
      </form>

      {/* Suggested search terms */}
      <div className="suggestions">
        <h2>Suggested Searches</h2>
        <ul>
          {/* Loop through the array of suggestions and render each one */}
          {suggestedSearches.map((suggestion, index) => (
            <li key={index} className="suggestion-item">
              {suggestion}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
