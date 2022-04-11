import React from 'react'
import { CounterApp } from './components/01-useState/CounterApp'
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook'

export default function HooksApp() {
  return (
    <>
    <CounterWithCustomHook/>
    {/* <CounterApp/> */}
    </>
  )
}
