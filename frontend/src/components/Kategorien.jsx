import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Kategorien() {
  const [categories, setCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  

  const handleCategoryClick = (category) => {
    // Navigoni në rrugën e duhur me parametrin e kategorisë në URL
    // In Zukunft mit <Link> Componente realisiere
    navigate(`/books?category=${category.toLowerCase()}`);
  };



  async function fetchCategories() {
    const backendUrl = "http://localhost:5000/books";

    try {
      const response = await fetch(backendUrl);
      if (response.ok) {
        const data = await response.json();
        const uniqueCategories = [...new Set(data.map((book) => book.category))];
        setCategories(uniqueCategories);
      } else {
        throw new Error("Fehler beim Abrufen der Daten");
      }
    } catch (error) {
      console.error("Fehler beim Abrufen der Kategorien:", error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="group relative">
      <span
        className="cursor-pointer hover:text-black"
        onClick={toggleDropdown}
      >
        Kategorien
      </span>
      <ul
        className={`absolute bg-white text-black w-40 p-2 mt-2 space-y-2 rounded-lg shadow-lg ${
          isDropdownOpen ? "" : "hidden"
        }`}
      >
        {categories.map((category) => (
          <li
          key={category}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Kategorien;
