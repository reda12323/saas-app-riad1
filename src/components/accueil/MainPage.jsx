import { Link } from 'react-router-dom';
import './MainPage.css'
import img1 from './image/first-page.jpg'
import ImagesSliders from './imgslider/ImagesSliders';
const MainPage = () => {
    return (
        <div className='complete-page-main'>
            <div className='first-part-main'>
                <div className='child-part-main'>
                    <div className='part-main-div'>
                        <span className='span'>Bonjour</span>
                    </div>
                    <h2>Bienvenue à Riad Romana, votre refuge d'exception au cœur de Marrakech</h2>
                    <p>
                        Nous sommes enchantés de vous accueillir dans notre havre de paix, où chaque détail a été pensé avec soin pour vous offrir une expérience inoubliable. Que vous soyez en quête d'une escapade romantique, d'un séjour en famille ou d'un moment de détente entre amis, Riad Romana est votre sanctuaire privé.
                        <br /><br />
                        Imaginez-vous plongeant dans une piscine scintillante sous le soleil doux du Maroc, savourant des plats exquis de la cuisine locale dans le confort de votre propre riad, et vous relaxant dans des chambres magnifiquement décorées qui allient charme traditionnel et commodités modernes.
                        <br /><br />
                        Notre équipe dévouée est là pour vous offrir un service personnalisé, anticipant vos moindres besoins et s'assurant que chaque instant de votre séjour soit empreint de luxe et de confort.
                        <br /><br />
                        Parcourez les ruelles envoûtantes de Marrakech, imprégnez-vous de la culture vibrante et des traditions séculaires, puis retrouvez la sérénité et le calme en revenant à Riad Romana.
                        <br /><br />
                        Nous avons à cœur de créer des souvenirs exceptionnels et c’est un honneur de partager ce coin de paradis avec vous. Que votre séjour soit une pause enchantée ou le début d’une aventure marocaine, soyez assurés que Riad Romana sera le cadre idéal pour vos moments précieux.
                        <br /><br />
                        Bienvenue chez vous, bienvenue à Riad Romana. Nous sommes impatients de rendre votre séjour tout simplement inoubliable.
                        <br /><br />
                        Avec chaleur,
                        <br /><br />
                        <span style={{fontWeight:700,fontFamily: "Josefin Sans, Arial, Helvetica, sans-serif",color:"gray"}}>L’équipe de Riad Romana</span>
                    </p>
                </div>
                <div className='part-main-2-div'>
                    <img className='img1' src={img1} alt="First Page" />
                    <div className='part-main-3-div' >
                        <Link to="/reserver">
                            <button>
                                <i className="vc_btn3-icon fas fa-calendar-check"></i> Réserver maintenant
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='second-part-main'>
                <div className='second-part-1'>
                    <div className='second-part-1-two'>
                        <h4>BIENVENUE CHEZ VOUS, NOUS SOMMES IMPATIENTS DE RENDRE VOTRE SÉJOUR INOUBLIABLE</h4>
                    </div><br />
                    <ImagesSliders/>
                </div>
                <div  className='second-part-2'>
                    <ul>
                        <li> Chambres</li>
                        <li> Lits</li>
                        <li>Cuisine</li>
                        <li>Salle de sport</li>
                        <li>Salle de cinéma</li>
                        <li>Piscine</li>
                        <li>Chauffage</li>
                        <li>Salle de sport</li>
                        <li>Wi-Fi Internet</li>
                        <li>TV</li>
                        <li>Pour familles/enfants</li>
                        <li>Produits de base</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default MainPage;