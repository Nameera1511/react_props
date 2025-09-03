import React from 'react'


export default function Custom_button(propes) {
  return (
    <div className='form'>
      <button id='submit' type='submit' onClick={propes.onClick}> 
        {propes.buttonText} </button>

    </div>

  )
  
 }
