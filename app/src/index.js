import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Intro from "./page/Intro";
import Login from "./page/Login";
import Join from "./page/Join";
import FindEmail from "./page/FindEmail";
import Policy from "./page/Policy";
import NotFound from "./page/NotFound";


import './styles/css/font.css';
import './styles/css/reset.css';
import './styles/css/normaulrze.css';

import './styles/scss/_page.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Intro />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Join" element={<Join />}></Route>
      <Route path="/FindEmail" element={<FindEmail />}></Route>
      <Route path="/Policy" element={<Policy />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
      
      </Routes>
  </BrowserRouter>
);

