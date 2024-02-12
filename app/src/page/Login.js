import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Big from "components/Organisms/Big";
import {Input, Label, Select} from "components/Atom/Form";
import {Button, ButtonIcon} from "components/Atom/Button";
import Confirm from 'components/Organisms/Confrim';


function Login() {
  
  return(
     <div className="Login">
        <Big />
        <form action="">
          <ul className="form inner40">
            <li className="form-item">
              <Label 
                className={"form-label"}
                htmlFor={"user_id"}
                text={"이메일"}
              />
              <Input
                id={"user_id"}
                name={""}
                className={"form-input"}
                type={"text"}
                placeholder={"@를 포함한 이메일을 입력하세요."}
                required={true}
              />
              <p className="form-guide warning">올바른 이메일을 입력해주세요.</p>
            </li>
            <li className="form-item">
              <Label 
                className={"form-label"}
                htmlFor={"user_pw"}
                text={"비밀번호"}
              />
              <Input
                id={"user_pw"}
                name={""}
                className={"form-input"}
                type={"password"}
                required={true}
              />
            </li>
          </ul>
        </form>
        <div className="Buttons inner40">
            <ButtonIcon 
              id={"LoginBtn"}
              onClick={handlerClick}
              className={"Btn full fill-orange radius-20 h-50 icon"}
              classSpan={"txt-white font-18"}
              text={"로그인"}
              classI={"arrow"}
            />
        </div>
        <Link to="/FindEmail"><p className="form-utill">비밀번호가 뭐였더라?</p></Link>
        <button onClick={openDialog}>컨피그 열려라</button>
        <Confirm 
          title ={"타이틀"}
          desc={`비밀번호를\n수정하시겠습니까?`}
        />
     </div>
  )
}


export const handlerClick =({}) => {
  const userId = document.querySelector("#user_id");
  const userPw = document.querySelector("#user_pw");
  console.log('sss');
  const ff = document.querySelector(".ff");

  ff.classList.toggle('on');
}


// 컨피그 열기 테스트
function openDialog(e) {
  const dialog = document.querySelector(".Dialog");
  dialog.showModal();
 }


export default Login;

/* 

value 값 넣는경우 인풋 입력 안되는거 확인

*/