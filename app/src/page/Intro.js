import React from 'react';
import {Link} from 'react-router-dom';
import Big from "components/Organisms/Big";
import {Button, Btn_text,Btn_icon} from "components/Atom/Button";

function Intro() {
  return(
     <div className="Intro">
        <Big />
        <div className="Buttons inner40">
        <Link to="/Login" key="Login" >
            <Button 
              className={"Btn full fill-orange radius-20 h-50 icon"}
            >
              <Btn_text
                className={"txt-white font-18"}
                text={"로그인"}
              />
              <Btn_icon 
                className={"arrow"}
              />
            </Button >
          </Link>
          <Link to="/Join" key="Join">
            <Button 
              className={"Btn full border border-orange radius-20 h-50 icon"}
            >
              <Btn_text
                className={"txt-orange font-18"}
                text={"이메일로 가입"}
              />
              <Btn_icon 
                className={"arrow"}
              />
            </Button>
          </Link>
        </div>
     </div>
  )
}



export default Intro;