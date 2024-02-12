import PropTypes from "prop-types";
import React, { useState } from 'react';

// label
const Label =(props) => {
  return(
    <label
    className={props.className}
    htmlFor={props.htmlFor}>
      {props.text}
    </label>
  )
}

// input
const Input =(props) => {
  return(
    <input 
      id={props.id}
      name={props.name}
      value={props.value}
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      required = {props.required}
      disabled = {props.disabled}
      onChange = {props.onChange}
    />
  )
}

// CheckBox
const CheckBox =(props) => {
  const [ischeked, setischeked] = useState(false);

  //체크박스 선택 ,해제
  function checkHandled(e) {
    //setischeked("true") = !setischeked("false");
    console.log(e.target)
    e.target = setischeked(true);
    if(ischeked == true) {
      e.target = setischeked(false);
    } else {
      e.target = setischeked(true);
    }
  }

  return(
    <div className="checkbox">
      <input 
        id={props.InputId} 
        type="checkbox"
        className="check-input"
        checked={ischeked}
      />
      <label
        id={props.LabelId}
        name={props.name}
        className="check-label"
        htmlFor={props.htmlFor}
        onClick={checkHandled}
      >
        <span>{props.text}</span>
        <i></i>
      </label>
    </div>
  )
}


//select custom : email
const SelectEmail = (props) => {
  const EmailOption = [
    {key:1, value: "naver.com"},
    {key:2, value: "daum.com"},
    {key:3, value: "gmail.com"},
    {key:4, value: "nate.com"},
    {key:5, value: "yahoo.com"}
  ]

  const [isSelected, setisSelected] = useState('선택하세요.');
  
  //셀렉트 열고 닫기
  function showHandler(e){
    e.target.classList.toggle('on');
  }
  
  //옵션 선택하기
  function optionClick(e){
    const select = document.querySelector(".select-btn");
    const target = e.target.value;
    
    select.classList.remove('on');
    setisSelected(target);
    //setisSelectedEtc("직접선택");
    console.log(target);
  }



  return(
    <div class="select email">
        <button 
          type="button" 
          id={props.id}
          className="select-btn"
          value={isSelected}
          onChange={props.onChange}
          onClick={showHandler}
        >{isSelected}
        <i className="arrow"><span className="visuallyhidden">화살표</span></i>
        </button>
        <ul className="option">
          {EmailOption.map((item) => (
            <li>
              <button 
                type="button" 
                className="option-btn"
                key={item.key}
                value={item.value}
                onClick={optionClick}
              >{item.value}</button>
            </li>           
           ))}
          <li>
            <label 
              htmlFor="email_etc" 
              className="option-btn"
              value={"직접입력"}
              onClick={emailHandler}
            >
              직접입력
            </label>
          </li>
        </ul>
    </div>
  )
}

function emailHandler(e){
  console.log('dd');
  document.querySelector('.select-btn').classList.remove('on');
 // setisEtcdisable(false);

}

export {Input , Label, CheckBox, SelectEmail};