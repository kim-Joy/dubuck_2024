import React, { useState } from 'react';
import {Button, ButtonIcon} from "components/Atom/Button";

function Confirm(props) {
  return(
     <dialog className="Dialog">
         <section className="Confirm">
            <div className="head">
               <h3>{props.title}</h3>
               <button className="close-btn Confirm-Close" onClick={closeDialog}><span className="visuallyhidden">닫기</span></button>
            </div>
            <div className="body">
            <p className="desc">{props.desc}</p>
            </div>
            <div className="foot">
               <Button 
                  className={"Btn fill-orange radius-20 h-40"}
                  classSpan={"txt-white"}
                  text={"확인"}
               />
               <Button 
                  className={"Btn fill-gray-f1 radius-20 h-40"}
                  classSpan={"txt-gray-68"}
                  text={"취소"}
                  onClick={closeDialog}
               />
            </div>
         </section>
     </dialog>
  )
}


// 컨피그 닫기
function closeDialog(e) {
   const dialog = document.querySelector(".Dialog");
   dialog.close();
  }
 





export default Confirm;