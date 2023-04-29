import React from 'react'
import { Redirect, Route, Switch } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import HomePage from './HomePage';


const Routes = () => {
  return (
    <>
    <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={HomePage} />
    </Switch>
    <Redirect to="/" />
    </>
  )
}

export default Routes