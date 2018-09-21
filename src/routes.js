import React from 'react';
import { Switch, Route } from 'react-router-dom';
// client
import Home from './components/client/Home/ContainerHome';
import SignUp from './components/client/SignUp/ContainerSignUp';
import About from './components/client/About/ContainerAbout';
// admin
import Dashboard from './components/admin/Dashboard/ContainerDashboard';
import User from './components/admin/Users/ContainerUser';
import Product from './components/admin/Products/ContainerProduct';

import NotFound from './components/404/NotFound';
export default () => {
  return (
    <Switch>
  {/* client */}
        <Route path="/" exact component={Home}/> 
        <Route path="/sign-up" component={SignUp}/>
        <Route path="/about"  component={About}/>
  {/* admin */}
        <Route path="/admin" exact component={Dashboard}/>
        <Route path="/admin/user"  component={User}/>
        <Route path="/admin/product" component={Product}/>

        <Route component={NotFound}/>
    </Switch>
  )
}
