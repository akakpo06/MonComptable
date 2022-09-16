import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Process from "./Return-process-level";

function Payment() {
    return(
        <>
            <Navbar />
            <Process drop="done" declare="done" pay="done" prev="declaration"></Process>
            <div>
                <form>
                    <div className="double-input-container">
                        <label>
                            <span>Payer via :</span>
                            <select name="moyen-paiement">
                                <optgroup>
                                    <option>Moyen de paiement</option>
                                    <option>TMoney</option>
                                    <option>Flooz</option>
                                    <option>Ecobank</option>
                                </optgroup>
                            </select>
                        </label>
                        <label>
                            <span>Numéro du compte/Numéro de téléphone :</span>
                            <input placeholder="Numéro du compte/Numéro de téléphone" name=""/>
                        </label>
                    </div>
                    <div className="double-input-container">
                        <label>
                            <span>Montant</span>
                            <input placeholder="" />
                        </label>
                        <label>
                            <span>Année :</span>
                            <select name="annee">
                                <optgroup>
                                    <option value="">Année</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                </optgroup>
                            </select>
                        </label>
                    </div>
                    <Link to="/dashboard">
                        <button className="btn-first-type">
                            <span>Valider</span>
                        </button>
                    </Link>
                </form>
            </div>
        </>
    )
}

export default Payment;