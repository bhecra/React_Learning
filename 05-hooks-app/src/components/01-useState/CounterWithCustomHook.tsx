import React from 'react'
import './counter.css'
import { useCounter } from '../../hooks/useCounter';
export const CounterWithCustomHook = () => {


  const {state, increment, decrement, reset} = useCounter(10)
  return (
    <>
    <h1>Counter app with hooks {state}</h1>
    <hr />
    <button className='btn  btn-primary' onClick = {() => { decrement(2)}}>-1</button>
    <button className='btn  btn-secondary' onClick={reset}>reset</button>
    <button className='btn btn-primary' onClick={()=>{increment(2)}}>+1</button>
    </>
  )
}
