import './MainPage.css';

const MainPage = () => {
    return (
        <div className='complete-page-main'>
            <div className="ct-big-part">
                <div className=''>
                    <div className=''>
                        <p className='first-sen'>Pour toute demande d’information ou de réservation n’hésitez pas à nous contacter.</p>
                        <h1 className='coor-word'>Coordonnées</h1>
                    </div>
                    <div className=''>
                        <div className='localisation'>Hay Kennaria, Derb Boutouil N° 79 Médina - Marrakech</div>
                        <div className='contact-info'>
                            <div className='contact-item item-1'>
                                <span className='contact-item-sp-1'>Adresse e-mail</span>
                                <span className='contact-item-sp-2'><a style={{textDecoration:"none",color:'#6b6363'}} href="mailto:redalextayzi@gamil.com">contact@riad-romana-marrakech@gmaill.com</a></span>
                            </div>
                            <div className='contact-item item-2'>
                                <span className='contact-item-sp-1'>Numéro de téléphone</span>
                                <span className='contact-item-sp-2'>+212 768 805 405</span>
                            </div>
                            <div className='contact-item item-3'>
                                <span className='contact-item-sp-1'>Horaires de travail</span>
                                <span className='contact-item-sp-2'>7j/7
                                24h</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form className='ct-form' action="">
                            <div className='first-part-form-ct'>
                                <input type="text" name="" placeholder='Votre Nom' id="input1" />
                                <input type="text" name="" placeholder='Votre Email' id="" />
                            </div>
                            <div className='first-part-two-ct'>
                                <textarea placeholder='Message' name="" id=""></textarea>
                            </div>
                            <div className='first-part-tree-ct'>
                                <button>ENVOYER</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
