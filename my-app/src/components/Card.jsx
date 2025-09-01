import React from 'react'

// let data = [{name : "Nameera",age: 19 , gender : "Female" ,imagUrl : "src/assets/scobi.png"},
//   {name : "Nameera",age: 19 , gender : "Female" , imagUrl: "src/assets/scobi.png"},
//   {name : "Nameera",age: 19 , gender : "Female", imagUrl: "src/assets/doremon.webp"}



export default function Card(propes) {
  return (
    <div className='main'>  
         <div className='cards'>
      <img src = {propes.imageUrl} alt="barbie" className='image'/>
      <h2 className='name'>{propes.name}</h2>
      <p className='cat'>{propes.category}</p>
    </div>
    </div>
   
  )
}
