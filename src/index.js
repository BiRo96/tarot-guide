import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Layout from './Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import reportWebVitals from './reportWebVitals';
import Cards from './pages/Cards';
import Card from './pages/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/enc" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="cards" element={<Cards />}/>
          <Route path="cards/:deck" element={<Cards />}/>
          <Route path="card/:short_name" element={<Card />}/>
          <Route path="card/:short_name/:deck" element={<Card />}/>
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
