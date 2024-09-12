import ResButton from '../reservebutton/ResButton';
import './MainPage.css';
import riad from './image/riad.jpg';

const MainPage = () => {
    return (
        <div className='complete-page-main-1'>

             <div className='big-part-phase-1'>
                <p className='medu-part-phase-1-1'>
                Plongez dans l’élégance et le raffinement au cœur de la majestueuse Marrakech, où le Riad Romana vous accueille dans une oasis de luxe. Niché au sein d’un cadre exceptionnel, ce riad de prestige offre bien plus qu’un simple séjour : il vous propose une expérience unique, où le confort s’harmonise avec l’authenticité marocaine.
                </p>
                <div className='medu-part-phase-1-2' style={{
                    backgroundImage: `url(${riad})`
                }}>
                </div>
             </div>

             <div className='big-part-phase-2'>
                <div className='medu-part-phase-2-1'>
                    <p className='small-part-phase-2-1' style={{fontFamily:'"Josefin Sans", Arial, Helvetica, sans-serif',fontSize:'14px',color:'grey'}}>
                    <span style={{color:'#666363',fontWeight: 600}}>Élégance Marocaine Moderne :</span> Le Riad Romana séduit par son mariage subtil entre l'architecture marocaine traditionnelle et des touches contemporaines. Cinq chambres somptueusement décorées vous invitent à un voyage visuel, chaque détail témoignant du savoir-faire artisanal local.<br/><br/>

                    <span style={{color:'#666363',fontWeight: 600}}>Détente et Luxe :</span> Imprégnez-vous du luxe ultime avec une piscine étincelante, un espace fitness exclusif, et des jardins luxuriants qui évoquent la sérénité. Chaque chambre est une oasis de tranquillité, offrant une échappée paisible après une journée à explorer la ville animée.<br/><br/>

                    <span style={{color:'#666363',fontWeight: 600}}>Culinaire Exquise :</span> La cuisine entièrement équipée vous invite à explorer les saveurs de Marrakech. Préparez vos propres plats ou optez pour notre service de chef privé, qui transformera vos repas en des expériences gastronomiques inoubliables.<br/><br/>
                    </p>
                    <div className='small-part-phase-2-2' style={{
                        backgroundImage: `url(${riad})`
                    }}></div>
                </div>

                <div className='medu-part-phase-2-2'>
                    <div className='small-part-phase-2-2-2' style={{
                        backgroundImage: `url(${riad})`
                    }}></div>
                    <p className='small-part-phase-2-2-1' style={{fontFamily:'"Josefin Sans", Arial, Helvetica, sans-serif',fontSize:'14px',color:'grey'}}>
                    <span style={{color:'#666363',fontWeight: 600}}>Service Personnalisé :</span> Notre équipe, polyglotte et dévouée, est prête à anticiper vos moindres besoins. De l'arrivée à l'aéroport jusqu'au départ, nous veillons à ce que chaque moment de votre séjour soit empreint d'attention et de soin.<br/><br/>

                    <span style={{color:'#666363',fontWeight: 600}}>Emplacement Privilégié :</span> Situé à Marrakech, le Riad Romana vous offre un accès facile aux trésors culturels de la ville. Plongez dans les souks animés, découvrez les palais historiques, ou détendez-vous dans notre retraite paisible après une journée d'aventures.<br/><br/>

                    <span style={{color:'#666363',fontWeight: 600}}>Réservez dès maintenant votre séjour au Riad Romana et laissez-vous enchanter par l'essence du luxe marocain. Votre oasis personnelle vous attend.</span><br/><br/>
                    </p>
                </div>
             </div>

             <div className='big-part-phase-3'>
                <p className='medu-part-phase-3-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem magnam     dignissimos esse quasi animi ex temporibus dicta minima, dolorum commodi sed nam error fugit
                </p>
                <div className='button-first-div'>
                    <ResButton/>
                </div>
                
             </div>
        </div>
    );
}
 
export default MainPage;