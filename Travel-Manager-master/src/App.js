import Home from "./pages/Home";
import AttractionDetails from "./pages/AttractionDetails";

// Import routing din react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * Componenta principala a aplicatiei
 * Se ocupa de routing intre pagini
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pagina principala */}
        <Route path="/" element={<Home />} />

        {/* Pagina de detalii pentru o atractie (id din URL) */}
        <Route path="/attraction/:id" element={<AttractionDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;