import Infobar from './Infobar';
// import Navbar from './Navbar';

import './Accueil.css';
import Slider from '../slider/Slider';

const Accueil = () => {
    return (
        <div className="accueil-container">
            <Infobar/>
            
            <Slider/>
            
        </div>
    );
};

export default Accueil;
