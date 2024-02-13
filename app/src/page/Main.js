import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import Big from "components/Organisms/Big";

function Main() {
  const calendar_item = [
    {},
    {key: "1", title: "31일차", className: "item-calendar", to: "/"},
    {key: "2", title: "영단어 공부", className: "item-word", to: "/"},
    {key: "3", title: "챌린지 시험", className: "item-exam", to: "/"},
    {key: "4", title: "챌린지 결과", className: "item-result", to: "/Result"},

  ]
  return(
    <div className="Main">
      <Big />
      <ul className="list-group calendar inner20">
        {calendar_item.map((item) =>(
          <li className="item">
            <Link to={item.to}>
              <button
                type="button"
                className={item.className}
                value={item.value}
              >
                <strong>{item.title}</strong>
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Main;