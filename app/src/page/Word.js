import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Input, Label} from "components/Atom/Form";
import {Button} from "components/Atom/Button";

import { Header } from 'components/Organisms/Header';
import Card from 'components/Organisms/Card';
import Screen from 'components/Organisms/Screen';
import FinshConfirm from "components/Organisms/FinshConfirm"

const Word =() => {

    const start = document.querySelector('.screen.start .desc');
    const lineBreak = document.createElement('br');
    const input = document.createElement('input');
    Object.assign(input, {
      type: 'number', 
      className: 'num', 
      value: '',
      placeholder: '?'
    });

    start.textContent = '오늘은 ';
    start.appendChild(input);
    start.appendChild(document.createTextNode(' 문항으로'));
    start.appendChild(lineBreak);
    start.appendChild(document.createTextNode('챌린지 시작해볼까?'));

  return (
    <div className="word">
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
          className={"btn fill-grape-65 radius-20 h-40"}
          classSpan={"txt-white font-16"}
          text={"Next"}
        />
      </div>
      
      <div className="layer active ss">
        <Screen
          className={'start'}
          desc={''}
        >
          <Button
            onClick={layerClose}
            className={"btn full fill-white radius-20 h-50"}
            classSpan={"txt-orange font-18"}
            text={"START"}
          />
        </Screen>
        <div className="dim"></div>
      </div>
      
      <FinshConfirm />
    </div>
  )
} 

function layerClose(){
  const LAYER = document.querySelector('.layer');
  LAYER.classList.remove('active');

}

export default Word;