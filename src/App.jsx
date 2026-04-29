import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import bgImage from './assets/HeroSectionBG.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div 
      style={{ backgroundImage: `url(${bgImage})`}}
      className='min-h-screen bg-cover bg-center'>
        <Navbar />
      </div>
    </>
  )
}

export default App
