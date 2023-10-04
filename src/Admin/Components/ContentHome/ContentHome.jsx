import React, { Fragment, useEffect, useState } from 'react';
import '../ContentHome/ContentHome.css';
import {AiOutlineEye,AiOutlineShoppingCart,AiOutlineMessage,AiOutlineMoneyCollect} from 'react-icons/ai'
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import earth from '../../../img/earth.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



export default function ContentHome() {

  const [lastProduct,setLastProduct]=useState([]);
  const [load,setLoad]=useState(false);
  const [weatherData, setWeatherData] = useState({
    celcius:'',
    name:'',
    humidity:'',
    speed:'',
    wr:''
  });

  
  const FetchDataWhether=async()=>{
    const response2=await axios.get('https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=80c4f1e231bd07dee137ff5dec1217ca&metric')
    .then(res=>
        setWeatherData({...weatherData,celcius:res.data.main.temp,name:res.data.name,humidity:res.data.main.humidity,speed:res.data.wind.speed,wr:res.data.weather.description})
      )
      .catch(e=>console.log(e))
  }

  const FetchData=async()=>{
    const response=await axios.get('https://fakestoreapi.com/products');
    setLastProduct(response.data);
    setLoad(true);
  }

  useEffect(()=>{
      FetchData();
      FetchDataWhether();
  },[]);
  const [value, onChange] = useState(new Date());

  return (
    <Fragment>
        <div className='ml ContentHome'>
          <div className='containerrr'>
            <div className='box'>
              <div className='t-details'>
                <p className='num'>4</p>
                <p className='icon'><AiOutlineEye/></p>
              </div>
              <div className='text'>Daily Views</div>
            </div>
            <div className='box'>
              <div className='t-details'>
                <p className='num'>893.50</p>
                <p className='icon'><AiOutlineShoppingCart/></p>
              </div>
              <div className='text'>Sales</div>
            </div>
            <div className='box'>
              <div className='t-details'>
                <p className='num'>13</p>
                <p className='icon'><AiOutlineMessage/></p>
              </div>
              <div className='text'>Messages</div>
            </div>
            <div className='box'>
              <div className='t-details'>
                <p className='num'>$605.00</p>
                <p className='icon'><AiOutlineMoneyCollect/></p>
              </div>
              <div className='text'>Earning</div>
            </div>
          </div>
          <div className='lastSales'>
            <h3>Last Product</h3>
            <div className='table'>
              <table>
                <thead>
                        <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Rate</th>
                        <th>Description</th>
                        <th>Count</th>
                      </tr>
                </thead>
                <tbody>
                  {
                    load?(
                      lastProduct.slice(0,8).map((e)=>{
                        return(
                          <tr>
                          <td>{e.title}</td>
                          <td>{e.category}</td>
                          <td><img src={e.image} alt={e.title}/></td>
                          <td>
                            {
                              e.rating.rate<=2?<p className='low'>Low</p>:<p className='medium'>Medium</p> &&
                              e.rating.rate >=3? <p className='high'>High</p>:<p className='medium'>Medium</p>&&
                              e.rating.rate<=3?<p className='medium'>Medium</p>:<p className='high'>High</p>
                            } 
                          </td>
                          <td>{e.description}</td>
                          <td>{e.rating.count}</td>
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
          <div className='whether'>
            <div className='box'>
              <div className='img-box'>
                <img src={earth} alt='not found'/>
              </div>
                <div className='info'>
                    <h2>{weatherData.celcius}</h2>
                    <h2>{weatherData.name}</h2>
                <div className='sec-details'>
                  <p>{weatherData.humidity}%</p>
                  <p>Wind:{weatherData.speed}</p>
                </div>
              </div>
              <p className='status'>{weatherData.wr}</p>
            </div>
            <div className='boxx'>
             <Calendar className='clender' onChange={onChange} value={value} />
            </div>
          </div>
        </div>
    </Fragment>
  )
}
