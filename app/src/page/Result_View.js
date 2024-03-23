import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import {Select} from 'components/Atom/Select';

import {Header} from "components/Organisms/Header";
import Plating from "components/Organisms/Plating";

function Result_View() {
  const today_list = [
    {key: "1", answer: 'exist', verb: '존재하다', listen: "", my_answer: "", my_verb: '살아있다' , wrong: 'wrong'},
    {key: "2", answer: 'extreme', verb: '극단', listen: "", my_answer: "extremes", my_verb: '', wrong: 'wrong'  },
    {key: "3", answer: 'original', verb: '원래의', listen: "", my_answer: "ORIGINAL", my_verb: '존재하다' ,wrong: '' },
    {key: "4", answer: 'soon a after', verb: '곧이어', listen: "", my_answer: "exists", my_verb: '곧이어', wrong: '' }

  ]

  //option click
  const optionClick = (e) =>{
    let SELECT_BTN = document.querySelector(".select-btn");
    const target = e.target.value;
    SELECT_BTN.classList.remove('on');
    setIsSelected(target);
  }

  let [IsSelected, setIsSelected] = useState('전체');
  const OPTION_LIST = [
    {key: "1", value: "전체"},
    {key: "2", value: "정답만"},
    {key: "3", value: "오답만"}
  ]

  return(
    <div className="result">

      <Header
          title={"챌린지 결과"}
        />
      <div className="util inner20">
        <Select
          value={IsSelected}
          tit={IsSelected}
          onChange={handlerChange}
          onClick={selectClick}
          OP_LIST={OPTION_LIST}
          optionClick={optionClick}
        >
        </Select>
      </div>
      <section className="inner20">
        <ul className="index-group">
          {today_list.map((item) =>(
            <li>
              <div className="answer">
                <strong>{item.answer}</strong>
                <p>{item.verb}</p>
                <button className="volume">
                  {item.listen}
                  <i className="i-volume"></i>
                  <span className="visuallyhidden">{item.listen}</span>
                </button>
              </div>
              <div className={`my-answer ${item.wrong}`}>
                <strong>{item.my_answer}</strong>
                <p>{item.my_verb}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      
      <Plating />
    </div>
  )
}


//셀렉트 변경될때
function handlerChange(e){
  console.log('d');
}

//select toggle
function selectClick(e){
  e.target.classList.toggle('on');
}

export default Result_View;