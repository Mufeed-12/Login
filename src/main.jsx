import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Login from './Login.jsx'
import './index.css'
import Login from './Login.jsx'
import Counting from './Counting.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Login />
    {/* <Counting/> */}
  </React.StrictMode>,
)
