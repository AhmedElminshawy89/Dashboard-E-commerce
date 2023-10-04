import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import '../Orders/Orders.css'
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";


export default function Orders() {

  const [order,setOrder]=useState([]);
  const [Load,setLoad]=useState(false);

  const FetchData=async()=>{
    const response=await axios.get('https://fakestoreapi.com/carts');
    setOrder(response.data);
    setLoad(true);
    console.log(response.data.products)
  }
  useEffect(()=>
    {
      FetchData()
    }
  ,[])

  return (
    <Fragment>
        <div className='ml Orders'>
        <div className='lastSales'>
            <h3>Orders</h3>
            <div className='table'>
              <table>
                <thead>
                        <tr>
                        <th>UserId</th>
                        <th>Date</th>
                        <th>ProductId</th>
                        <th>Quantity</th>
                      </tr>
                </thead>
                <tbody>
                  {
                    Load?(
                      order.map((e)=>{
                        return(
                          <tr key={e.id}>
                          <td>{e.userId}</td>
                          <td>{e.date}</td>
                          <td>{e.products.map((e2)=>e2.productId).join().slice(',')}</td>
                          <td>{e.products.map((e2)=>e2.quantity).join().slice(',')}</td>
                          </tr>
                        )
                      })
                    ):(
                      <div className='load'>
                          <ClipLoader
                          size={30}
                         />
                      </div>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </Fragment>
  )
}
