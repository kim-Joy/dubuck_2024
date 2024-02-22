import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import {Button} from "components/Atom/Button";

import Big from "components/Organisms/Big";
import {Confirm, Confirm_head, Confirm_body, Confirm_foot} from "components/Organisms/Confirm";

function Main() {
  const calendar_item = [
    {key: "2", title: "영단어 공부", className: "item-word", to: "/"},
    {key: "3", title: "챌린지 시험", className: "item-exam", to: "/"},
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

      <Confirm className={"modal"}>
        
        <Confirm_head 
          title={"두벅이 소리함"} 
          close={true}
        />
        <Confirm_body 
          message={"불편한점, 바라는 점등 다양한  의견을 들려주세요!"} 
        />
        <Confirm_foot >
          <Link to="/Suggestion">
          <Button 
              className={"btn border border-whtie radius-20 h-50"}
              classSpan={"txt-white"}
              text={"충고하기"}
          />
          </Link>
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

export default Main;