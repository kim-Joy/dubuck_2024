import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from "page/Intro";
import Login from "page/Login";
import Join from "page/Join";
import FindEmail from "page/FindEmail";
import Policy from "page/Policy";
import Marketing from "page/Marketing";
import NotFound from "page/NotFound";
import Confirm from "components/Organisms/Confirm"

import 'styles/scss/include.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Confirm />
    <Routes>
      <Route path="/"  element={<Intro />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Join" element={<Join />}></Route>
      <Route path="/FindEmail" element={<FindEmail />}></Route>
      <Route path="/Policy" element={<Policy />}></Route>
      <Route path="/Marketing" element={<Marketing />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);

