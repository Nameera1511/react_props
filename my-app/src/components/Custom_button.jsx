import React from 'react'


export default function Custom_button(propes) {
  return (
    <div className='form'>
     <input type="text"  id='display' placeholder='Enter name' required/>
      <input type="password"  id='display1' placeholder='Password' required/>
       <input type="email"  id='display2' placeholder='email' required/>

      <button id='submit' type='submit' onClick={propes.onClick}> 
        {propes.buttonText} </button>
    </div>
  )
  
 }
