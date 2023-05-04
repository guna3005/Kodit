import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import HomePage from "./HomePage";
import Main from "./Main";
import Profile from "./Profile";


const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/main" component={Main} />
        <Route path="/" component={HomePage} />
    </Switch>
    </>
  );
};

export default Routes;
