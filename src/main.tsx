import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "bootstrap"; // 追加
import "bootstrap/dist/css/bootstrap.min.css"; // 追加
import "bootstrap-icons/font/bootstrap-icons.css"; // 追加
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


reportWebVitals(console.log)
