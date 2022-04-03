import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

// const baseUrl = 'https://wild-sky-2ea8.tiny-script.workers.dev';
const baseURL = 'http://127.0.0.1:8787';
const getURL = `${baseURL}/api/KV-get-data`;
const setURL = `${baseURL}/api/KV-set-data`;
function App() {
  const [kv, setKv] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const setData = () => {
    return axios.get(setURL, { params: { value } });
  }
  const getData = () => {
    return axios.get(getURL);
  }

  const initData = async () => {
    const { data } = await getData();
    setKv(data);
  }

  useEffect(() => {
    initData();
  }, []);

  return (
    <div className="App">
      <div>KV数据：{kv}</div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={setData}>设置</button>
    </div>
  );
}

export default App;
