import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


export default function Edit() {

    const params=useParams()
    const [Data,setData]=useState([]);
    const [Load,setLoad]=useState(false);



    const notifySuccess = (id) =>    

    toast(' Product Updated ,Id is '+id, {
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

    const getId=async()=>{
        const response=await axios.get(`https://fakestoreapi.com/products/${params.id}`,{
            method:'DELETE'
        });
        setData(response.data)  
        setLoad(true)

    
    }

      useEffect(()=>{
        getId();
      },[])


      const inputRef= useRef(null);
      const [img,setImg]= useState("");
  
  
      const handleImageClick=()=>{
          inputRef.current.click();
      }
      const handleImageChange=(e)=>{
          setImg(e.target.files[0])
      }

  return (
  <Fragment>
        <div className='ml'>
        {
          Load?(
            <div className='view-details'>
            <div className='container'>
              <div onClick={handleImageClick} style={{cursor:'pointer'}} className='img-box'>
                {
                    img ?<img src={URL.createObjectURL(img)} alt='not found'/>:<img src={Data.image} alt='not found'/>
                }
                <input type='file' style={{display:'none'}} ref={inputRef} onChange={handleImageChange}/>
              </div>
              <div className='content'>
                <div className='details'>
                  <input style={{width:'100%',border:'none',outline:'none ',borderBottom:'1px solid',padding:'5px'}} value={Data.category}/>
                  <input className='title' style={{width:'100%',border:'none',outline:'none ',borderBottom:'1px solid',padding:'5px'}} value={Data.title}/>
                <input className='description' style={{width:'100%',border:'none',outline:'none ',borderBottom:'1px solid',padding:'5px'}} value={Data.description}/>
                <input className='price' style={{width:'100%',border:'none',outline:'none ',borderBottom:'1px solid',padding:'5px'}} value={Data.price}/>
                </div>
                <button className='btn' onClick={()=>notifySuccess(params.id)}>Update</button>
              </div>
            </div>
            <div className='icon'>                
                  <Link to='/Products'><li>X</li></Link>
            </div>
          </div>
          ):(
              <div className='loading'>
                <ClipLoader
                 size={30}
                />
              </div>
          )
        }
        </div>
  </Fragment>
  )
}
