import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'kicha',
    age: 23
  }
  let myArr = [1,2,3]
  return (
    <>
     <h1 className='bg-orange-400 text-black p-4 rounded-xl mb-4'>tailwand with vite</h1>
     {/* <Card someObj = {myArr}/> */}
     <Card username='krishna' btnText='click me'/>
     <Card username='kicha' btnText='visit us'/>
    </>
  )
}

export default App
