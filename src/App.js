import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CadastroUsuario from "./components/CadastroUsuario";
import Login from "./components/Login";
import PerfilUsuario from "./components/PerfilUsuario";
import PainelAdministrativo from "./components/PainelAdministrativo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<PerfilUsuario />} />
        <Route path="/admin" element={<PainelAdministrativo />} />
        <Route path="/" element={<Login />} /> {/* Rota padrão */}
      </Routes>
    </Router>
  );
}

export default App;
