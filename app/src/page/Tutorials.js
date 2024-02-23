import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import {Button} from "components/Atom/Button";

import Big from "components/Organisms/Big";
import {Confirm, Confirm_head, Confirm_body, Confirm_foot} from "components/Organisms/Confirm";

function Tutorials() {
  const calendar_item = [
    {key: "2", title: "영단어 공부", className: "item-word", to: "/Word"},
    {key: "3", title: "챌린지 시험", className: "item-exam", to: "/Exam"},
    {key: "4", title: "챌린지 결과", className: "item-result", to: "/Result"},
  ]
  
  return(
    <div className="Main">
      <Big />
      <div className="inner20">
        <div className="list-group calendar">
          <Link to="/">
            <button className="btn">
              <p>이달의 출결 수</p>
              <strong><em>31</em>일차</strong>
            </button>
          </Link>
        </div>
        <ul className="list-group category">
          {calendar_item.map((item) =>(
            <li className={`item ${item.className}` }>
              <Link to={item.to}>
                <button
                  type="button"
                  className="btn"
                  value={item.value}
                >
                  {item.title}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Confirm className={"tutorials"}>
        
        <Confirm_head 
          title={"두벅이와 함께"} 
          close={true}
        />
        <Confirm_body 
          message={"출결관리를 통해 이달에 두벅이와 공부를 몇 번 했는지 알 수 있습니다. "} 
        />
        <Confirm_foot >
          <Button 
              className={"btn fill fill-grape-65 radius-20 h-30"}
              classSpan={"txt-white"}
              text={"다음"}
          />
        </Confirm_foot>
        
      </Confirm>

      <button onClick={openDialog}>소리함</button>
    </div>
  )
}


function openDialog(e) {
  const dialog = document.querySelector(".Dialog");
  dialog.showModal();
 }

export default Tutorials;
