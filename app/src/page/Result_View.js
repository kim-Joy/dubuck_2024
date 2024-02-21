import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import {SelectEmail} from "components/Atom/Select";

import {Header} from "components/Organisms/Header";
import Plating from "components/Organisms/Plating";


function Result_View() {
  const today_list = [
    {key: "1", answer: 'exist', verb: '존재하다', listen: "..", my_answer: "exists", my_verb: '존재하다'  },
    {key: "2", answer: 'exist', verb: '존재하다', listen: "..", my_answer: "exists", my_verb: '존재하다'  },
    {key: "3", answer: 'exist', verb: '존재하다', listen: "..", my_answer: "exists", my_verb: '존재하다'  },
    {key: "4", answer: 'exist', verb: '존재하다', listen: "..", my_answer: "exists", my_verb: '존재하다'  }

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
        <ul className="index-group">
          {today_list.map((item) =>(
            <li>
              <Link to={item.to}>
                <div className="answer">
                  <strong>{item.answer}</strong>
                  <p>{item.verb}</p>
                  <button>{item.listen}</button>
                </div>
                <div className="my-answer">
                  <strong>{item.my_answer}</strong>
                  <p>{item.my_verb}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      
      <Plating />
    </div>
  )
}

export default Result_View;