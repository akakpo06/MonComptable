import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Process from "./Return-process-level";

function FileDrop() {
    return(
        <>
            <Navbar />
            <Process drop="done" declare="" pay="" prev="dashboard"></Process>
            <div className="form-container">
                <form>
                    <label>
                        <input type="file" />
                    </label>
                <Link to="/declaration">
                    <button className="btn-first-type">
                            <span>Suivant</span>
                    </button>
                </Link>
                </form>
            </div>
        </>
    )
}
export default FileDrop;