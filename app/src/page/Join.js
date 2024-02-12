import { Link } from 'react-router-dom';

import {HeaderTitle} from "components/Organisms/Header";
import {Button} from "components/Atom/Button";
import {Input, Label, CheckBox, SelectEmail} from "components/Atom/Form";
import Policy from 'page/Policy';


  //약관동의 체크 
 // const allCheck = document.querySelector('#all_check');
function Join() {
  
  return(
     <div className="Join">
        <HeaderTitle 
          title={"회원가입"}
        />
        <form action="">
          <ul className="form inner20">
            <li className="form-item horizontal">
              <div>
                <Label 
                  className={"form-label"}
                  htmlFor={"user_first"}
                  text={"성"}
                />
                <Input
                  id={"user_first"}
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
                <SelectEmail 
                  text={"선택하세요."}
                />
              </div>
              <Input
                  className={"form-input full"}
                  type={"text"}
                  plceholder={"직접 입력해주세요."}
                />
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
                className={"form-input"}
                type={"password"}
                required={true}
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
              />
          </div>
        </form>
     </div>
  )
}


export default Join;