import React from 'react'
import './RecipeTile.css'

export default function RecipeTile({item}) {
  return (
    
    <div className='recipeTile'>
      <img className='recipeTile__img'src={item['recipe']['image']}/>
        <p className='recipeTile__name'>{item['recipe']['label']}</p>
    </div>
  )
}
