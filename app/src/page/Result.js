import { Link } from 'react-router-dom';
import React, { useState } from 'react';


function Result() {
  const card_list = [
    {key: "1", data: "2023.04.27", num: "100", answer: "100", wrong: "20", to: "/", score: true}
  ]
  return(
    <div className="Result">
      <ul className="list-group inner20">
        {card_list.map((item) =>(
          <li className="item">
            <Link to={item.to}>
              <div className=""> 
                <p className="data">{item.data}</p>
                <strong className="num">{item.num}</strong>
              </div>
              <p classNAme="perfect">{item.perfect}</p>
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
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Result;