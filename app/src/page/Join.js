import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import {Header} from "components/Organisms/Header";
import {Button} from "components/Atom/Button";
import {Input, Label, CheckBox} from "components/Atom/Form";
import {SelectEmail} from "components/Atom/Select";
import {Confirm, Confirm_head, Confirm_body, Confirm_foot} from "components/Organisms/Confirm";





function Join() {
  useEffect(() => {
    console.log('dd')
  }, []);

    // input state
    const [inputs, setinputs] = useState({
      family_name: "",
      middle_name: "",
      email_id : "",
      email_etc : "",
      pw: "",
      pw2 : ""  
     });

     const {
      family_name,middle_name,email_id,email_etc,pw,pw2
     } = inputs;

    const valueChange = (e) => {
      setinputs({
        ...inputs,
        [e.target.name]: e.target.value
      });
    }
    


  return(
     <div className="join">
        <Header
          title={"회원가입"}
        >
        </Header>
        <form action="">
          <ul className="form inner20">
            <li className="form-item horizontal">
              <div>
                <Label 
                  className={"form-label"}
                  htmlFor={"family_name"}
                  text={"성"}
                />
                <Input
                  id={"family_name"}
                  className={"form-input"}
                  type={"text"}
                  required={true}
                  name={"family_name"}
                  value={family_name}
                  onChange={valueChange}
                />
              </div>
              <span className="mark">/</span>
              <div>
                <Label 
                  className={"form-label"}
                  htmlFor={"middle_name"}
                  text={"이름"}
                />
                <Input
                  id={"middle_name"}
                  className={"form-input"}
                  type={"text"}
                  required={true}
                  name={"middle_name"}
                  value={middle_name}
                  onChange={valueChange}
                />
              </div>
            </li>
            <li className="form-item horizontal">
              <div className="grid">
                <Label 
                    className={"form-label"}
                    htmlFor={"email_id"}
                    text={"이메일"}
                  />
                  <Input
                    id={"email_id"}
                    className={"form-input"}
                    type={"text"}
                    required={true}
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
                />
              </div>
              <Input
                  className={"form-input full email_etc"}
                  type={"text"}
                  plceholder={"직접 입력해주세요."}
                  name={"email_etc"}
                  value={email_etc}
                  onChange={valueChange}
                  disabled={true}
                />
            </li>
            <li className="form-item">
              <Label 
                className={"form-label"}
                htmlFor={"pw"}
                text={"비밀번호"}
              />
              <Input
                id={"user_pw"}
                className={"form-input"}
                type={"password"}
                required={true}
                name={"pw"}
                value={pw}
                onChange={valueChange}
              />
              <p className="form-guide">영문+숫자 조합 6자리 이상 입력하세요.</p>
            </li>
            <li className="form-item">
              <Label 
                className={"form-label"}
                htmlFor={"pw2"}
                text={"비밀번호 확인"}
              />
              <Input
                id={"pw2"}
                className={"form-input"}
                type={"password"}
                required={true}
                name={"pw2"}
                value={pw2}
                onChange={valueChange}
              />
              <p 
              className="form-guide warning"
              style={{display: "none"}} 
              >비밀번호가 일치하지 않습니다.</p>
            </li>
          </ul>

          <section className="section-agree inner20">
            <h3>약관동의</h3>
            <ul>
              <li>
                <CheckBox 
                  InputId={"all_check"}
                  htmlFor={"all_check"}
                  name={"all_check"}
                  text={"전체 동의"}
                />
              </li>
              <li>
                <CheckBox 
                   InputId={"agree01"}
                   htmlFor={"agree01"}
                   name={"agree01"}
                   text={"이용약관 동의(필수)"}
                />
                <Link to="/Policy" >
                  <i className="more"><span className="visuallyhidden">더보기</span></i>  
              </Link>
              </li>
              <li>
                <CheckBox 
                   InputId={"agree02"}
                   htmlFor={"agree02"}
                   name={"agree02"}
                   text={"마케팅약관 동의(선택)"}
                />
                <Link to="/Marketing" >
                  <i className="more"><span className="visuallyhidden">더보기</span></i>  
                </Link>
              </li>
            </ul>
          </section>
          <div className="btn-group inner20">
            <Button 
              onClick={JoinSubmit}
              className={"btn full fill-orange radius-20 h-50"}                
              classSpan={"txt-white font-18"}
              text={"가입하기"}
            >
            </Button>
          </div>
        </form>

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


 
//회원가입
function JoinSubmit(){
  
 const dialog = document.querySelector(".Dialog");
 const message = document.querySelector('.message');

  
  function name(){
    const FirstName = document.querySelector('#family_name');
    const MiddleName = document.querySelector('#middle_name');
    if(FirstName.value.length > 0 ){ 
      if(MiddleName.value.length > 0) {
        email()
      } else {
        dialog.showModal();
        message.textContent = '이름을 입력해주세요.';
      }
    } else {
      dialog.showModal();
      message.textContent = '성을 입력해주세요.';
    }
  }

  function email(){
    const EmailId = document.querySelector('#email_id');
    const SelectBtn = document.querySelector('.select-btn');

    if(EmailId.value.length > 0){
      if(EmailId.value.length > 0 && SelectBtn.value.includes('.')){
        psaword();
      }  else {
        dialog.showModal();
        message.textContent = '이메일을 선택하세요.';
      }
    } else {
      dialog.showModal();
      message.textContent = '이메일을 입력해주세요.';
  
    }

  }

  function psaword(){    
    const UserPw = document.querySelector('#user_pw');
    const PwAgain = document.querySelector('#pw2');
    const GUIDE = document.querySelector(".form-guide.warning");

    if(UserPw.value.length > 0 ){ 
      if(PwAgain.value.length > 0 ){ 
        if(UserPw.value === PwAgain.value ) {
          agree();
        } else {
          GUIDE.style.display = 'block';
        }
      } else {
        dialog.showModal();
        message.textContent = '비밀번호 확인을 입력하세요.';
      }
    } else {
      dialog.showModal();
      message.textContent = '비밀번호를 입력하세요.';
    }
  }

  function agree(){
    console.log('약관동의')
  }

  name()
}






export default Join;