import React, { useState } from 'react';

// button 
const Button = (props, {children}) => {

  return(
    <button 
      className={props.className}
      type="button"
      id={props.id}
      onClick={props.onClick}
      disabled = {props.disabled}
    >
      {props.icon === true && (
        <i className="arrow"><span className="visuallyhidden">아이콘</span></i>
      )} 
      <span 
      className={props.classSpan}
      >{props.text}
      </span>
    </button>

  )

}


export {Button};
