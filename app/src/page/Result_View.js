import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import {Header} from "components/Organisms/Header";
import {SelectEmail} from "components/Atom/Select";

function Result_View() {
  const today_list = [
    {key: "1", answer: 'exist', verb: '존재하다', listen: "..", my_answer: "exists", my_verb: '존재하다'  }
  ]

  return(
    <div className="result">
      <Header
          title={"챌린지 결과"}
        />
      <div className="sort">
        <SelectEmail />
      </div>
      <section className="inner20">
        <ul className="list-group">
          {today_list.map((item) =>(
            <li>
              <Link to={item.to}>
                <div className="answer">
                  <strong>{item.answer}</strong>
                  <p>{item.verb}</p>
                  <button>{item.listen}</button>
                </div>
                <div className="my_answer">
                  <strong>{item.my_answer}</strong>
                  <p>{item.my_verb}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <div className="sticky">
          <button type="button">
            플러스
          </button>
      <ul className="">
        <li>
          <button>
            채린지 재 도전
            <span>아이콘</span>
          </button>
        </li>
      </ul>  
      <div classNmae="dim"></div>  
      </div>

    </div>
  )
}

export default Result_View;