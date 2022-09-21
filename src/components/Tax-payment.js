import FileDrop from "./payment-file-drop";
import Declaration from "./Declaration.js";
import Payment from "./final-payment";
import Navbar from "./Navbar";
import Process from "./Return-process-level";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function TaxPayment() {
    const navigate = useNavigate();
    const [pageNum, setPage] = useState(0);
    const [inputs, setInputs] = useState({});

    const pages = {
        0: <FileDrop handler={() => pageHandler}  setter={() => setInputs}></FileDrop>,
        1: <Declaration handler={() => pageHandler}  setter={() => setInputs}></Declaration>,
        2: <Payment handler={() => pageHandler}  setter={() => setInputs} submiter={() => handleSubmit}></Payment>
    }
    const pageHandler = (sign) => {
        if (sign === "+") {
            setPage(pageNum => pageNum + 1)
        }
        else if(sign === "-") {
            if(pageNum > 0) {
                setPage(pageNum => pageNum - 1)
            }
            else{
                navigate("/dashboard");
            }
        }
        else{
            navigate("/dashboard");
        }
    };
    const handleSubmit = () => {
        console.log(inputs);
    }
    return(
        <>
            <Navbar />
            <Process handler={() => pageHandler} ></Process>
            {pages[pageNum]}
        </>
    )
}

export default TaxPayment;