import React from 'react'
import "./App.css"
import { useState } from 'react'
const Counting = () => {
  const [counter, setCounter] = useState(0)
  function add() {
    setCounter(counter + 1)
  }
  function sub() {
    if (counter < 1) {
      setCounter(0)
    }else{
      
    }
    setCounter(counter - 1)
  }
  return (
    <div>
      <div className="round-boder">
        <div className="count-one">
          <h1>{counter}</h1>
        </div>
        <div className="btn-content">
        <button class='glowing-btn'onClick={add}>CLICK<span class='glowing-txt'><span class='faulty-letter'></span></span></button>
        <button class='glowing-btn1'onClick={sub}>CLICK<span class='glowing-txt'><span class='faulty-letter'></span></span></button>
        </div>

      </div>

    </div>
  )
}

export default Counting
