import React, { useState } from 'react';
import PropTypes from "prop-types";
import {Button, ButtonIcon } from "components/Atom/Button";
import {Input, Label, CheckBox, Select} from "components/Atom/Form";

const Security = (props) => {
  const [isdisabled, setisDisable] = useState(false);
  
  //인증번호 노출
  function securityHandler() {
    const Guide = document.querySelector("#securityGuide");
    const num = document.querySelector("#securityNum").value;
    if(num == '1234') {
      setisDisable(true);
      Guide.classList.remove('warning');
      Guide.style.display = "none";
    } else {
      console.log('false');
      Guide.textContent = "인증번호가 일치하지 않습니다."
      Guide.classList.add('warning');
    }
  }
    return(
      <div className="security-group">
          <Input 
            className={"form-input"}
            id={"securityNum"}
            placeholder={"인증번호"}
            type={"password"}
            required={true}
            disabled = {isdisabled}
          />
          <Button 
            onClick={securityHandler}
            id={"securityBtn"}
            className={"Btn fill-gray-49 radius-5 h-50"}
            classSpan={"txt-white"}
            text={"인증번호 확인"}
            disabled = {isdisabled}
          />
          <p className="form-guide" id="securityGuide">
            인증번호가 발송되었습니다.<br />발급된 인증번호를 입력하세요.
          </p>
      </div>
    )
 
}






export default Security;