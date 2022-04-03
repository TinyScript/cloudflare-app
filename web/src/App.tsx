import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const baseURL = 'https://server.tiny-script.workers.dev';
// const baseURL = 'http://127.0.0.1:8787';
const getURL = `${baseURL}/api/KV-get-data`;
const setURL = `${baseURL}/api/KV-set-data`;
function App() {
  const [kv, setKv] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const setData = async () => {
    await axios.get(setURL, { params: { value } });
    await getData();
  }
  const getData = async() => {
    const { data } = await axios.get(getURL);
    setKv(data);
  }

  const initData = async () => {
    await getData();
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
