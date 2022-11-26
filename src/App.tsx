import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import imgUrl from "./assets/garden.jpg";
import './App.css'
import "./bootstrap-5.0.2-dist/css/bootstrap.css"
import _ from 'lodash';
import moment from 'moment';

const sleep = (waitTime: number) => new Promise( resolve => setTimeout(resolve, waitTime) );

function App() {
  const [count, setCount] = useState(0)

  const hoge = _.isString("abc");
  console.log(hoge)
  const date = moment();
  console.log(date)

  useEffect(() => {
    (async () => {
      await sleep(100);
    })
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
      <h1>Vite + React</h1>
      <div className='container'>
        <img src={imgUrl} />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
