import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import {Input, Label} from "components/Atom/Form";
import {ButtonIcon} from "components/Atom/Button";

import Big from "components/Organisms/Big";
import {Confirm} from "components/Organisms/Confirm";


function Login() { 

  // input state
  const [inputs, setinputs] = useState({
    email : "",
    pw: ""

   });
   const {
    email,pw
   } = inputs;
  const valueChange = (e) => {
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }
  
  return(
     <div className="Login">
        <Big />
        <form action="">
          <ul className="form inner40">
            <li className="form-item">
              <Label 
                className={"form-label"}
                htmlFor={"email"}
                text={"이메일"}
              />
              <Input
                id={"email"}
                className={"form-input"}
                type={"text"}
                placeholder={"@를 포함한 이메일을 입력하세요."}
                required={true}
                name={"email"}
                value={email}
                onChange={valueChange}
              />
              <p 
                className="form-guide warning"
                style={{display: "none"}} 
              >
                올바른 이메일을 입력해주세요.
              </p>
            </li>
            <li className="form-item">
              <Label 
                className={"form-label"}
                htmlFor={"pw"}
                text={"비밀번호"}
              />
              <Input
                id={"pw"}
                className={"form-input"}
                type={"password"}
                required={true}
                name={"pw"}
                value={pw}
                onChange={valueChange}
              />
            </li>
          </ul>
        </form>
        <div className="Buttons inner40">
            <ButtonIcon 
              onClick={LoginCheck}
              className={"Btn full fill-orange radius-20 h-50 icon"}
              classSpan={"txt-white font-18"}
              text={"로그인"}
              classI={"arrow"}
            />
        </div>
        <Link to="/FindEmail"><p className="form-utill">비밀번호가 뭐였더라?</p></Link>


        <button onClick={openDialog}>컨피그 열려라</button>
     </div>
  )
}

//로그인 체크
function LoginCheck(){
  const USER_EMAIL = document.querySelector("#user_email");
  const USER_PW = document.querySelector("#user_pw");
  let GUIDE = document.querySelector(".form-guide");

  if(USER_EMAIL.value === "admin"){
    if(USER_PW.value === "1234"){
      alert("로그인 성공");
    } else {
      alert("비밀번호를 입력하세요.");
    }
  } else {
    alert("이메일을 입력하세요.");
    GUIDE.style.display = 'block';
  }
}



// 컨피그 열기 테스트
function openDialog(e) {
  const dialog = document.querySelector(".Dialog");
  dialog.showModal();
 }

export default Login;

/* 

1. 이메일 정규화 체크 -> 가이드 노출
2. alert 대신 컨피그 노출

*/