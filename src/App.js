import React from 'react';
import asyncComponent from './util/asyncCompontents';
import { Switch, Route, Redirect } from "react-router-dom"
import MyRoute from './pages/MyRouter/MyRouter';
const Login = asyncComponent(() => import("./pages/login/login"))
const Register = asyncComponent(() => import("./pages/register/register"))
const Index = asyncComponent(() => import("./pages/index/index"))
const ClassGoods = asyncComponent(() => import("./pages/classGoods/classGoods"))
const Car = asyncComponent(() => import("./pages/car/car"))
const Detail = asyncComponent(()=>import("./pages/detail/detail"))
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}></Route>
        <MyRoute path="/index" component={Index}></MyRoute>
        <Route path="/register" component={Register}></Route>
        <MyRoute path="/classgoods" component={ClassGoods}></MyRoute>
        <MyRoute path="/car" component={Car}></MyRoute>
        <MyRoute path="/detail" component={Detail}></MyRoute>
        <Redirect to="/login"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
