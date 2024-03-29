import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {Input, Label} from "components/Atom/Form";
import {Button} from "components/Atom/Button";
import {Confirm, Confirm_head, Confirm_body, Confirm_foot} from "components/Organisms/Confirm";



function FinshConfirm() { 


  return(
     <div className="Finish-confirm">
        <Confirm className={"modal"}>
        
        <Confirm_head 
          title={`잠깐! 아직 풀지 않은 문제들이 있습니다.`}
          close={true} 
        />
        <Confirm_body 
          message={"지금까지 푼 단어들은 저장 및 채점에 포함되지 않으므로, 처음부터 시작 하셔야 합니다. 그래도 나가시겠습니까?"} 
        />
        <Confirm_foot>
          <div className="btn-group horizontal">
            <Link to="/Main">
            <Button 
                className={"btn border border-white radius-20 h-50"}
                classSpan={"txt-white"}
                text={"공부끝내기"}
            />
            </Link>
            <Button 
                className={"btn fill-white radius-20 h-50"}
                classSpan={"txt-grape-deep"}
                text={"아직 더풀래"}
            />
          </div>
        </Confirm_foot>
        
      </Confirm>
     </div>
  )
}


export default FinshConfirm;
