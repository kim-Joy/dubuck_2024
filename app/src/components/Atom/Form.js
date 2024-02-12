import React, { useState } from 'react';

const SELECT_BTN = document.querySelector(".select-btn");

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
    
let [IsValue, setIsValue] = useState('');
let [IsDisabled, setIsDisabled] = useState(false);
let ValueChange = (e) => {
  setIsValue(e.target.value);
}

  return(
    <input 
      id={props.id}
      name={props.name}
      defaultValue={IsValue}
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      required = {props.required}
      disabled = {IsDisabled}
      onChange = {ValueChange}
    />
  )
}

// CheckBox
const CheckBox =(props) => {
  let [IsChecked, setIsChecked] = useState(false);

  //체크박스 선택 ,해제
  function check(e) {
    console.log(e.target)
    e.target = setIsChecked(true);
    if(IsChecked === true) {
      e.target = setIsChecked(false);
    } else {
      e.target = setIsChecked(true);
    }
  }

  return(
    <div className="checkbox">
      <input 
        id={props.InputId} 
        type="checkbox"
        className="check-input"
        checked={IsChecked}
      />
      <label
        id={props.LabelId}
        name={props.name}
        className="check-label"
        htmlFor={props.htmlFor}
        onClick={check}
      >
        <span>{props.text}</span>
        <i></i>
      </label>
    </div>
  )
}


//select custom : email
const SelectEmail = (props) => {

  const EMAIL_DOT = [
    {key: "1", defaultValue: "naver.com"},
    {key: "2", defaultValue: "daum.com"},
    {key: "3", defaultValue: "gmail.com"},
    {key: "4", defaultValue: "nate.com"},
    {key: "5", defaultValue: "yahoo.com"}
  ]
  const [IsSelected, setIsSelected] = useState('선택하세요.');

  //option click
  function optionClick(e){
    const target = e.target.value;
    
    SELECT_BTN.classList.remove('on');
    setIsSelected(target);
  }
 
  return(
    <div class="select email">
        <button 
          type="button" 
          id={props.id}
          className="select-btn"
          onChange={props.onChange}
          onClick={selectClick}
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
                defaultValue={item.value}
                onClick={optionClick}
              >{item.defaultValue}</button>
            </li>           
           ))}
          <li>
            <label 
              htmlFor="email_etc" 
              className="option-btn"
              defaultValue={"직접입력"}
              onClick={email_etc}
            >
              직접입력
            </label>
          </li>
        </ul>
    </div>
  )
}

 
  //select toggle
  function selectClick(e){
    e.target.classList.toggle('on');
  }

  //Email 직접입력 
function email_etc(){
  SELECT_BTN.classList.remove('on');
}

export {Input , Label, CheckBox, SelectEmail};