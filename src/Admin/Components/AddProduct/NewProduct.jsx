import React, { Fragment, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import '../AddProduct/NewProduct.css'


export default function NewProduct() {
  
  const notifySuccess = () =>    

  toast('The Product has been Added successfully', {
    type:"success",
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  }
  );
  const notifyWarning = () =>    

  toast('There is an error in the connection, please check', {
    type:"warning",
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  }
  );

const [title,settitle]=useState('');
const [price,setprice]=useState('');
const [desc,setdesc]=useState('');
const [image,setimage]=useState('');
const [cat,setcat]=useState('');

  const senddata=async(e)=>{
    e.preventDefault();
    const fromData=new FormData();
    fromData.append('title',title);
    fromData.append('price',price);
    fromData.append('des',desc);
    fromData.append('image',image);
    fromData.append('cat',cat);

    let result=await fetch('https://fakestoreapi.com/products',{
        method:"POST",
        body:fromData
    })
    notifySuccess();
    console.log(result)
  }       
  const inputRef= useRef(null);


  const handleImageClick=()=>{
      inputRef.current.click();
  }
  const[img,setimg]=useState('')
  const handleImageChange=(e)=>{
      setimg(e.target.files[0])
  }
  return (
      <Fragment>
        <ToastContainer/>
        <div className="ml contact">
            <div className='content'>
              <form method='POST' className='form' >
               <h3>New Product</h3>
                <div className='inputs'>
                    <div className='name'>
                      <input className='input' name='FirstName'   type='text'  onChange={(e)=>settitle(e.target.value)}  placeholder='Enter title'/>
                      <input className='input' name='LastName'  type='text' onChange={(e)=>setprice(e.target.value)}  placeholder='Enter price'/>
                  </div>
                  <div className='remain-form'>
                      <input className='input' name='Email'  type='email' onChange={(e)=>setdesc(e.target.value)} placeholder='Enter description'/>
                      <div onClick={handleImageClick} style={{cursor:'pointer'}} className='img-box'>
                      {
                        img?( <img className='imgg' onChange={(e)=>setimg(e.target.value)} src={URL.createObjectURL(img)} alt='not found'/>
                        ):(<img className='imgg' onChange={(e)=>setimage(e.target.value)} src='' alt='not found'/>
                        )
                      }
                   <input type='file' style={{display:'none'}} ref={inputRef} onChange={handleImageChange}/>
                 </div>                      
              <textarea className='input' name='Message'  type='text' autoComplete='off' onChange={(e)=>setcat(e.target.value)}  placeholder='Enter category'/>
                  </div>
                </div>
                  <button className='btn' onClick={senddata}>Add</button>
            </form>
            </div>
        </div>
      </Fragment>
  )
}
