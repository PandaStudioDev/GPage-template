import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import GabineteMunicipal from "./pages/Gabinete";
import TramitesServicios from "./pages/Tramites";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gabinete" element={<GabineteMunicipal />} />
        <Route path="/tramites" element={<TramitesServicios />} />
      </Routes>
    </Router>
  );
}

export default App;
