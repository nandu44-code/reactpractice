import React from "react"
import { useState } from "react";
import './counter.css'
function Counter(){

    const [count,setCount]=useState(0)
    const increment= () =>{
        setCount(prevCount => prevCount+1)
    }
    const decrement = () => {
        setCount(prevCount => prevCount-1)
    }
    return(
        
        <div className="container">
            <p className="countValue">{ count }</p>
            <button onClick={increment} title='increment'>+</button>
            <button onClick={decrement} title="decrement">-</button>

        </div>

    )   
}

export default Counter;