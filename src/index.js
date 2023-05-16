import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { BrowserRouter as Routes, Route } from 'react-router-dom';
// import AddUser from './tables/AddUser';
// import reportWebVitals from './reportWebVitals';
// import Navbox from './Navbox';
// import App from './App';
import  Router  from './Router';
// import Login from './tables/Login';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router/>
   {/* <Login/> */}
  </React.StrictMode>
);


