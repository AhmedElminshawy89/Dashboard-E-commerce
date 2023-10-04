import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../HomeAdmin/Home.css'
import {AiOutlineHome,AiOutlineSearch} from 'react-icons/ai'
import {LiaProductHunt} from 'react-icons/lia'
import {MdOutlineDeliveryDining} from 'react-icons/md'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import {BiMessageRounded} from 'react-icons/bi'


export default function Home({filterSearch}) {


const onsearch=(word)=>{
  filterSearch(word)
}
  return (
    <Fragment>
      <div className='container-admin'>
        <div className='dashboard-control'>
            <h3>Dashboard</h3>
            <div className='user-admin'>
              <div className='Select Destination'>
                  <select>
                    <option>Select Destination</option>
                    <option>Main Site</option>
                  </select>
              </div>
            </div>
            <div className='links'>
                <ul>
                  <li><NavLink className='link' activeClassName='exact active' to='/'><p className='icon'><AiOutlineHome/></p><p className='text'>Home</p></NavLink></li>
                  <li><NavLink className='link' activeClassName=' active' to='/Products'><p className='icon'><LiaProductHunt/></p><p  className='text'>Category</p></NavLink></li>
                  <li><NavLink className='link' activeClassName=' active' to='/AddProduct'><p className='icon'><LiaProductHunt/></p><p  className='text'>New Product</p></NavLink></li>
                  <li><NavLink className='link' activeClassName=' active' to='/Orders'><p className='icon'><MdOutlineDeliveryDining/></p><p  className='text'>Orders</p></NavLink></li>
                  <li><NavLink className='link' activeClassName=' active' to='/Customers'><p  className='icon'><BsFillPersonCheckFill/></p><p  className='text'>Customers</p></NavLink></li>
                  <li><NavLink className='link' activeClassName=' active' to='/Message'><p  className='icon'><BiMessageRounded/></p><p  className='text'>Messages</p></NavLink></li>
                </ul>
            </div>
        </div>
      </div>
      <div className='ml top-dashboard'>
        <div className='search-input'>
          <label htmlFor='inpt'> <AiOutlineSearch /></label>
          <input type='text' onChange={(e)=>onsearch(e.target.value)} name='inpt' placeholder='Search here...'/>
        </div>
      </div>
    </Fragment>
  )
}
