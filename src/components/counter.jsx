import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterAction'
const counter = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h1> Count : {count}</h1>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=> dispatch(reset())}>RESET</button>
            <button onClick={()=> dispatch(decrement())}>decrement</button>
        </div>
    )
}

export default counter
