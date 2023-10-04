import React, { Fragment, useEffect, useState } from 'react'
import {BsBagCheck,BsEyeFill} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../Products/Products.css';
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from 'react-toastify';


export default function Products() {

  const [Data,setData]=useState([])
  const [load,setLoad]=useState(false)

  const FetchData=async()=>{
    const response=await axios.get('https://fakestoreapi.com/products');
    setData(response.data);
    setLoad(true)
  }

useEffect(()=>
{
  FetchData()
},[])


const notifySuccess = (id) =>    

toast(' Product deleted ,id is '+id, {
  type:"success",
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
}
);



const handleDelete=(id)=>{
   fetch(`https://fakestoreapi.com/products/${id}`,{
    method:'DELETE'
   })
   .then((res)=>res.json().then((res2)=>{
    console.log(res2)
      FetchData();
   })
   )
   notifySuccess(id);
}
const handleUpdate=(id)=>{
  fetch(`https://fakestoreapi.com/products/${id}`,{
   method:'DELETE'
  })
  .then((res)=>res.json().then((res2)=>{
   console.log(res2)
     FetchData();
  })
  )
  notifySuccess(id);
}


  return (
    <Fragment>
    <ToastContainer/>
        <div className='ml Products'>
        <div className='productAdmin'>
        <h3 className='main-title'>Products</h3>
          <div className='container'>
              {
                load?(
                  (
                    Data.map((item)=>{
                      return(
                        <div className='box' key={item.id}>
                        <div className='img-box'>
                          <img src={item.image} alt='not found'/>
                        </div>
                        <div className='details'>
                          <p className='title'>{item.category}</p>
                          <p className='explain'>{item.title}</p>
                          <p className='price'>${item.price}</p>
                        </div>
                        <div className='box-btn' >
                          <button className='btn' onClick={()=>handleDelete(item.id)}>Delete</button>
                          <Link to={`/Edit/${item.id}`}><li className='btn'>Update</li></Link>
                        </div>
                      </div>
                      )
                    })
                  )
                ):(
                  <div className='loading'>
                  <ClipLoader
                  size={30}
                 />
               </div>
                )
              }
          </div>   
      </div>
        </div>
    </Fragment>
  )
}
