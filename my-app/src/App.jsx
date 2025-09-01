import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'
import Custom_button from './components/Custom_button'
// let submit_button = document.getElementById('submit')

function App() {
  
function onClick(){
  let display = document.getElementById('display');
  let display1 = document.getElementById('display1');
  let display2 = document.getElementById('display2');
if (display.value && display1.value && display2.value){
  alert("Form submit")
}
else {
  alert("Please fill the field")
}
display.value = ""
display1.value = ""
display2.value = ""
}

  return (
    <>
    <div className='card-container'>
       <Card imageUrl = "src/assets/barbie.jpg" name = "Barbie" category= "Barbie"/>
    <Card imageUrl = "src/assets/doremon.webp" name = "Doremon" category= "Cartoon"/>
    <Card imageUrl = "src/assets/scobi.png" name = "SpongeBob" category= "Cartoon"/>
     <Card imageUrl = "src/assets/barbie.jpg" name = "Barbie" category= "Barbie"/>
    <Card imageUrl = "src/assets/doremon.webp" name = "Doremon" category= "Cartoon"/>
    <Card imageUrl = "src/assets/scobi.png" name = "SpongeBob" category= "Cartoon"/>
     <Card imageUrl = "src/assets/barbie.jpg" name = "Barbie" category= "Barbie"/>
    <Card imageUrl = "src/assets/doremon.webp" name = "Doremon" category= "Cartoon"/>
    <Card imageUrl = "src/assets/scobi.png" name = "SpongeBob" category= "Cartoon"/>
    
    </div>
  
  <div id='container2'>
     <Custom_button  buttonText = "Submit" onClick = {onClick} />
  </div>
  
    </>
  )
}

export default App
