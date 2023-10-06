import React from 'react'
import './categorycomponent.css'
const CategoryComponent = ({datacategory, inputCategory}) => {
  return (
    <div className="header">
      <h4>QUOTES GENERATOR</h4>
      <div className='dropdown'>
      {datacategory===""? <input className='categ-dropdown' type='text' value="Random"></input>
      :<input className='categ-dropdown' type='text' value={datacategory}></input>}
      <div className="dropdown-content">
        <input type="text" value="Random" onClick={()=>{inputCategory("")}}/>
        <input type="text" value="Life" onClick={()=>{inputCategory("life")}}/>
        <input type="text" value="Success" onClick={()=>{inputCategory("success")}}/>
        <input type="text" value="Dreams" onClick={()=>{inputCategory("dreams")}}/>
        <input type="text" value="Happiness" onClick={()=>{inputCategory("happiness")}}/>
      </div>
    </div>
    </div>
  )
}

export default CategoryComponent