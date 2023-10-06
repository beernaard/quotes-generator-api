import React, { useEffect, useState } from 'react'
import Axios from "axios"
import './App.css'
import {ButtonComponent, CategoryComponent, QuoteComponent} from './components/index'
const App = () => {
  const [dataquote,setDataquote] = useState("")
  const [dataauthor,setDataAuthor] = useState("")
  const [datacategory,setDataCategory] = useState("")
  const getAPI = async()=>{
      await Axios({
      method:"get",
      url:`${process.env.REACT_APP_API_URL}?category=${datacategory}`,
      headers:{
        'X-Api-Key': `${process.env.REACT_APP_API_KEY}`
      }
    })
    .then((res)=>{
      console.log(res.data)
      setDataquote(res.data[0].quote)
      setDataAuthor(res.data[0].author)
    }).catch((error)=>console.log(error))
  }
  useEffect(()=>{
    getAPI()
  },[])
  
  const inputCategory = (categoryparam)=>{
    setDataCategory(categoryparam)
  }
  return (
    <div className='main-container'>
      <CategoryComponent datacategory={datacategory} inputCategory={inputCategory}/>
      <QuoteComponent dataquote={dataquote} dataauthor={dataauthor}/>
      <ButtonComponent getAPI={getAPI}/>
    </div>
  )
}

export default App