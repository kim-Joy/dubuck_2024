import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from "page/Intro";
import Login from "page/Login";
import Join from "page/Join";
import FindEmail from "page/FindEmail";
import Policy from "page/Policy";
import Marketing from "page/Marketing";
import Main from "page/Main";
import Result from "page/Result";
import Result_View from "page/Result_View";
import NotFound from "page/NotFound";

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
      <Route path="/Result" element={<Result />}></Route>
      <Route path="/Result_View" element={<Result_View />}></Route>

      <Route path="/Policy" element={<Policy />}></Route>
      <Route path="/Marketing" element={<Marketing />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);

