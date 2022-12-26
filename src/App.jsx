// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

import reactLogo from './assets/react.svg'
import './App.css'

import { Routes, Route, useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Card from './components/card/Card';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Ranking from './pages/ranking/Ranking';
import SocialMedias from './components/socialMedias/SocialMedias';
import Modal from "./components/modal/Modal";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  // const [isLoading, setIsLoading] = useState(true)
  // const [data, setData] = useState();
  // const [count, setCount] = useState(0)

  const [isModal, setIsModal] = useState(false)
  const location = useLocation();

  const currentYear = new Date().getFullYear();
  return (
<>
    <div className="App">
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
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/ranking" element={<Ranking />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/product/:productId" element={<Product />} /> */}
      </Routes>
    </AnimatePresence>
    <footer>  Website by <a href="https://twitter.com/iamarktall" target="_blank">
        Arktall (@iamarktall)</a> PFL2 © Yuzu Gaming - {currentYear}
        </footer>
    </>
  )
}

export default App
