import React, { useState } from 'react';

// button 
const Button = (props) => {
  
  
  return (
    <button 
      type="button"
      id={props.id}
      className={props.className} 
      onClick={props.onClick}
      disabled = {props.disabled}

    ><span className={props.classSpan}>{props.text}</span>
    </button>
  );
}

// button icon 조합
const ButtonIcon = (props) => {

  return (
    <button 
      type="button"
      id={props.id}
      className={props.className} 
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <span className={props.classSpan}>{props.text}</span>
      <i className={props.classI}><span className="visuallyhidden">아이콘</span></i>
    </button>
  );
}




export {Button , ButtonIcon};
