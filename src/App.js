import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import Inscription from "./components/inscription";
import Connexion from "./components/connexion";
import Message from "./components/message";
import Dashboard from "./components/Dasboard";
import FileDrop from "./components/payment-file-drop";
import Declaration from "./components/Declaration";
import Payment from "./components/final-payment";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/contact" element={<Message />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addfiles" element={<FileDrop />} />
          <Route path="/declaration" element={<Declaration />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
