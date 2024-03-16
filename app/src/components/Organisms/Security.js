import {useNavigate} from 'react-router-dom';

import {Button} from "components/Atom/Button";
import {Input, Label} from "components/Atom/Form";
import {Confirm, Confirm_head, Confirm_body, Confirm_foot} from "components/Organisms/Confirm";


const Security = (props) => {
  const navigate = useNavigate();

  
// 비밀번호 발송
function handlerFind(){
  const dialog = document.querySelector(".Dialog");
  const message = document.querySelector('.message');
  if(!(securityChcek() === false)){
    dialog.showModal();
    message.textContent = '인증번호를 확인하세요.';
  } else {
    dialog.showModal();
    message.textContent = '입력한 이메일로 임시 비밀번호가 발송되었습니다.';
  }
  


} 
  
      return(
        <div className="security">
          <div className="security-group">
            <Input 
              className={"form-input security-num"}
              placeholder={"인증번호"}
              type={"password"}
              defaultValue={props.value}
              required={true}
              onChange={props.onChange}
            />
            <Button 
              onClick={securityChcek}
              className={"btn fill-gray-49 radius-5 h-50"}
              classSpan={"txt-white"}
              text={"인증번호 확인"}
            />
            <p className="form-guide">
              인증번호가 발송되었습니다.<br />발급된 인증번호를 입력하세요.
            </p>
          </div>
          <div className="btn-group">
            <Button 
              className={"btn full fill-orange radius-20 h-50"}
              classSpan={"txt-white font-18"}
              text={"계정찾기"}
              onClick={handlerFind}
            >
            </Button> 
          </div>
        </div>
      
    )
 
}


    


//인증번호 체크
function securityChcek() {
  let GUIDE = document.querySelector(".form-guide");
  const SECURITY_NUM = document.querySelector(".security-num");

  if(SECURITY_NUM.value === '1234') {
    GUIDE.classList.remove('warning');
    SECURITY_NUM.readOnly = true;
    GUIDE.style.display = "none";
    return false;
  } else {
    GUIDE.textContent = "인증번호가 일치하지 않습니다."
    GUIDE.classList.add('warning');

  }
}



export {Security};