import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './components/accueil/Accueil';
import Riad from './components/riad/Riad';
import NotFound from './components/notfound/NotFound';
import Chambres from './components/chambres/Chambres';
import Galerie from './components/galerie/Galerie';
import Contact from './components/contact/Contact';
import Tarifs from './components/tarifs/Tarifs';
import RoomDetails from './components/chambres/roomdetails/RoomDetails';

function App() {
  return (
    <BrowserRouter  basename="/saas-app-riad1">
      <div>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/riad" element={<Riad />} />
          <Route path="/chambres" element={<Chambres />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/details/:roomName" element={<RoomDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
