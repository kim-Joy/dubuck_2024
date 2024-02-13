import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


/* logo header */
function Header({children}){
  return(
    <header className="Header">
      {children}
    </header>
  )
}

function Header_logo(){
  return(
    <h1>Logo</h1>
  )
}


function Header_title(props) {
  const navigate = useNavigate();  

  const handleBack = () => {
    navigate(-1); 
  }; 

  return(
    <>
      <button className="hd-back" onClick={handleBack}>
        <span className="visuallyhidden">뒤로가기</span>
      </button>
      <h2>{props.title}</h2>
    </>
  )

}


export {Header, Header_title, Header_logo} ;
