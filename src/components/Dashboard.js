import Navbar from "./Navbar"
import "./Dashboard.css";
function Dashboard() {
    return(
        <>
            <Navbar />
            <div className="user-board-container">
                <div className="enterprise-name">
                    <span>Mokpokpo SARL</span>
                </div>
                <hr />
                <div className="user-board-bar">
                    <div className="title">
                        <span>Historique</span>
                    </div>
                    <div className="Search-filter-bar">
                        <label>
                            <input type="text" placeholder="Rechercher" name="search" />
                        </label>
                        <label>
                            <select>
                                <optgroup>
                                    <option>Aujourd'hui</option>
                                    <option>Hier</option>
                                    <option>les 7 derniers jours</option>
                                </optgroup>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="historic-container">
                    <div className="historic-bar">
                        <div className="historic-text">
                            <span>Paiement de l'tjtfkje</span>
                        </div>
                        <div className="historic-date">
                            <span>zqgrseqtyererdrzsetre</span>
                        </div>
                    </div>
                    <div className="historic-bar">
                        <div className="historic-text">
                            <span>Paiement de l'tjtfkje</span>
                        </div>
                        <div className="historic-date">
                            <span>zqgrseqtyererdrzsetre</span>
                        </div>
                    </div>
                    <div className="historic-bar"></div>
                    <div className="historic-bar"></div>
                    <div className="historic-bar"></div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;