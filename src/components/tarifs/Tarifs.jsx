import Infobar from "../sitebar/Infobar";
import Navbar from "../sitebar/Navbar";
import './Tarifs.css'
import MainPage from "./MainPage";
import Footer from '../footer/Footer';

const Tarifs = () => {
    return (
        <div style={{overflowX: "hidden"}}>
            <div style={{margin:"auto",paddingBottom:"60px"}}>
                <Infobar/>
                <div
                style={{ backgroundImage: 'url(https://darchadia.com/wp-content/uploads/2022/06/20220618_111815-scaled.jpg)',backgroundSize: "cover",backgroundPosition: 'top',width:"100%",height: "500px",  }}
                >
                    <span className="name-of-page-ch">tarifs</span>
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