import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';


/* logo header */
function Header(props){
  const navigate = useNavigate();  

  const handleBack = () => {
    navigate(-1); 
  }


  return(
    <header className="Header">
     {props.logo === true ?
      <Link to="/">
        <h1 className="logo">
          <span className="visuallyhidden">dubuck</span>
        </h1>
      </Link> 
      : (
        <button className="hd-back" onClick={handleBack}>
          <span className="visuallyhidden">뒤로가기</span>
        </button>
      )
    } 
    <h2>{props.title}</h2>
    </header>
  )
}


export {Header} ;
