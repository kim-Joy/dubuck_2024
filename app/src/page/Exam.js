import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Input, Label} from "components/Atom/Form";
import {Button} from "components/Atom/Button";

import { Header } from 'components/Organisms/Header';
import Card from 'components/Organisms/Card';
import Screen from 'components/Organisms/Screen';
import {Confirm, Confirm_head, Confirm_body, Confirm_foot} from "components/Organisms/Confirm";
import FinshConfirm from "components/Organisms/FinshConfirm"

const Exam =(props) => {
  const finishNext = document.querySelector('#finish_Next');


  //finish screen
  function finishScreen(){  
    const LAYER = document.querySelector('.layer');
    const layerStart = document.querySelector('.layer .screen.start');
    const layerFull = document.querySelector('.layer .screen.full');
      LAYER.classList.add('active');
      layerFull.classList.remove('disNone');
      layerStart.classList.add('disNone');
  }

  
  //layer screen
  function layerClose(){
    const LAYER = document.querySelector('.layer');
    LAYER.classList.remove('active');
  }


  return (
    <div className="exam">
      <Header 
        logo={true}
      />
      <Card />
      <div className="btn-group horizontal inner20">
      <Button
          className={"btn fill-grape-65 radius-20 h-40"}
          classSpan={"txt-white font-16"}
          text={"Prev"}
        />
        <Button
          onClick={finishScreen}
          id={"finish_Next"}
          className={"btn fill-grape-65 radius-20 h-40"}
          classSpan={"txt-white font-16"}
          text={"Next"}
        />
      </div>
      
      <div className="layer active">
        <Screen
          className={'start'}
          desc={'오늘은'}
          desc_two={'챌린지 시작해볼까'}
        >
          <Button
            onClick={layerClose}
            className={"btn full fill-white radius-20 h-50"}
            classSpan={"txt-orange font-18"}
            text={"START"}
          />
        </Screen>

        <Screen
          className={'full disNone'}
          title={`수고하셨습니다. 
          오늘도 힘차게 두벅`}
        >
          <Button
            
            className={"btn full border border-white radius-20 h-50"}
            classSpan={"txt-white font-18"}
            text={"단어 복습"}
          />
          <Button
           
            className={"btn full fill-white radius-20 h-50"}
            classSpan={"txt-orange font-18"}
            text={"챌린지 도전"}
          />
        </Screen>

        <div className="dim"></div>
      </div>


      <FinshConfirm />
    </div>
  )
} 




export default Exam;


/*


        <Screen
          className={'full'}
          title={`수고하셨습니다. 
          오늘도 힘차게 두벅`}
        >
          <Button
            
            className={"btn full border border-white radius-20 h-50"}
            classSpan={"txt-white font-18"}
            text={"단어 복습"}
          />
          <Button
           
            className={"btn full fill-white radius-20 h-50"}
            classSpan={"txt-orange font-18"}
            text={"챌린지 도전"}
          />
        </Screen>




const start = document.querySelector('.screen.start .desc');
  const lineBreak = document.createElement('br');
  const input = document.createElement('input');
  input.type ="number";
  input.className = 'num';
  input.value = '';
  input.placeholder = '?';

  start.appendChild(input);
  start.appendChild(document.createTextNode(' 단어'));
  start.appendChild(lineBreak);
  start.appendChild(document.createTextNode('공부 해볼까?'));


*/