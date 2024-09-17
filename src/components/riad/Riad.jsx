import Infobar from "../sitebar/Infobar";
import Navbar from "../sitebar/Navbar";
import riad from './image/riad.jpg';
import MainPage from "./MainPage";
import Footer from '../footer/Footer';

const Riad = () => {
    return (
         <div style={{overflowX: "hidden"}}>
            <div style={{margin:"auto",paddingBottom:"60px"}}>
                <Infobar/>
                <div
                style={{ backgroundImage: 'url(https://darchadia.com/wp-content/uploads/2022/06/20220618_111815-scaled.jpg)',backgroundSize: "cover",backgroundPosition: 'top',width:"100%",height: "500px", }}
                >
                    <span className="name-of-page-ch">le riad</span>
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
 
export default Riad;