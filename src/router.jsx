import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BasicLayout from '@/layouts/BasicLayout';
import Login from '@/pages/Login';
import ForgotPassword from '@/pages/Login/ForgotPassword';
import Register from '@/pages/Register';

export default (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/forgot_pass" component={ForgotPassword} />
      <Route path="/register" component={Register} />
      <Route path="/" component={BasicLayout} />
    </Switch>
  </Router>
);
