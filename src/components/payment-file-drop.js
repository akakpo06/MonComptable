import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Process from "./Return-process-level";

function FileDrop(props) {

    const handler = props.handler();
    const setInputs = props.setter();

    console.log(props.handler)
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    return(
        <>
            <div className="form-container">
                <form>
                    <label>
                        <input type="file" name="files" onChange={handleChange}/>
                    </label>
                {/* <Link to="/declaration"> */}
                    <button type="button" className="btn-first-type" onClick={() => handler("+")}>
                            <span>Suivant</span>
                    </button>
                {/* </Link> */}
                </form>
            </div>
        </>
    )
}
export default FileDrop;