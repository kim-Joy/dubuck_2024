import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Big from "components/Organisms/Big";
import {Button, ButtonIcon } from "components/Atom/Button";

function Intro() {
  return(
     <div className="Intro">
        <Big />
        <div className="Buttons inner40">
        <Link to="/Login" key="Login" >
            <ButtonIcon 
              className={"Btn full fill-orange radius-20 h-50 icon"}
              classSpan={"txt-white font-18"}
              text={"로그인"}
              classI={"arrow"}
            />
          </Link>
          <Link to="/Join" key="Join">
            <ButtonIcon 
              className={"Btn full border border-orange radius-20 h-50 icon"}
              classSpan={"txt-orange font-18"}
              text={"이메일로 가입"}
              classI={"arrow"}
            />
          </Link>
        </div>
     </div>
  )
}



export default Intro;