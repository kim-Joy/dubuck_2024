import { Link } from 'react-router-dom';

import Big from "components/Organisms/Big";
import {Input, Label} from "components/Atom/Form";
import {ButtonIcon} from "components/Atom/Button";


const USER_ID = document.querySelector("#user_id");
const USER_PW = document.querySelector("#user_pw");
let GUIDE = document.querySelector(".form-guide");

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
                className={"form-input"}
                type={"text"}
                placeholder={"@를 포함한 이메일을 입력하세요."}
                required={true}
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
              onClick={LoginCheck}
              className={"Btn full fill-orange radius-20 h-50 icon"}
              classSpan={"txt-white font-18"}
              text={"로그인"}
              classI={"arrow"}
            />
        </div>
        <Link to="/FindEmail"><p className="form-utill">비밀번호가 뭐였더라?</p></Link>
     </div>
  )
}

//로그인 체크
export const LoginCheck = (e) => {
  if(USER_ID.value === "admin") {
    if(USER_PW.value === "1234"){
      alert("로그인 성공");
    } else {
      alert("비밀번호를 입력하세요.");
    }
  } else {
    alert("이메일을 입력하세요.");
    GUIDE.style.display = 'block';
  }
}



export default Login;

/* 

1. 이메일 정규화 체크 -> 가이드 노출
2. alert 대신 컨피그 노출

*/