import Infobar from "../sitebar/Infobar";
import Navbar from "../sitebar/Navbar";

import MainPage from "./MainPage";
import Footer from '../footer/Footer';

const Reserver = () => {
    return (
        <div style={{overflowX: "hidden"}}>
            <div style={{margin:"auto",paddingBottom:"60px"}}>
                <Infobar/>
                <div
                style={{ backgroundImage: 'url(https://darchadia.com/wp-content/uploads/2022/07/DSC_0158-scaled.jpg)',backgroundSize: "cover",backgroundPosition: 'center',width:"100%",height: "500px", }}
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
 
export default Reserver;