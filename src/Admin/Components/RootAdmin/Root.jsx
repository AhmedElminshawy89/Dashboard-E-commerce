import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Orders from '../Orders/Orders';
import Products from '../Products/Products';
import Customers from '../Customers/Customers';
import ContentHome from '../ContentHome/ContentHome';
import Edit from '../Edit/Edit';
import NewProduct from '../AddProduct/NewProduct';
import Message from '../Messages/Message';
import { ToastContainer } from 'react-toastify';
export default function Root({filterSearch}) {

  return (
        <Fragment>
            <Routes>
                <Route path='/' element={<ContentHome/>}></Route>
                <Route path='/Products' element={<Products filterSearch={filterSearch}/>}></Route>
                <Route path='/Orders' element={<Orders/>}></Route>
                <Route path='/Customers' element={<Customers/>}></Route>
                <Route path='/Edit/:id' element={<Edit/>}></Route>
                <Route path='/AddProduct' element={<NewProduct/>}></Route>
                <Route path='/Message' element={<Message/>}></Route>
            </Routes>
      </Fragment>
  )
}

