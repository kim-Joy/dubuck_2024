
import {Header, HeaderTitle} from "components/Organisms/Header";
import {Button, ButtonIcon } from "components/Atom/Button";


function Marketing() {
  return(
     <div className="Marketing">
        <HeaderTitle 
          title={"마케팅약관 동의"}
        />
        <div>
          약관동의 내용 컴포넌트 만들기 
          타이틀은 어카지음... 저것도 따로 스크리븥 해서 만들기. 
        </div>
        <div className="Buttons">
          <Button 
              className={"Btn full fill-orange radius-20 h-50"}
              classSpan={"txt-white font-18"}
              text={"동의하기"}
            />
        </div>
     </div>
  )
}



export default Marketing;