import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import {Header} from "components/Organisms/Header";
import SwipeToSlide from "components/Organisms/Slide";

function Result() {
  const record_list = [
    {key: "1", data: "2023.04.27", num: "100", answer: "100", wrong: "0", to: "/Result_View", score: true, perfect: "perfect"},
    {key: "2", data: "2023.04.27", num: "99", answer: "5", wrong: "5", to: "/Result_View", score: true, perfect: ""},
    {key: "3", data: "2023.04.27", num: "98", answer: "2", wrong: "8", to: "/Result_View", score: true, perfect: ""},
    {key: "4", data: "2023.04.27", num: "97", answer: "70", wrong: "0", to: "/Result_View", score: true, perfect: "perfect"}
  ]


  return(
    <div className="result">
      <Header
          title={"챌린지 결과"}
        />
      <section className="inner20">
        <h3>Today</h3>
        <div className="list-group character today">
          <SwipeToSlide />
        </div>
      </section>
 
      <section className="inner20">
        <h3>Record</h3>
        <ul className="list-group character record">
          {record_list.map((item) =>(
            <li className="item">
              <Link to={item.to}>
                <button className="btn">
                  <div className="count-group"> 
                    <p className="data">{item.data}</p>
                    <strong className="num">{item.num}</strong>
                  </div>
                  <p className="perfect">{item.perfect}</p>
                  <div className="score">
                    <dl>
                      <dt>정답수</dt>
                      <dd>{item.answer}</dd>
                    </dl>
                    <dl>
                      <dt>오답수</dt>
                      <dd>{item.wrong}</dd>
                    </dl>
                  </div>
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}



export default Result;