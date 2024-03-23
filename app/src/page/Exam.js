import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Input, Label} from "components/Atom/Form";
import {Button} from "components/Atom/Button";

import { Header } from 'components/Organisms/Header';
import Card from 'components/Organisms/Card';
import Screen from 'components/Organisms/Screen';
import {Confirm, Confirm_head, Confirm_body, Confirm_foot} from "components/Organisms/Confirm";


const Exam =() => {
  const DESC = `오늘은  문항으로 /n 챌린지 시작해볼까?`
  return (
    <div className="exam">
      <Header 
        logo={true}
      />
      <Card />
      <div className="btn-group horizontal">
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
      
      <div className="layer active">
        <Screen
          className={'start'}
          desc={`${DESC}`}
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

      <Confirm className={"modal"}>
        
        <Confirm_head 
          title={"잠깐! /n 아직 풀지 않은 문제들이 있습니다."} 
        />
        <Confirm_body 
          message={"지금까지 푼 단어들은 저장 및 채점에 포함되지 않으므로, 처음부터 시작 하셔야 합니다. 그래도 나가시겠습니까?"} 
        />
        <Confirm_foot >
          <Link to="/Main">
          <Button 
              className={"btn border border-whtie radius-20 h-50"}
              classSpan={"txt-white"}
              text={"공부끝내기"}
          />
          </Link>
          <Button 
              className={"btn fill-whtie radius-20 h-50"}
              classSpan={"txt-blue"}
              text={"아직 더풀래"}
          />
        </Confirm_foot>
        
      </Confirm>
    </div>
  )
} 

function layerClose(){
  const LAYER = document.querySelector('.layer');
  LAYER.classList.remove('active');

}

function wordExit(){
  console.log('sss')
}

export default Exam;