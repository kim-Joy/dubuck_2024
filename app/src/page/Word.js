import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Input, Label} from "components/Atom/Form";
import {Button} from "components/Atom/Button";

import { Header } from 'components/Organisms/Header';
import Card from 'components/Organisms/Card';
import Screen from 'components/Organisms/Screen';

const Word =() => {
  const DESC = `오늘의 문항으로 /n 챌린지 시작해볼까?`
  return (
    <div className="word">
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
            className={"btn full fill-white radius-20 h-50"}
            classSpan={"txt-orange font-18"}
            text={"START"}
          />
        </Screen>
        <div className="dim"></div>
      </div>
    </div>
  )
} 


export default Word;