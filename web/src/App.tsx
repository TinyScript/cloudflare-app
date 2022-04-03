import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const getData = () => {
    return axios.get('https://wild-sky-2ea8.tiny-script.workers.dev/api/KV-data')
  }
  
  const initData = async () => {
    await getData();
  }

  useEffect(() => {
    initData();
  });

  return (
    <div className="App">
    </div>
  );
}

export default App;
