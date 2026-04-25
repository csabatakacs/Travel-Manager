import { useNavigate } from "react-router-dom"; // Hook pentru navigare intre pagini
import ResultCard from "./ResultCard"; // Componenta pentru fiecare rezultat

/**
 * Componenta care afiseaza lista de rezultate
 * @param {Array} results - lista de rezultate
 */
function ResultsList({ results }) {
  const navigate = useNavigate();

  // Daca nu exista rezultate, afisam mesaj
  if (!results || results.length === 0) {
    return (
      <div className="noResultsMessage">
        <h3>No events found</h3>
      </div>
    );
  }

  return (
    <div className="resultsWrapper">
      <div className="resultsList">

        {/* Iteram prin rezultate si afisam cate un card */}
        {results.map((item) => (
          <ResultCard
            key={item.id} // Cheie unica pentru fiecare element
            item={item}

            // Navigare catre pagina de detalii
            onClick={() => navigate(`/attraction/${item.id}`)}
          />
        ))}

      </div>
    </div>
  );
}

export default ResultsList;