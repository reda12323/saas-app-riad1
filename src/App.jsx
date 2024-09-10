import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './components/accueil/Accueil';
import Riad from './components/riad/Riad';

function App() {
  return (
    <BrowserRouter  basename="/saas-app-riad1">
      <div>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/riad" element={<Riad />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
