import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Input, Label} from "components/Atom/Form";
import {Button} from "components/Atom/Button";

import { Header } from 'components/Organisms/Header';
import Screen from 'components/Organisms/Screen';

const Finish =() => {
  return (
    <div className="screen_finish">
      <Header 
        logo={true}
      />
      <Screen
        className={'full'}
        title={`수고하셨습니다.
        오늘도 힘차게 두벅!`
      }
      >
        <Link to="/Word">
          <Button
            className={"btn full border border-whtie radius-20 h-50"}
            classSpan={"txt-white font-18"}
            text={"단어 복습"}
          />
        </Link>
        <Link to="/Exam">
          <Button
            className={"btn full fill-white radius-20 h-50"}
            classSpan={"txt-orange font-18"}
            text={"챌린지 도전"}
          />
        </Link>
      </Screen>
    </div>
  )
} 


export default Finish;