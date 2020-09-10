import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//1引入 rem.js resect.js
//1.引入reset rem 
import "./assets/js/rem"
import "./assets/css/reset.css"
// 引入hash路由模式
import { HashRouter, } from "react-router-dom"
//引入ui框架的样式
import 'antd-mobile/dist/antd-mobile.css';
ReactDOM.render(
   <HashRouter>
      <App />
   </HashRouter>,
  document.getElementById('root')
);

