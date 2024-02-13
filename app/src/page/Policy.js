
import {Header, Header_title, Header_logo} from "components/Organisms/Header";
import {Button, Btn_text,Btn_icon} from "components/Atom/Button";


function Policy() {
  return(
     <div className="Policy">
        <Header>
          <Header_title 
            title={"이용약관 동의"}
          />
        </Header>
        <div>
          약관동의 내용 컴포넌트 만들기 
          타이틀은 어카지음... 저것도 따로 스크리븥 해서 만들기. 
        </div>
        <div className="Buttons">
        <Button 
              className={"Btn full fill-orange radius-20 h-50"}
          >
            <Btn_text 
              className={"txt-white font-18"}
              text={"동의하기"}
            />
          </Button>
        </div>
     </div>
  )
}



export default Policy;