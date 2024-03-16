import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';


/* logo header */
function Header(props){
  const navigate = useNavigate();  

  const handleBack = () => {
    navigate(-1); 
  }

  // 로그인 여부 확인하여 로고 클릭시 페이지 전환
  function loginMain(){
    
  const email_key = window.sessionStorage.getItem("EMAIL_KEY");
  const email_pw = window.sessionStorage.getItem("EMAIL_PW");

    if (email_key === null && email_pw === null) {

      console.log('로그닝 불가능');
      props.to ="/Login";
    } else {
      console.log('로그인 가능')
      props.to ="/Main";

    }
  }


  return(
    <header className="Header">
     {props.logo === true ?
      <Link to={props.to}>
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
