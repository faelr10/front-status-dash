import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from './Dashboard';
import { LeftBar } from './Dashboard/LeftBar';
import { InfoShow } from './Dashboard/InfoShow';

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex' }}>
        <LeftBar />
          <Routes>
            <Route path="/" element={<InfoShow content="StatusGestor" />} />
            <Route path="/financeiro" element={<InfoShow content="financeiro" />} />
            <Route path="/obras" element={<InfoShow content="obras" />} />
            <Route path="/funcionarios" element={<InfoShow content="funcionarios" />} />
            <Route path="/prazos" element={<InfoShow content="prazos" />} />
            <Route path="/" element={<Container />} exact />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
