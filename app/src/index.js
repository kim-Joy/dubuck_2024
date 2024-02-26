//react npm 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Page route
import Intro from "page/Intro";
import Login from "page/Login";
import Join from "page/Join";
import FindEmail from "page/FindEmail";
import Policy from "page/Policy";
import Marketing from "page/Marketing";
import Main from "page/Main";
import Word from "page/Word";
import Tutorials from 'page/Tutorials';
import Finish from "page/Finish";
import Result from "page/Result";
import Result_View from "page/Result_View";
import Attendance from "page/Attendance";
import Suggestion from "page/Suggestion"

import NotFound from "page/NotFound";


//react linbrary
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 페이지 scss
import 'styles/scss/include.scss';




const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/"  element={<Intro />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Join" element={<Join />}></Route>
      <Route path="/FindEmail" element={<FindEmail />}></Route>

      <Route path="/Main" element={<Main />}></Route>

      <Route path="/Attendance" element={<Attendance />}></Route>
      <Route path="/Word" element={<Word />}></Route>
      <Route path="/Finish" element={<Finish />}></Route>

      <Route path="/Tutorials" element={<Tutorials />}></Route>

      <Route path="/Result" element={<Result />}></Route>
      <Route path="/Result_View" element={<Result_View />}></Route>
      <Route path="/Suggestion" element={<Suggestion />}></Route>

      <Route path="/Policy" element={<Policy />}></Route>
      <Route path="/Marketing" element={<Marketing />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);

/* 

새로 작업시 

*/