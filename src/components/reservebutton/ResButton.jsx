import { Link } from 'react-router-dom';
import './ResButton.css'
const ResButton = () => {
    return (
        <div className='button-first-div' ><Link to="/reserver">
            <button id='reserve-button'>
                <i className="vc_btn3-icon fas fa-calendar-check"></i> Réserver maintenant
            </button></Link>
        </div>
    );
}
 
export default ResButton;