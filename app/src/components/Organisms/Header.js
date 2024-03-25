import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';


/* logo header */
function Header(props){
  const navigate = useNavigate();  

  const handleBack = () => {
    navigate(-1); 
  }
  
  const currentURL = window.location.pathname;
  const pathSegments = currentURL.split('/');
  const currentPage = pathSegments[pathSegments.length - 1];
  const email_key = sessionStorage.getItem("EMAIL_KEY");
  const email_pw = sessionStorage.getItem("EMAIL_PW");

  let linkTo;
  if(email_key === null && email_pw === null) {
    linkTo = '/';
  } else if(currentPage === 'Word' || currentPage === 'Exam' ){
    linkTo = 'popup';
  } else {
    linkTo = '/Main';
  }

  //시험종료 팝업 노출 
  const openDialog = () => {
    const dialog = document.querySelector(".Dialog");
    dialog.showModal();
  };

  return(
    <header className="Header">
     {props.logo === true ? (
      linkTo === 'popup' ? (
        <button 
          type="button" 
          onClick={openDialog}
        >
          <h1 className="logo">
            <span className="visuallyhidden">dubuck</span>
          </h1>
        </button>
      ) : (
      <Link to={linkTo}>
        <h1 className="logo">
          <span className="visuallyhidden">dubuck</span>
        </h1>
      </Link>
    )
  ) : (
    <button className="hd-back" onClick={handleBack}>
      <span className="visuallyhidden">뒤로가기</span>
    </button>
  )}
    <h2>{props.title}</h2>
    </header>
  )
}


  


export {Header} ;
