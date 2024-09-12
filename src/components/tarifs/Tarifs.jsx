import Infobar from "../sitebar/Infobar";
import Navbar from "../sitebar/Navbar";
import riad from './image/riad.jpg';
import MainPage from "./MainPage";
import Footer from '../footer/Footer';

const Tarifs = () => {
    return (
        <div style={{overflowX: "hidden"}}>
            <div style={{margin:"auto",paddingBottom:"60px"}}>
                <Infobar/>
                <div
                style={{ backgroundImage: `url(${riad})`,backgroundSize: "cover",width:"100%",height: "500px", }}
                >
                    <Navbar />
                </div>
            </div>
            <div>
                <MainPage/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}
 
export default Tarifs;