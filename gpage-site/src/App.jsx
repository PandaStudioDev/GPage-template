import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import GabineteMunicipal from "./pages/Gabinete";
import TramitesServicios from "./pages/Tramites";
import MunicipioGaleria from "./pages/Municipio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/gabinete" element={<GabineteMunicipal />} />
        <Route path="/tramites" element={<TramitesServicios />} />
        <Route path="/municipio" element={<MunicipioGaleria />} />
      </Routes>
    </Router>
  );
}

export default App;
