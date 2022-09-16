import "./process.css";
import exit from "../assets/left-arrow.png"
// import { use } from "react-router-dom";

function Process(props) {

// const navigate = useNavigate();
// const back = (location) => {
//     navigate(location);
// }
    return(
        <div className="return-state-container">
            <div className="return-button-container">
                    <button>
                        <img src={exit} />
                    </button>
            </div>
            <div className="state-container">
                <div className="circle circle-line" id={props.drop.toString()}>
                    <span>Dépôt des documents</span>
                </div>
                <div className="circle circle-line" id={props.declare.toString()}>
                    <span>Déclarations</span>
                </div>
                <div className="circle" id={props.pay.toString()}>
                    <span>Paiement</span>
                </div>
            </div>
        </div>
    )
}

export default Process;