import {Button} from "components/Atom/Button";
import {Input, Label} from "components/Atom/Form";



const Security = (props) => {

      return(
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
            className={"Btn fill-gray-49 radius-5 h-50"}
            classSpan={"txt-white"}
            text={"인증번호 확인"}
          />
          <p className="form-guide">
            인증번호가 발송되었습니다.<br />발급된 인증번호를 입력하세요.
          </p>
      </div>
    )
 
}


    


//인증번호 체크
function securityChcek() {
  let GUIDE = document.querySelector(".form-guide");
  const SECURITY_NUM = document.querySelector(".security-num").value;

  if(SECURITY_NUM === '1234') {
    GUIDE.classList.remove('warning');
    GUIDE.style.display = "none";
  } else {
    console.log('false');
    GUIDE.textContent = "인증번호가 일치하지 않습니다."
    GUIDE.classList.add('warning');
  }
}




export {Security};