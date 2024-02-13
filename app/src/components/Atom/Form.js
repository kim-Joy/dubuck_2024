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
      defaultValue={props.value}
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
        defaultValue={props.value}
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


export {Input , Label, CheckBox};