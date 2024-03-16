import React from 'react';
import {Link} from 'react-router-dom';
import Big from "components/Organisms/Big";
import {Button} from "components/Atom/Button";

import Login from './Login';

function Intro() {
  
  function loginClick(e) {
    e.preventDefault();
    
  const absolute = document.querySelector('.absolute-box');

    absolute.classList.add('on');
  }

  return(
     <div className="intro">
        <Big />
        <div className="inner40">
          <div className="btn-group">
            <Button 
              className={"btn full fill-orange radius-20 h-50 icon"}
              classSpan={"txt-white font-18"}
              text={"로그인"}
              onClick={loginClick}
            >
            </Button >
            <Link to="/Join" key="Join">
              <Button 
                className={"btn full border border-orange radius-20 h-50 icon"} 
                classSpan={"txt-orange font-18"}
                text={"이메일로 가입"}
              >
              </Button>
            </Link>
          </div>
          <div className="absolute-box">
            <Login />
          </div>
        </div>

     </div>
  )
}


export default Intro;