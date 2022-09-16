import "./formulaire.css";

function Message() {

    return(
        <main>
            <div className="modal-container contact-modal">
                <div className="right-box-container contact-box">
                    <div className="form-title">
                        <span>Vous avez des questions ?</span>
                    </div>
                    <div className="form-container">
                        <form action="" method="">
                            <div className="name-surname-container">
                                <label>
                                    <span>Nom :</span>
                                    <input type="text" placeholder="Nom" name="surname"/>
                                </label>
                                <label>
                                    <span>Prénoms :</span>
                                    <input type="text" placeholder="Prénoms" name="name"/>
                                </label>
                            </div>
                            <label>
                                <span>E mail :</span>
                                <input type="text" placeholder="E mail" name="email"/>
                            </label>
                            <label>
                                <span>Sujet :</span>
                                <input type="text" placeholder="Sujet" name="subject"/>
                            </label>
                            <label>
                                <span>Message :</span>
                                <textarea placeholder="Message" name="message"/>
                            </label>
                            <button>Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Message;