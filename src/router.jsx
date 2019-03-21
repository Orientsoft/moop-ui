/**
 * 定义应用路由
 */
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import BlankLayout from './layouts/BlankLayout';

const router = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={BlankLayout} />
      </Switch>
    </Router>
  );
};

export default router();
