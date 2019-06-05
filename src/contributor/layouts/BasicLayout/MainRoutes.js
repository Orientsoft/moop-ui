import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { contributorRoutes as routerData } from '../../../routerConfig';

class MainRoutes extends Component {
  /**
   * 渲染路由组件
   */
  renderNormalRoute = (item, index) => {
    return item.component ? (
      <Route
        key={index}
        path={item.path}
        component={item.component}
        exact={item.exact}
      />
    ) : null;
  };

  render() {
    return (
      <Switch>
        {/* 渲染路由表 */}
        {routerData.map(this.renderNormalRoute)}

        {/* 根路由默认重定向到 /dashboard */}
        <Redirect from="/contributor" to="/contributor/dashboard" />
      </Switch>
    );
  }
}

export default MainRoutes;
