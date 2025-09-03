import React from 'react'



export default function Card(propes) {
  return (
    <div className='main'>  
         <div className='cards'>
      <img src = {propes.imageUrl} alt="" className='image'/>
      <h2 className='name'>{propes.name}</h2>
      <p className='cat'>{propes.category}</p>
    </div>
    </div>
   
  )
}
