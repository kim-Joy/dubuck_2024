import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import Big from "components/Organisms/Big";

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
            <button 
              className="btn"
            >
              <p>이달의 출결 수</p>
              <strong>31<em>일차</em></strong>
            </button>
          </Link>
        </div>
        <ul className="list-group category inner20">
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
    </div>
  )
}

export default Main;