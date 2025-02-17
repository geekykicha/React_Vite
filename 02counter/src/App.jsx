import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // hooks which allows fun to access state and other React features
  let [counter, setCounter] = useState(5)
  //let counter = 5;

  let addVal = () => {
    if(counter < 20){
      setCounter(counter + 1)
    } 
  }

  let removeVal = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1>React with Kicha</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addVal}>Add val {counter}</button>
    <br />
    <button onClick={removeVal}>Remove val {counter}</button>
    </>
  )
}

export default App
