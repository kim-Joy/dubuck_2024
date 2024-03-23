import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import {Header} from "components/Organisms/Header";
import {Button} from "components/Atom/Button";
import {Input, Label} from "components/Atom/Form";
import {Select} from "components/Atom/Select";
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

  let [IsSelected, setIsSelected] = useState('선택하세요.');
  
  const OPTION_LIST = [
    {key: "1", value: "naver.com"},
    {key: "2", value: "daum.com"},
    {key: "3", value: "gmail.com"},
    {key: "4", value: "nate.com"},
    {key: "5", value: "yahoo.com"},
    {key: "6", value: "직접 입력"}
  ]
  //option click
  const optionClick = (e) =>{
    let SELECT_BTN = document.querySelector(".select-btn");
    const target = e.target.value;
    const EMAIL_ETC = document.querySelector("#email_etc");
    SELECT_BTN.classList.remove('on');
    setIsSelected(target);
    
    if(target === '직접 입력') {
      EMAIL_ETC.disabled = false;
    } else {
      EMAIL_ETC.disabled = true;
    }
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
                <Select
                  id={"email_adress"}
                  value={IsSelected}
                  tit={IsSelected}
                  onChange={optionClick}
                  onClick={selectClick}
                  OP_LIST={OPTION_LIST}
                  optionClick={optionClick}
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
                  disabled={true}
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



//select toggle
function selectClick(e){
  e.target.classList.toggle('on');
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
  const EMAIL_INPUT = document.querySelector(".email-input");
  const SUBMIT_BTN = document.querySelector("#submit");  
  const EMAIL_ADRESS = document.querySelector("#email_adress");
  const EMAIL_ETC = document.querySelector("#email_etc");
  const SECURITY = document.querySelector(".security");
  const regex2 = new RegExp('[a-z]+\.[a-z]{2,3}');
  EMAIL_ETC.disabled = true;

  if(EMAIL_INPUT.value.length > 0){
    if(EMAIL_INPUT.value.length > 0 && EMAIL_ADRESS.value.includes('.')){
      console.log('hello');
      SECURITY.style.display = 'grid';
      SUBMIT_BTN.style.display = 'none';
    } else if(EMAIL_ADRESS.value === '직접 입력') {
      EMAIL_ETC.disabled = false;
      email2();
    } else {
      dialog.showModal();
      message.textContent = '이메일을 선택하세요.';
    }
  } else {
    dialog.showModal();
    message.textContent = '이메일을 입력해주세요.';

  }



  function email2(){
    if(EMAIL_ETC.value.length > 0 && regex2.test(EMAIL_ETC.value)) {
      SECURITY.style.display = 'grid';
      SUBMIT_BTN.style.display = 'none';
      EMAIL_ETC.disabled = true;
    } else {
      dialog.showModal();
      message.textContent = '유효하지 않은 이메일입니다.';
    }
  }

}



export default FindEmail;