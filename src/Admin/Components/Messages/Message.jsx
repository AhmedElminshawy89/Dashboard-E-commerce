import React, { Fragment, useEffect, useState } from 'react'
import '../Customers/Customers.css';
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';


export default function Message() {

  
  const [order,setOrder]=useState([]);
  const [Load,setLoad]=useState(false);

  const FetchData=async()=>{
    const response=await axios.get('https://fakestoreapi.com/carts');
    setOrder(response.data);
    setLoad(true);
  }
  useEffect(()=>
    {
      FetchData()
    }
  ,[])

  return (
    <Fragment>
        <div className='ml Customers'>
        <div className='lastSales'>
            <h3>Messages</h3>
            <div className='table'>
              <table>
                <thead>
                        <tr>
                        <th>First Name</th>
                        <th>Last Name </th>
                        <th>Phone</th>
                        <th>Messages</th>
                      </tr>
                </thead>
                <tbody>
                
                <tr>
                  <td>Ahmed</td>
                  <td>Elminshawy</td>
                  <td>01286552467</td>
                  <td> aaa</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </Fragment>
  )
}
