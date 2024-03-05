import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import {Header} from "components/Organisms/Header";
import {Button} from "components/Atom/Button";
import {Input, Label} from "components/Atom/Form";
import {SelectEmail} from "components/Atom/Select";
import {Security} from "components/Organisms/Security";
import {Confirm, Confirm_head, Confirm_body, Confirm_foot} from "components/Organisms/Confirm";

  
  

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
     <div className="find-email">
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
              <span className="mark">@</span>
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
            <li className="form-item ">  
              <Security />
            </li>
          </ul>
        </form>
        
        <div className="btn-group inner20">
          <Button 
            id={'submit'}
            onClick={EmailCheck}
            className={"btn full fill-orange radius-20 h-50"}
            classSpan={"txt-white font-18"}
            text={"인증번호 발송"}
          >
          </Button> 
        </div>

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


  //이메일인증 체크
  const EmailCheck = (e) => {  
    const dialog = document.querySelector(".Dialog");
    const message = document.querySelector('.message');
    const EMAIL_INPUT = document.querySelector(".email-input").value;
    const EMAIL_ADRESS = document.querySelector("#email_adress").value;
    const EMAIL_ETC = document.querySelector("#email_etc");
    const SECURITY = document.querySelector(".security");
    const SUBMIT_BTN = document.querySelector("#submit");
    
    dialog.showModal();
    if(EMAIL_INPUT.length > 0){
      if(EMAIL_INPUT.length > 0 && EMAIL_ADRESS.includes('.')){
        SECURITY.style.display = 'grid';
        EMAIL_ETC.readOnly = true;
        SUBMIT_BTN.style.display = 'none';
      } else if(EMAIL_INPUT.length > 0 && EMAIL_ADRESS === '직접 입력' ){
        dialog.showModal();
        message.textContent = '이메일 주소를 직접 입력하세요.';
      } else if(EMAIL_INPUT.length > 0 && EMAIL_ADRESS === '직접 입력' && EMAIL_ETC.value.length > 0){
        console.log('인증번호 넘겨야줘')
      } else {
        dialog.showModal();
        message.textContent = '이메일 주소를 선택하세요.';
        EMAIL_ETC.readOnly = false;
      }
    } else {
      dialog.showModal();
      message.textContent = '등록된 이메일이 없습니다. /n 회원가입 후 이용하세요.';
    }
  }


export default FindEmail;