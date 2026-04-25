import { useState, useEffect } from "react"; // Import hooks React
import "./SearchBar.css"; // Import stiluri
import { attractions } from "../data/attractions.js"; // Import date mock

/**
 * Componenta SearchBar
 * Se ocupa de cautare, filtrare si sortare rezultate
 */
function SearchBar({ setResults }) {

  // State pentru input si filtre
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("none");
  const [showFilter, setShowFilter] = useState(false);
  const locations = [...new Set(attractions.map(item => item.location))]; // Extrage locatiile unice din date

  /**
   * Effect care ruleaza la fiecare schimbare de filtru
   * Aplica filtrare + sortare si trimite rezultatele
   */
  useEffect(() => {
    let filtered = [...attractions]; // copiem array pentru siguranta

    // Filtrare dupa nume sau locatie
    if (query.trim() !== "") {
      const q = query.toLowerCase();
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q)
      );
    }

    // Filtrare dupa pret
    filtered = filtered.filter(item => {
      const min = minPrice === "" ? 0 : minPrice;
      const max = maxPrice === "" ? Infinity : maxPrice;

      return item.price >= min && item.price <= max;
    });

    // Filtrare dupa locatie selectata
    if (location) {
      filtered = filtered.filter(item => item.location === location);
    }

    // Sortare dupa pret
    if (sort === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    // Trimitem rezultatele catre componenta parinte
    setResults(filtered);

  }, [query, minPrice, maxPrice, location, sort, setResults]);

  /**
   * Toggle pentru sortare (asc -> desc -> asc)
   */
  const toggleSort = () => {
    if (sort === "none" || sort === "desc") setSort("asc");
    else setSort("desc");
  };

  /**
   * Reset toate filtrele
   */
  const clearFilters = () => {
    setMinPrice(0);
    setMaxPrice(500);
    setLocation("");
    setQuery("");
    setSort("none");
  };

  const parsePrice = (value) => value === "" ? "" : Number(value);

  return (
    <div className="wrapper">

      <div className="topRow">

        {/* Input cautare */}
        <input
          className="input"
          placeholder="Search events..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* Dropdown filtre */}
        <div
          className="dropdownWrapper"
          onMouseEnter={() => setShowFilter(true)}
          onMouseLeave={() => setShowFilter(false)}
        >
          <button type="button" className="iconBtn">Filter ▼</button>

          {/* Afisare dropdown */}
          {showFilter && (
            <div className="dropdown">

              {/* Filtru pret */}
              <div className="filterSection">
                <label>Price range</label>
                <div className="priceRange">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(parsePrice(e.target.value))}
                    className="priceInput"
                  />
                  <span> </span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(parsePrice(e.target.value))}
                    className="priceInput"
                  />
                </div>
              </div>

              {/* Filtru locatie */}
              <div className="filterSection">
                <label>Location</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="selectInput"
                >
                  <option value="">All locations</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              {/* Reset filtre */}
              <button
                type="button"
                className="clearBtn"
                onClick={clearFilters}
              >
                Clear all filters
              </button>

            </div>
          )}
        </div>

        {/* Buton sortare */}
        <button
          type="button"
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