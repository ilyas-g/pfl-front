// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import reactLogo from './assets/react.svg'
import './App.css'

import { useQuery, gql } from "@apollo/client";
import Card from './components/card/Card';
import Header from './components/header/Header';
import Home from './pages/Home';
import SocialMedias from './components/socialMedias/SocialMedias';

function App() {
  // const [isLoading, setIsLoading] = useState(true)
  // const [data, setData] = useState();
  // const [count, setCount] = useState(0)

//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await axios.get(`https://pfl-back-2022.herokuapp.com/api/restaurants`);
//             setData(response.data);

//             setIsLoading(false);

//         } catch (error) {
//             console.log(error.message);
//         }
//     };
//     fetchData();
// }, []);

  return (
    <Router>
    <div className="App">
      <Header />
      <SocialMedias />
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
        {/* <Route path="/about" element={<About />} />
        <Route path="/product/:productId" element={<Product />} /> */}
      </Routes>
    </Router>
  )
}

export default App
