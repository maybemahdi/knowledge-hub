import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className="text-3xl text-center my-5 font-bold underline">
      Hello world!
    </h1>
    </div>
  )
}

export default App
