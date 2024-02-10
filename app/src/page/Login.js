import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Big from "components/Organisms/Big";
import {Input, Label, Select} from "components/Atom/Form";
import {Button, ButtonIcon} from "components/Atom/Button";

function Login() {
  return(
     <div className="Login">
        <Big />
        <form action="">
          <ul className="form">
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
        <div className="Buttons">
        <Link to="/Login" key="Login" >
            <ButtonIcon 
              className={"Btn full paint orange radius-20 h-50 icon"}
              classSpan={"txt white font-18"}
              text={"로그인"}
              classI={"arrow"}
            />
          </Link>
        </div>
        <Link to="/FindEmail"><p className="form-utill">비밀번호가 뭐였더라?</p></Link>
     </div>
  )
}



export default Login;

/* 

value 값 넣는경우 인풋 입력 안되는거 확인

*/