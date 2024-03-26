import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {Input, Label} from "components/Atom/Form";
import {Button} from "components/Atom/Button";
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
  const navigate = useNavigate();


  //로그인 체크
  function LoginCheck(){
    const dialog = document.querySelector(".Dialog");
    const message = document.querySelector('.message');

    function email(){
      const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
      const USER_EMAIL = document.querySelector("#email");
      const GUIDE = document.querySelector(".form-guide");
      let admin = 'admin@naver.com';

      if(USER_EMAIL.value.length > 0) {
        if(regex.test(USER_EMAIL.value) === true && USER_EMAIL.value === admin) {
          GUIDE.style.display = 'none';
          sessionStorage.setItem('EMAIL_KEY', USER_EMAIL.value);
          pw();
        } else if(regex.test(USER_EMAIL.value) === true && !(USER_EMAIL.value === admin)) {
          dialog.showModal();
          message.textContent = `
          가입되지 않은 이메일입니다. 
          회원가입 후 이용해주세요.`;
        } else {
          GUIDE.style.display = 'block';
        }
      } else {
        dialog.showModal();
        message.textContent = '이메일을 입력하세요.';
      }
    }
    function pw(){
      const USER_PW = document.querySelector("#pw");

      if(USER_PW.value === '1234') {        
        sessionStorage.setItem('PW_KEY', USER_PW.value);
        navigate('/Main');
      } else {
        dialog.showModal();
        message.textContent = '비밀번호를 입력하세요.';
      }
    }
    email();

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
          <div className="btn-group inner40">
              <Button 
                className={"btn full fill-orange radius-20 h-50 icon"}
                classSpan={"txt-white font-18"}
                onClick={LoginCheck}
                text={"로그인"}
              />
          </div>
        </form>
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





//컨피그 닫기
function closeDialog(e) {
  const dialog = document.querySelector(".Dialog");
  dialog.close();
 }

 

export default Login;
