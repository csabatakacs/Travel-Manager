import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AttractionDetails from "./pages/AttractionDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attraction/:id" element={<AttractionDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;