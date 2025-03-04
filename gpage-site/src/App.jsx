import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import GabineteMunicipal from "./pages/Gabinete";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gabinete" element={<GabineteMunicipal />} />
      </Routes>
    </Router>
  );
}

export default App;
