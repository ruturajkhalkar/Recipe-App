import React, { useState } from 'react'
import Axios from 'axios'
import "./App.css";
import RecipeTile from './RecipeTile';

export default function App() {
  const[query,setQuery] = useState('');
  const[recipes,setRecipe] = useState([]);
  const[healthlabel,setHealthlabel] = useState('peanut-free')

  
  var url=`https://api.edamam.com/search?q=${query}&app_id=c0c05c23&app_key=fc1ce84ae3cd4ac2f0a598aefba026c5&calories=591-722&health=${healthlabel}`


  async function getRecipis(){
    var result = await Axios.get(url) ;
    setRecipe(result.data.hits)
    console.log(result.data)
    }

    const onSubmit=(e)=>{
      e.preventDefault();
      getRecipis();
    }

  return (
    <div className='app'>
      
      <h1>Food Recipe Plaza</h1>
      <form className='app__searchForm' onSubmit={onSubmit}>
      <input className='app__input' type='text' placeholder='Enter Ingradient'  value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
      <input className='app__submit'type='submit' value='Search'/>
       
       <select className='app_healthlables'onChange={(e) => setHealthlabel(e.target.value)}
        defaultValue={healthlabel}>
        <option >vegan</option>
        <option >peanut-free</option>
        <option >soy-free</option>
        <option >fish-free</option>
        <option >wheat-free</option>
        <option >low-sugar</option>
        <option >egg-free</option>
        <option >dairy-free</option>
       </select>
      </form>

      <div className='app__recipe'>
        {recipes.map((item)=>{
          return(
            <>
             <RecipeTile item={item}/>
            </>
          )
        })}
      </div>
    </div>
  )
}

