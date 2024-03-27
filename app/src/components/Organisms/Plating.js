import {Link, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import {Button} from "components/Atom/Button";
import {Confirm, Confirm_head, Confirm_body, Confirm_foot} from "components/Organisms/Confirm";


function Plating() {
  const plating_list = [
    {key: "1", name: "삭제", className: 'trash', onClick: TrashHandler},
    {key: "2", name: "단어 복습", className: 'word', onClick: WordHandler},
    {key: "3", name: "챌린지 재 도전", className: 'history', onClick: ExamHandler}
  ]

 

  const navigate = useNavigate();

  function TrashHandler(){ 
    let dialog = document.querySelector(".Dialog");
    let message = document.querySelector('.message');
    let text = document.querySelector('.success');  

    dialog.showModal();
    message.textContent = `
    챌린지 결과를
    삭제하시겠습니까?`;
    text.textContent = `삭제`;
  }
  
  function WordHandler(){
    let dialog = document.querySelector(".Dialog");
    let message = document.querySelector('.message');
    let text = document.querySelector('.success'); 
    
    dialog.showModal();
    message.textContent = `
    영어 단어를
    복습하시겠습니까?`;
    text.textContent = `복습`;
  }
  
  function ExamHandler(){
    let dialog = document.querySelector(".Dialog");
    let message = document.querySelector('.message');
    let text = document.querySelector('.success'); 
    
    dialog.showModal();
    message.textContent = `
    다시 한번
    재 도전하시겠습니까?`;
    text.textContent = `재 도전`;
  }

  
  //컨피그 닫기
  function closeDialog(e) {
    const dialog = document.querySelector(".Dialog");
    dialog.close();
    platingLayerHide();
  }

  function handlerLink(){
    let text = document.querySelector('.success').textContent; 
    if(text === '재 도전') {
      navigate('/Exam');
    } else if(text === '복습') {
      navigate('/Word');
    } else if(text === '삭제') {
      navigate('/Result');
    }
  }
    

  return(
    <div className="plating">
      <div className="plating-btns">
        <button 
          type="button" 
          className="plus" 
          onClick={platingLayerShow}
        >
          <span className="visuallyhidden">더보기</span>
        </button>
        <ul className="plating-list">
            {plating_list.map((item) =>(
            <li>
              {item.name}
              <button 
                type="button"
                className={item.className}
                onClick={item.onClick}
              >
                <span className="visuallyhidden">{item.name}</span>
              </button>
            </li>
            ))}
        </ul> 
      </div>
      <div className="dim" onClick={platingLayerHide}></div>  

      <Confirm>
          <Confirm_body message={''} />
          <Confirm_foot>
            <div className="btn-group horizontal">
              <Button 
                className={"btn full fill-orange radius-20 h-40"}
                classSpan={"txt-white font-14 success"}
                onClick={handlerLink}
                text={''}
              />
              <Button 
                className={"btn full fill-gray-f1 radius-20 h-40"}
                classSpan={"txt-graye-68 font-14"}
                onClick={closeDialog}
                text={"취소"}
              />
            </div>
          </Confirm_foot>
        </Confirm>
    </div>
  )
}



function platingLayerShow(){
  const platingLayer = document.querySelector('.plating');
  platingLayer.classList.toggle('current');

  
}


function platingLayerHide(){
  const platingLayer = document.querySelector('.plating');
  platingLayer.classList.remove('current');
}




export default Plating;



