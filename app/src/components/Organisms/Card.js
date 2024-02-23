import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Input, Label} from "components/Atom/Form";
import {Button} from "components/Atom/Button";


const Card =(props) => {
  return (
    <div className="card">
      <div className="antenna">
        <dl>
          <dt>항목수</dt>
          <dd>
            <span>2</span>
            /
            <span>100</span>
          </dd>
        </dl>
        <dl>
          <dt>오답수</dt>
          <dd>
            <span>0</span>
            /
            <span>100</span>
          </dd>
        </dl>
      </div>
      <div className="card-question">
        <p>동사</p>
        <strong className="q">존재하다</strong>
        <button className="volume">
          <i className="i-volume"></i>
        </button>
        <span>발음 듣기</span>
      </div>
      
      <div className="card-write">
        <input type="text" className="my-write" value="exist" />
      </div>
    </div>
  )
} 


export default Card;