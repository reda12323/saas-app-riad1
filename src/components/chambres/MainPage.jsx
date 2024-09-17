import { Link } from "react-router-dom";
import './MainPage.css'
import ResButton from "../reservebutton/ResButton";

const MainPage = () => {
    return (
        <div className='complete-page-main'>
            <div className="ch-big-part">
                <div className="ch-medu-child-1">
                    <div className="ch-small-child-1-1">
                        <Link to="/details/almohades" className="ch-link">
                            <div className="ch-exs-picture-1-1">
                                <h5>Chambre Almohades</h5>
                                <button>Détails</button>
                            </div>
                        </Link>
                    </div>

                    <div className="ch-small-child-1-2">
                        <Link to="/details/almoravides" className="ch-link">
                            <div className="ch-exs-picture-1-2">
                                <h5>Chambre Almoravides</h5>
                                <button>Détails</button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="ch-medu-child-2">
                    <div className="ch-small-child-2-1">
                        <Link to="/details/saadiens" className="ch-link">
                            <div className="ch-exs-picture-2-1">
                                <h5>Chambre Saadiens</h5>
                                <button>Détails</button>
                            </div>
                        </Link>
                    </div>
                    
                    <div className="ch-small-child-2-2">
                        <Link to="/details/meridines" className="ch-link">
                            <div className="ch-exs-picture-2-2">
                                <h5>Chambre Méridines</h5>
                                <button>Détails</button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="ch-medu-child-3">
                    <div className="ch-small-child-3-1">
                        <Link to="/details/alaouites" className="ch-link">
                            <div className="ch-exs-picture-3-2">
                                <h5>Chambre Alaouites</h5>
                                <button>Détails</button>
                            </div>
                        </Link>
                    </div>

                    <div className="ch-small-child-3-1">
                        <Link to="/details/suite-doree" className="ch-link">
                            <div className="ch-exs-picture-3-2">
                                <h5>Suite Dorée</h5>
                                <button>Détails</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='ch-button-first-div'>
                    <ResButton/>
            </div>
        </div>
    );
}
 
export default MainPage;