import React from 'react';
import {Link} from 'react-router-dom';
import Big from "components/Organisms/Big";
import {Button} from "components/Atom/Button";

function Intro() {
  return(
     <div className="Intro">
        <Big />
        <div className="Buttons inner40">
        <Link to="/Login" key="Login" >
            <Button 
              className={"Btn full fill-orange radius-20 h-50 icon"}
              icon={true}
              classSpan={"txt-white font-18"}
              text={"로그인"}
            >
            </Button >
          </Link>
          <Link to="/Join" key="Join">
            <Button 
              className={"Btn full border border-orange radius-20 h-50 icon"} 
              icon={true}
              classSpan={"txt-orange font-18"}
              text={"이메일로 가입"}
            >
            </Button>
          </Link>
        </div>
     </div>
  )
}



export default Intro;