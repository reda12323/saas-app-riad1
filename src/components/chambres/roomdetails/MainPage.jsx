import './MainPage.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { PiHairDryer } from "react-icons/pi";
import { PiTowel } from "react-icons/pi";
import ResButton from '../../reservebutton/ResButton'

const MainPage = () => {
    return (
        <div className="complete-page-main">
            <div className="rm-big-part">
                <div className="rm-medu-child-1">
                    <div className="rm-small-child-1-1">

                        <div className='urganece-div'>
                            <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_095337-scaled-pqpitf9nrgs8fbs8o9ctyfu1oj52qbylt5nl2qkrgo.jpg" alt="" />
                            <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_095204-scaled-pqpiqlr39cx9lfvp51h4h5g9ix1fn0rlf7758ura4o.jpg" alt="" />
                        </div>

                        <div className='urganece-div'>
                            <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_095249-scaled-pqpis0idieur0dtywnez7sn5lq396od3m6fd5so0so.jpg" alt="" />
                            <img className="img" src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_095541-scaled-pqpivctpt7fgagz7e3f82ya5n1m8jxmqqpxil7pmo8.jpg" alt="" />
                        </div>
                        
                    </div>
                    <div className="rm-small-child-1-2">
                        <div className='rm-ex-small-child-1-1'>
                            <h3>Description</h3>
                            <p>Chambre donnant un accès direct au patio du riad. Elle est<br/> équipée d’une salle de bain privative et d’un petit espace repos<br/> avec fauteuils. Capacité maximum : 2 personnes. Petit-déjeuner<br/> inclus pour chaque réservation.</p>
                        </div>

                        <div className='rm-ex-small-child-1-2'>
                            <h3>Equipements</h3>
                            <p> 
                                <ul className="features-list f-list-1">
                                    <li><i className="fas fa-tv"></i> TV</li>
                                    <li><i className="fas fa-wifi"></i> Wifi</li>
                                    <li><i className="fas fa-bath"></i> Salle de bain</li>
                                    <li><PiHairDryer id='pI'/> Sèche cheveux</li>
                                </ul>
                                <ul className="features-list">
                                    <li><PiTowel id='pI'/> Serviettes</li>
                                    <li><i className="fas fa-soap"></i> Articles de toilettes</li>
                                    <li><i className="fas fa-snowflake"></i> Climatisation Réversible</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className='rm-small-child-1-3'>
                        <div className='rm-tarif'>Tarif : à partir de 70 Eur par nuit pour 2 personnes</div>
                        <ResButton/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default MainPage;