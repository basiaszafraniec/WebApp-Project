import React, { useState } from "react";
import "../styles/search.css";
import { FaSearch } from "react-icons/fa"; // Importing the magnifying glass icon

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const suggestedSearches = [
    "Tattoo Styles",
    "Tattoo Artists",
    "Tattoo Ideas",
    "Tattoo Inspiration",
    "Tattoo Meanings"
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      console.log("Searching for:", searchTerm); // Handle the search logic here
    }
  };

  return (
    <div className="search-container">
      <form className="search-form">
        <div className="search-bar-container">
          <FaSearch className="search-icon" onClick={handleSearchSubmit} />
          <input
            type="text"
            placeholder="Search for tattoos..."
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleSearchSubmit}
            className="search-bar"
          />
        </div>
      </form>

      <div className="suggestions">
        <h2>Suggested Searches</h2>
        <ul>
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
