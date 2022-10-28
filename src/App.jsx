import axios from 'axios';
import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState();
  const [count, setCount] = useState(0)


  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://pfl-back-2022.herokuapp.com/api/restaurants`);
            setData(response.data);

            setIsLoading(false);

        } catch (error) {
            console.log(error.message);
        }
    };
    fetchData();
}, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + PFL</h1>

      {isLoading === true ? (
        <h1>En cours de chargement</h1>
      ) : (
        <>
        <ul>
          {data.data.map((restaurant, index) => {
            return (
          <li key={index}>{restaurant.attributes.name}</li>
            )
          })}
        </ul> 
        </>
      )}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
