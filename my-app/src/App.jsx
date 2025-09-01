import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import HealthySection from './components/HealthySection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <HeroSection/>
   <HealthySection/>
    </>
  )
}

export default App
