import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Admin from './Admin/Admin';
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Fragment>
  <Admin/>
  <ToastContainer/>

  </Fragment>

);
