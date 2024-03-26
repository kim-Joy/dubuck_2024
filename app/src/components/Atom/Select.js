import React, { useState } from 'react';


const Select = (props, {children}) => {

  return(
    <div className={`select ${props.selectClass}`}>
      <button
        type="button"
        id={props.id}
        className={'select-btn'}
        onChange={props.onChange}
        onClick={selectClick}
        value={props.value}
        >{props.tit}
        <i clasName="arrow">
          <span className="visuallyhidden">화살표</span>
        </i>
      </button>
      <ul className="option">
        {props.OP_LIST.map((item) => (
            <li>
              <button 
                type="button" 
                className={`option-btn ${item.OptionClass}`}
                key={item.key}
                onClick={props.optionClick}
                value={item.value}
              >{item.value}</button>
            </li>           
           ))}
      </ul>
    </div>
  )

}



//select toggle
function selectClick(e){
  e.target.classList.toggle('on');
}


export {Select};
