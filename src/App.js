import './App.css';
import Landpage from './components/Landpage.jsx';
import InicioSesion from './components/InicioSesion';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Landpage />} />
          <Route path="/inicioS" element={<InicioSesion />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
