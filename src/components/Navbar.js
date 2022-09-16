import { Link } from "react-router-dom";

function Navbar() {

    return(
        <div className="navbar-container">
            <div className="logo-container">
                <span>mon comptable.com</span>
            </div>
            <div className="buttons-container navs">
                <Link to="/">
                    <button className="btn-second-type">
                        <span>Tableau de bord</span>
                    </button>
                </Link>
                <Link to="/addfiles">
                    <button className="btn-first-type">
                            <span>Payer ses taxes</span>
                    </button>
                </Link>
                <Link to="/">
                    <button className="btn-first-type">
                            <span>Faire son bilan</span>
                    </button>
                </Link>
                <Link to="/">
                    <button className="btn-first-type">
                            <span>Accompagnement</span>
                    </button>
                </Link>
            </div>
            <div className="buttons-container">
                <Link to="/">
                    <button className="btn-second-type">
                            <span>Se déconnecter</span>
                    </button>
                </Link>
            </div>
        </div>
    )

}

export default Navbar;