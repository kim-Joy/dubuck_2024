import React, { useState } from 'react';

import {Header} from "components/Organisms/Header";
import {Button} from "components/Atom/Button";
import {Input, Label} from "components/Atom/Form";
import {SelectEmail} from "components/Atom/Select";
import {Security} from "components/Organisms/Security";
 
const EMAIL_INPUT = document.querySelector(".email-input");
const SELECT_BTN = document.querySelector(".select-btn");
const SECURITY_GROUP = document.querySelector(".security-group");
const EMAIL_ETC = document.querySelector("#email_etc");

  
  

function FindEmail() {
  
  // input state
  const [inputs, setinputs] = useState({
    email_id : "",
    email_etc : ""
   });
   const {
    email_id,email_etc
   } = inputs;
  const valueChange = (e) => {
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }


  return(
     <div className="FindEmil">
        <Header 
          title={"계정찾기"}
        >
          </Header>

        <form action="">
          <ul className="form inner20">
            <li className="form-item horizontal">
              <div>
                <Label 
                  className={"form-label"}
                  htmlFor={"email_id"}
                  text={"이메일"}
                />
                <Input
                  id={"email_id"}
                  className={"form-input email-input"}
                  type={"text"}
                  name={"email_id"}
                  value={email_id}
                  onChange={valueChange}
                />
              </div>
              <span>@</span>
              <div>
                <Label 
                  className={"indent form-label"}
                  htmlFor={"email_adress"}
                  text={"이메일 주소"}
                />
                <SelectEmail 
                  id={"email_adress"}
                  value={"선택하세요."}
                  text={"선택하세요."}

                />
              </div>
              <Input
                  id={"email_etc"}
                  className={"form-input full email-etc"}
                  type={"text"}
                  placeholder={"직접 입력해주세요."}
                  name={"email_etc"}
                  value={email_etc}
                  onChange={valueChange}
                />
            </li>
            <li className="form-item">  
              <Security />
            </li>
          </ul>
        </form>
        <div className="Buttons inner20">
          <Button 
            onClick={EmailCheck}
            className={"Btn full fill-orange radius-20 h-50"}
            classSpan={"txt-white font-18"}
            text={"인증번호 발송"}
          >
          </Button> 
        </div>
     </div>
  )
}



//이메일인증 체크
export const EmailCheck = (e) => {
    if(EMAIL_INPUT.value.length > 0) {
      if(SELECT_BTN.value === "선택하세요."){
        //alert("이메일 선택하세요.");
        SECURITY_GROUP.style.display = 'flex';
    } else {
      alert("이메일을 입력하세요.")
    }
  }

}

export default FindEmail;