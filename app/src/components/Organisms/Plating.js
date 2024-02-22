import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {Button} from "components/Atom/Button";

function Plating() {
  const plating_list = [
    {key: "1", name: "삭제", className: 'trash' },
    {key: "2", name: "단어 복습", className: 'word' },
    {key: "3", name: "챌린지 재 도전", className: 'history' }

  ]

  return(
    <div className="plating ">
      <div className="plating-btns">
        <button type="button" className="plus">
          <span className="visuallyhidden">더보기</span>
        </button>
        <ul className="plating-list">
            {plating_list.map((item) =>(
            <li>
              {item.name}
              <button className={item.className}>
                <span className="visuallyhidden">{item.name}</span>
              </button>
            </li>
            ))}
        </ul> 
      </div>
      <div className="dim"></div>  
    </div>
  )
}

export default Plating;