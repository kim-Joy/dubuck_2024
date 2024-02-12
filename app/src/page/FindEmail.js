import React, { useState } from 'react';
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Header, HeaderTitle} from "components/Organisms/Header";
import {Button, ButtonIcon } from "components/Atom/Button";
import {Input, Label, CheckBox, SelectEmail} from "components/Atom/Form";
import Security from "components/Organisms/Security";


function FindEmail() {
  
  const [isValue, setisValue] = useState('');

  const ValueChange = (e) => {
    setisValue(e.target.value);
  }

  function handlerClick () {
    const email = document.querySelector("#email");
    const select = document.querySelector(".select-btn");
    const security = document.querySelector(".security-group");
  
    if(email.value.length > 0) {
      if(select.value == "선택하세요."){
        alert("이메일 선택하세요.")
      } else {
        security.style.display = 'flex';
      }
      
    } else {
      alert("이메일을 입력하세요.")
    }
   } 

  return(
     <div className="FindEmil">
        <HeaderTitle 
          title={"계정찾기"}
        />
        <form action="">
          <ul className="form inner20">
            <li className="form-item horizontal">
              <div>
                <Label 
                  className={"form-label"}
                  htmlFor={"email"}
                  text={"이메일"}
                />
                <Input
                  id={"email"}
                  name={""}
                  className={"form-input"}
                  type={"text"}
                  value={isValue}
                  onChange={ValueChange}
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
                  value={"선택하세요."}
                  text={"선택하세요."}

                />
              </div>
              <Input
                  name={"emailEtc"}
                  id={"email_etc"}
                  className={"form-input full email-etc"}
                  type={"text"}
                  placeholder={"직접 입력해주세요."}
                  disabled={true}
                />
            </li>
            <li className="form-item">
              <Security />
            </li>
          </ul>

        </form>
        <div className="Buttons inner20">
          <Button 
            onClick={handlerClick}
            className={"Btn full fill-orange radius-20 h-50"}
            classSpan={"txt-white font-18"}
            text={"인증번호 발송"}
          /> 
        </div>
     </div>
  )
}


  
  


export default FindEmail;