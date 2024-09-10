import Infobar from '../sitebar/Infobar';
import './Accueil.css';
import Slider from '../slider/Slider';
import MainPage from './MainPage';
import Footer from '../footer/Footer';

const Accueil = () => {
    return (
        <div style={{overflowX: "hidden"}}>
            <div className="">
                <Infobar/>
                <Slider/>
            </div>
            <div>
                <MainPage/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Accueil;
