import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "./Dashboard";
import { LeftBar } from "./Dashboard/LeftBar";
import { InfoShow } from "./Dashboard/InfoShow";
import { Login } from "./Login";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Supondo um estado inicial falso

  // Aqui você teria sua lógica para definir isLoggedIn baseado na autenticação do usuário

  function handleLogin() {
    setIsLoggedIn(true);
  }

  return (
    <Router>
      <div className="App" style={{ display: "flex" }}>
        {isLoggedIn ? (
          <>
            <LeftBar />
            <Routes>
              <Route path="/" element={<InfoShow content="StatusGestor" />} />
              <Route
                path="/financeiro"
                element={<InfoShow content="financeiro" />}
              />
              <Route path="/obras" element={<InfoShow content="obras" />} />
              <Route
                path="/funcionarios"
                element={<InfoShow content="funcionarios" />}
              />
              <Route path="/prazos" element={<InfoShow content="prazos" />} />
              <Route path="/" element={<Container />} exact />
            </Routes>
          </>
        ) : (
          <Login handleLogin={handleLogin} /> // Supondo que você tenha um componente Login para renderizar
        )}
      </div>
    </Router>
  );
}

export default App;
