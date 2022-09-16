import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Process from "./Return-process-level";
import "./declaration.css"

function Declaration() {
    return(
        <>
            <Navbar />
            <Process drop="done" declare="done" pay="" prev="addfiles"></Process>
            <div>
                <form>
                    <div className="double-input-container">
                        <label>
                            <span>Nature de l'impôt :</span>
                            <select name="nature-impot">
                                <optgroup>
                                    <option>Nature de l'impôt</option>
                                    <option>Retenu Sur Salaire</option>
                                    <option>Retenu Sur Salaire</option>
                                </optgroup>
                            </select>
                        </label>
                        <label>
                            <span>Néant :</span>
                            <select name="neant">
                                <optgroup>
                                    <option value="non">Non</option>
                                    <option value="oui">Oui</option>
                                </optgroup>
                            </select>
                        </label>
                    </div>
                    <div className="double-input-container">
                        <label>
                            <span>Période :</span>
                            <select name="periode">
                                <optgroup>
                                    <option value="">Période</option>
                                    <option value="janvier">Janvier</option>
                                    <option value="fevrier">Février</option>
                                </optgroup>
                            </select>
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
                    <div className="amount-container">
                        <span>Montant dû :</span>
                    </div>
                    <div className="form-buttons-container">
                        <Link to="">
                            <button className="btn-first-type">
                                    <span>Imprimer</span>
                            </button>
                        </Link>
                        <Link to="">
                            <button className="btn-first-type">
                                <span>Annexes</span>
                            </button>
                        </Link>
                        <Link to="/payment">
                            <button className="btn-first-type">
                                <span>Suivant</span>
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Declaration;