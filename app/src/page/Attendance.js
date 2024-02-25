import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {Header} from "components/Organisms/Header";
import {Button} from "components/Atom/Button";
import {Input, Label} from "components/Atom/Form";

import Big from 'components/Organisms/Big';
  
  

function Attendance() {
  


  return(
     <div className="attendance">
        <Big/>
        <div className="inner20">
          <div className="list-group calendar">
            <Link to="/Attendance">
              <button className="btn">
                <p>이달의 출결 수</p>
                <strong><em>31</em>일차</strong>
              </button>
            </Link>
          </div>
        </div>
     </div>
  )
}




export default Attendance;