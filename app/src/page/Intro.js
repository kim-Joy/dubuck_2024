import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from "./Login";

import Big from "../components/Organisms/Big";
import Button from "../components/Atom/Button";


function Intro() {
  return (
    <div className="Intro">
      <Big />
      <Link to="/Login" >
          <Button 
            btnClass={"Btn full paint orange radius-20 h-50 icon"}
            txtClass={"txt white font-18"}
            text={"로그인"}
            icon={"arrow"}
          />
        </Link>

        <Routes>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </div>
   

  );
}

export default Intro;