import React, { useState } from 'react';

import {Input, Label} from "components/Atom/Form";
import {Button} from "components/Atom/Button";

import Image from '../../assets/images/common/dubuck.png';
const Dubuck = <img src={Image} className="dubuck_symbolon" alt="두벅이" />


const Screen =(props) => {
  return (
    <div className={`screen ${props.className}`}>
      <section>
        {
        props.className.includes('full') === true 
        ? <h3>{props.title}</h3>
        : <> 
          {Dubuck} 
          <p className="question-num">
            <span className="desc">{props.desc}</span>
          </p> 
          </>
        }
      </section>
      <div className="btn-group">
        {props.children}
      </div>
    </div>
  )
} 


export default Screen;