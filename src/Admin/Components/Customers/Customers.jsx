import React, { Fragment, useEffect, useState } from 'react'
import '../Customers/Customers.css';
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';


export default function Customers() {

  
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
            <h3>Clients</h3>
            <div className='table'>
              <table>
                <thead>
                        <tr>
                        <th>Name</th>
                        <th>Connection </th>
                        <th>Logins</th>
                        <th>Latest Login</th>
                      </tr>
                </thead>
                <tbody>
                
                <tr>
                  <td>Ahmed Elminshawy<br/>ahmedelminshawy981@gmail.com</td>
                  <td>Username-Password-Authenticat</td>
                  <td>2</td>
                  <td>6 Hours ago</td>
                </tr>
                <tr>
                  <td>ahmedelminshawy80@gmail.com<br/>ahmedelminshawy80@gmail.com</td>
                  <td>google-oauth2</td>
                  <td>1</td>
                  <td>6 Days ago</td>
                </tr>
                          
                    
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </Fragment>
  )
}
