import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const count = useSelector((state) =>state.count);
    const dispatch  = useDispatch();
  return (
    <div  style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>count: {count}</h2>
        <button onClick={()=> dispatch({type: "INCREMENT"})}>+</button>;
        <button onClick={()=> dispatch({type: "DECREMENT"})}>-</button>
    </div>
  )
}

export default Counter