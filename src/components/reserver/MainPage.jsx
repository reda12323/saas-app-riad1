import './MainPage.css';

const MainPage = () => {
    return (
        <div className='complete-page-main'>
            <div className="rs-big-part">
                <div className=''>
                    <div className=''>
                        <p className='first-sen'>Nous vous remercions pour l’intérêt que vous portez à notre Riad. Nous proposons un service de navette depuis l’aéroport vers Riad Romana à un tarif de 15 Eur. Si vous n’utilisez pas ce service, une personne du Riad viendra vous chercher à l’endroit que nous vous indiquerons.
                        Vous pouvez nous joindre à n’importe quel moment à ces numéros : 00 212 6 64 54 53 58 | 00 212 6 61 30 44 15.</p>
                        <h1 className='coor-word'>Formulaire de réservation</h1>
                    </div>
                
                    <div>
                        <form className='rs-form' action="">
                            <div className='first-part-form-rs'>
                                <input type="text" name="" placeholder='Votre Nom' id="input1" />
                                <input type="text" name="" placeholder='Votre Prenom' id="" />
                            </div>
                            <div className='first-part-form-rs'>
                                <input type="text" name="" placeholder='Votre Email' id="input1" />
                                <input type="text" name="" placeholder='Votre Téléphone' id="" />
                            </div>
                            <div className='first-part-form-rs'>
                                <input type="text" name="" placeholder="Date d'arrivée" id="input1" />
                                <input type="text" name="" placeholder="Date de départ" id="" />
                            </div>
                            <div className='first-part-two-rs'>
                                <textarea placeholder='Message' name="" id=""></textarea>
                            </div>
                            <div className='first-part-tree-rs'>
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
