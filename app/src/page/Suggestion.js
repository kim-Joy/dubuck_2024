import React, { useState } from 'react';

import {Input, Label} from "components/Atom/Form";
import {Button} from "components/Atom/Button";


import {Header} from "components/Organisms/Header";


function Suggestion() {
  return(
     <div className="suggestion">
      <Header 
        logo={true}
      />
      <section>
        <h3>소중한 의견을 들려주세요!</h3>
        <p>사용하시면서 불편한 점이 있으셨나요?<br />
           혹은, 이런 부분을 개선됐으면 좋겠다 하는 점이 있으셨나요?<br/>
           다양한 의견을 들려주세요.
      </p>
      <div className="rating">
        <input />
        <label>
          <span>다신 사용 안한다.</span>
        </label>
      </div>
      </section>
      <section className="inner20">
        <h3>불편 및 개선 내용</h3>
        <textarea placeholder='불편했거나 개선하길 원하는 내용을 적어주세요.'>
        </textarea>
      </section>
      <div className="btn-group inner20">
        <Button
          className={"btn full fill-orange radius-20 h-50"}
          classSpan={"txt-white font-18"}
          text={"충고하기"}
        >
        </Button >
      </div>
    </div>
  )
}





export default Suggestion;