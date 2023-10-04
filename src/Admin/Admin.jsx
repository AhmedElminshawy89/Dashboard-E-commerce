import React, { Fragment, useEffect, useState } from 'react'
import '../Admin/Admin.css'
import { BrowserRouter, NavLink, Router } from 'react-router-dom'
import Root from './Components/RootAdmin/Root'
import Home from './Components/HomeAdmin/Home'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function Admin() {

  const [Data,setData]=useState([])

  const FetchData=async()=>{
    const response=await axios.get('https://fakestoreapi.com/products');
    setData(response.data);
  }

useEffect(()=>
{
  FetchData()
},[])
  const filterSearch=async(word)=>{
    if(word===''){
      FetchData();
    }else{
      const response=await axios.get(`https://fakestoreapi.com/products/${word}`)
      setData(response.data)
    }
  }
  return (
    
    <Fragment>
        <BrowserRouter>
          <ToastContainer/>
            <Home filterSearch={filterSearch}></Home> 
            <Root filterSearch={filterSearch}></Root>
        </BrowserRouter>
    </Fragment>
  )
}
