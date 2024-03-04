import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import {Input, Label} from "components/Atom/Form";
import {Button} from "components/Atom/Button";

import Big from "components/Organisms/Big";
import {Confirm, Confirm_head, Confirm_body, Confirm_foot} from "components/Organisms/Confirm";


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
     <div className="login">
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
        <div className="btn-group inner40">
          <Link to={``}>
            <Button 
              className={"btn full fill-orange radius-20 h-50 icon"}
              classSpan={"txt-white font-18"}
              onClick={LoginCheck}
              text={"로그인"}
            />
           </Link>
        </div>
        <Link to="/FindEmail"><p className="form-utill">비밀번호가 뭐였더라?</p></Link>


        <Confirm>
          <Confirm_body message={''} />
          <Confirm_foot>
            <Button 
              className={"btn full fill-orange radius-20 h-40"}
              classSpan={"txt-white font-14"}
              onClick={closeDialog}
              text={"확인"}
            />
          </Confirm_foot>
        </Confirm>
     </div>
  )
}

function closeDialog(e) {
  const dialog = document.querySelector(".Dialog");
  dialog.close();
 }

//로그인 체크
function LoginCheck(e){ 
  const navigate = useNavigate();
  const USER_EMAIL = document.querySelector("#email");
  const dialog = document.querySelector(".Dialog");
  const USER_PW = document.querySelector("#pw");
  let message = document.querySelector('.message');
  let GUIDE = document.querySelector(".form-guide");


  if(USER_EMAIL.value === 'admin') {
    if(USER_EMAIL.value === 'admin' && USER_PW.value === '1234') {
      console.log('로그인 성공');
      navigate('/Main');
    } else {
      dialog.showModal();;
      message.textContent = '비밀번호를 입력하세요.';
      GUIDE.style.display = 'none';
    }
  } else {
    GUIDE.style.display = 'block';
    dialog.showModal();
    message.textContent = '정보가 맞지않습니다. /n올바른게 입력해주세요.';
  }
}



export default Login;
