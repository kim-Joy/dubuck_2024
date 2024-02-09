import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Header from './components/Organisms/Header';
import Main from './components/Organisms/Main';
import './styles/css/font.css';
import './styles/css/reset.css';
import './styles/css/normaulrze.css';
import './styles/scss/page.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header />
        <Main />
    </BrowserRouter>
  </React.StrictMode>
);

