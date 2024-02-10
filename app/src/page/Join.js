import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Header, HeaderTitle} from "components/Organisms/Header";
import {Button, ButtonIcon } from "components/Atom/Button";
import {Input, Label, Select} from "components/Atom/Form";
import Security from 'components/Organisms/Security';
import Policy from 'page/Policy';

function Join() {
  return(
     <div className="Join">
        <HeaderTitle 
          title={"회원가입"}
        />
        <form action="">
          <ul className="form">
            <li className="form-item horizontal">
              <div>
                <Label 
                  className={"form-label"}
                  htmlFor={"user_first"}
                  text={"성"}
                />
                <Input
                  id={"user_first"}
                  name={""}
                  className={"form-input"}
                  type={"text"}
                  required={true}
                />
              </div>
              <span>/</span>
              <div>
                <Label 
                  className={"form-label"}
                  htmlFor={"user_name"}
                  text={"이름"}
                />
                <Input
                  id={"user_name"}
                  name={""}
                  className={"form-input"}
                  type={"text"}
                  required={true}
                />
              </div>
            </li>
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
                  required={true}
                />
              </div>
              <span>@</span>
              <div>
                <Label 
                  className={"indent form-label"}
                  htmlFor={"email_adress"}
                  text={"이메일 주소"}
                />
                <Select 
                  text={"선택하세요."}
                />
              </div>
              <Input
                  name={""}
                  className={"form-input full"}
                  type={"text"}
                  plceholder={"직접 입력해주세요."}
                />
            </li>
            <li>
              <Security />
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
              <p className="form-guide">영문+숫자 조합 6자리 이상 입력하세요.</p>
            </li>
            <li className="form-item">
              <Label 
                className={"form-label"}
                htmlFor={"user_pw2"}
                text={"비밀번호 확인"}
              />
              <Input
                id={"user_pw2"}
                name={""}
                className={"form-input"}
                type={"password"}
                required={true}
              />
              <p className="form-guide warning">비밀번호가 일치하지 않습니다.</p>
            </li>
          </ul>
          <div>
            전체동의
            <Link to="/Policy" >
              체크박스
            </Link>
          </div>
          <div className="Buttons">
            <Button 
                className={"Btn full paint orange radius-20 h-50"}
                classSpan={"txt white font-18"}
                text={"가입하기"}
              />
          </div>
        </form>
     </div>
  )
}



export default Join;