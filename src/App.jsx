// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import reactLogo from './assets/react.svg'
import './App.css'

import { useQuery, gql } from "@apollo/client";
import Card from './components/card/Card';
import Header from './components/header/Header';
import Home from './pages/Home';
import About from './pages/About';
import SocialMedias from './components/socialMedias/SocialMedias';
import Modal from "./components/modal/Modal";
import { useState } from "react";

function App() {
  // const [isLoading, setIsLoading] = useState(true)
  // const [data, setData] = useState();
  // const [count, setCount] = useState(0)

  const [isModal, setIsModal] = useState(false)

  return (
    <Router>
    <div className="App transition-fade">
      <Header />
      <SocialMedias func={() => {setIsModal(true)}} />
      {isModal === true ? <Modal func={() => {setIsModal(false)}} /> : '' }
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/product/:productId" element={<Product />} /> */}
      </Routes>
    </Router>
  )
}

export default App
