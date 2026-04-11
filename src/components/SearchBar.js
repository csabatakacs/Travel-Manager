import { useState, useEffect } from "react";
import "./SearchBar.css";
import { attractions } from "../data/attractions.js";

function SearchBar({ setResults }) {
  const [query, setQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(500);
  const [minPrice, setMinPrice] = useState(0);
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("none");
  const [showFilter, setShowFilter] = useState(false);
 

  // Get unique locations from data
  const locations = [...new Set(attractions.map(item => item.location))];

  useEffect(() => {
    let filtered = attractions;

    // Search by name/location
    if (query.trim() !== "") {
      const q = query.toLowerCase();
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q)
      );
    }

    // Filter by price range
    filtered = filtered.filter(item => 
      item.price >= minPrice && item.price <= maxPrice
    );

    // Filter by location
    if (location) {
      filtered = filtered.filter(item => item.location === location);
    }

    // Sort
    if (sort === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setResults(filtered);
  }, [query, minPrice, maxPrice, location, sort]);

  const toggleSort = () => {
    if (sort === "none" || sort === "desc") setSort("asc");
    else setSort("desc");
  };

  const clearFilters = () => {
    setMinPrice(0);
    setMaxPrice(500);
    setLocation("");
    setQuery("");
    setSort("none");
  };

  return (
    <div className="wrapper">
      <div className="topRow">
        <input
          className="input"
          placeholder="Search events..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div 
          className="dropdownWrapper"
          onMouseEnter={() => setShowFilter(true)}
          onMouseLeave={() => setShowFilter(false)}
        >
          <button className="iconBtn">
            Filter ▼
          </button>

          {showFilter && (
            <div className="dropdown">
              <div className="filterSection">
                <label>Price range</label>
                <div className="priceRange">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="priceInput"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="priceInput"
                  />
                </div>
              </div>

              <div className="filterSection">
                <label>Location</label>
                <select 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)}
                  className="selectInput"
                >
                  <option value="">All locations</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              <button 
                className="clearBtn"
                onClick={clearFilters}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        <button
          className="iconBtn"
          onClick={toggleSort}
        >
          Sort by price {sort === "asc" ? "↑" : sort === "desc" ? "↓" : ""}
        </button>
      </div>
    </div>
  );
}

export default SearchBar;