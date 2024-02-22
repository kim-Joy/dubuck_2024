import React, { useState } from 'react';
import {Button} from "components/Atom/Button";


function Confirm(props) {
  return(
     <dialog className="Dialog">
         <section className={`Confirm ${props.className}`}>
            {props.children}
         </section>
     </dialog>
  )
}
const Confirm_head = (props) =>{
   return(
      <div className="head">
         <h3>{props.title}</h3>
         {props.close === true ? "" : (
            <button className="close-btn Confirm-Close" onClick={closeDialog}><span className="visuallyhidden">닫기</span></button>
         )
         }
      </div>
   )
}

const Confirm_body = (props) => {
   return(
      <div className="body">
         <p className="message">{props.message}</p>
         </div>
   )
}

const Confirm_foot= (props) =>{
   return(
      <div className="foot">
         {props.children}
      </div>
   )
}

// 컨피그 닫기
function closeDialog(e) {
   const dialog = document.querySelector(".Dialog");
   dialog.close();
  }
 





export {Confirm, Confirm_head, Confirm_body, Confirm_foot};