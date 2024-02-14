import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import {Header} from "components/Organisms/Header";
import {Button} from "components/Atom/Button";
import {Input, Label, CheckBox} from "components/Atom/Form";
import {SelectEmail} from "components/Atom/Select";

import Policy from 'page/Policy';


function Join() {

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
     <div className="Join">
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
              <span>/</span>
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
              <div>
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
              <span>@</span>
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
                  className={"form-input full"}
                  type={"text"}
                  plceholder={"직접 입력해주세요."}
                  name={"email_etc"}
                  value={email_etc}
                  onChange={valueChange}
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
              <p className="form-guide warning">비밀번호가 일치하지 않습니다.</p>
            </li>
          </ul>
          <section className="agreeSection inner20">
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
          <div className="Buttons inner20">
            <Button 
                className={"Btn full fill-orange radius-20 h-50"}                
                classSpan={"txt-white font-18"}
                text={"가입하기"}
            >
            </Button>
          </div>
        </form>
     </div>
  )
}


export default Join;