import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Custom_button from './components/Custom_button'

function App() {
function onClick(){
  alert("Submit")
  
}

  return (
    <>
    <div className='card-container' > 
     <Card imageUrl ="src/assets/barbie.jpg"  name= "Barbie" category = "Cartoon"/>
     <Card imageUrl ="src/assets/doremon.webp"  name= "Doremon" category = "Cartoon"/>
     <Card imageUrl ="src/assets/scobi.png"  name= "SpongeBob" category = "Cartoon"/>
    </div>

    <div id='container2'>
      <Custom_button  buttonText = "Submit" onClick = {onClick}/>
    </div>
   
    </>
  )
}

export default App
