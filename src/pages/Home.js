import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import { useState } from "react";

function Home() {
  const [results, setResults] = useState([]);

  return (
    <div>

      <Header />

      <div style={styles.container}>

        <SearchBar setResults={setResults} />

        <ResultsList results={results} />

      </div>

      {/* viitor content */}
      <div style={{ marginTop: "200px", textAlign: "center" }}>
        <h2>Why choose us ...</h2>
      </div>

    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
    gap: "15px",
    marginTop: "30px"
  }
};

export default Home;