import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Header, HeaderTitle} from "components/Organisms/Header";
import {Button, ButtonIcon } from "components/Atom/Button";
import {Input, Label, Select} from "components/Atom/Form";
import Security from "components/Organisms/Security";

function FindEmail() {

  return(
     <div className="Join">
        <HeaderTitle 
          title={"계정찾기"}
        />
        <form action="">
          <section className="form">
            <div className="form-item horizontal">
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
            </div>
            <Routes>
              <Route path="/" component={<Security />}></Route>
            </Routes>
     
          </section>

        </form>
        <div className="Buttons">
          <Link to="/Security">
              <Button 
                className={"Btn full paint orange radius-20 h-50"}
                classSpan={"txt white font-18"}
                text={"인증번호 발송"}
              /> 
              </Link>
          </div>
     </div>
  )
}


export default FindEmail;