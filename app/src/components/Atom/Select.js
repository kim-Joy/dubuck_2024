import React, { useState } from 'react';


//select custom : email
const SelectEmail = (props) => {
  
  const EMAIL_DOT = [
    {key: "1", value: "naver.com"},
    {key: "2", value: "daum.com"},
    {key: "3", value: "gmail.com"},
    {key: "4", value: "nate.com"},
    {key: "5", value: "yahoo.com"}
  ]
  let [IsSelected, setIsSelected] = useState('선택하세요');
  let SELECT_BTN = document.querySelector(".select-btn");
  
  //option click
  const optionClick = (e) =>{
    let SELECT_BTN = document.querySelector(".select-btn");
    const EMAIL_ETC = document.querySelector("#email_etc");
    const target = e.target.value;
    SELECT_BTN.classList.remove('on');
    setIsSelected(target);
  }

  //셀렉트 변경될때
  function handlerChange(e){
    console.log('d');
  }
 
  return(
    <div class="select email">
        <button 
          type="button" 
          id={props.id}
          className="select-btn"
          onChange={handlerChange}
          onClick={selectClick}
          value={IsSelected}
        >{IsSelected}
        <i className="arrow"><span className="visuallyhidden">화살표</span></i>
        </button>
        <ul className="option">
          {EMAIL_DOT.map((item) => (
            <li>
              <button 
                type="button" 
                className="option-btn"
                key={item.key}
                onClick={optionClick}
                value={item.value}
              >{item.value}</button>
            </li>           
           ))}
          <li>
            <button 
              type="button"
              className="option-btn etc"
              value={"직접 입력"}
              onClick={optionClick}
            >
              직접 입력
            </button>
          </li>
        </ul>
    </div>
  )
}

 
//select toggle
function selectClick(e){
  e.target.classList.toggle('on');
}



export {SelectEmail};
