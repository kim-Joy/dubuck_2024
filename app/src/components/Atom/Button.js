import React, { useState } from 'react';

// button 
const Button = (props, {children}) => {
  return (
    <button 
      type="button"
      id={props.id}
      className={props.className} 
      onClick={props.onClick}
      disabled = {props.disabled}
    >
    {props.children}
    </button>
  );
}

const Btn_text = (props) => {
  return(
    <span 
      className={props.className}
    >{props.text}
    </span>
  )
}

// button icon 조합
const Btn_icon = (props) => {

  return (
      <i 
        className={props.className}
      >
        <span className="visuallyhidden">아이콘</span>
      </i>
  );
}



export {Button, Btn_text,Btn_icon};
