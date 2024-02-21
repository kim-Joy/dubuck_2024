import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {Button} from "components/Atom/Button";

function Plating() {
  return(
    <div className="plating">
      <button type="button">
        플러스
      </button>
      <ul className="">
        <li>
          <button>
            채린지 재 도전
            <span>아이콘</span>
          </button>
        </li>
      </ul>  
      <div classNmae="dim"></div>  
    </div>
  )
}

export default Plating;