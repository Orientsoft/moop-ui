import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BasicLayout from '@/layouts/BasicLayout';
import Login from '@/pages/Login';
import ForgotPassword from '@/pages/Login/ForgotPassword';
import Register from '@/pages/Register';
import TenantLayout from '@/tenant/layouts/BasicLayout';
import ContributorLayout from '@/contributor/layouts/BasicLayout';
import ShareClassroom from '@/pages/ShareClassroom';

export default (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/forgot_pass" component={ForgotPassword} />
        <Route path="/register" component={Register} />
        <Route path="/tenant" component={TenantLayout} />
        <Route path="/contributor" component={ContributorLayout} />
        <Route path="/share_classroom" component={ShareClassroom} />
        <Route path="/" component={BasicLayout} />
      </Switch>
    </Suspense>
  </Router>
);
