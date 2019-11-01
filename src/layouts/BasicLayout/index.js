import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '@icedesign/layout';
import queryString from 'query-string';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NotFound from '@/components/NotFound';
import { getCurrentUser, removeCurrentUser, removeCurrentTenant, setCurrentTenant, getCurrentTenant } from '@/utils/helper';
import { user, tenant } from '@/utils/api';
import consts from '@/utils/consts';
import routerData from '@/routerConfig';

export default class BasicLayout extends Component {
  constructor(props) {
    super(props);

    const current = getCurrentUser();

    this.hasPermission = true;
    if (current) {
      if (current.role === consts.user.CONTRIBUTOR) {
        props.history.push('/tenant');
        this.hasPermission = false;
      } else if (current.role === consts.user.SUPER) {
        props.history.push('/contributor');
        this.hasPermission = false;
      }
    }
  }

  componentDidMount() {
    const { location } = this.props;
    const url = queryString.parse(location.search);

    // 从第三方页面跳转过来时不需要取租户，避免多次重定向到登录页
    if (!url.token) {
      if (location.pathname === '/') {
        tenant.current().then(({ data }) => {
          setCurrentTenant(data);
          this.forceUpdate();
        });
      } else if (!getCurrentTenant()) {
        tenant.current().then(({ data }) => {
          setCurrentTenant(data);
          this.forceUpdate();
        });
      }
    }
  }

  onLogout = () => {
    user.logout();
    removeCurrentUser();
    removeCurrentTenant();
    location.href = `/login?from=${encodeURIComponent(location.href.replace(location.origin, ''))}`;
  };

  render() {
    return this.hasPermission && (
      <div>
        <Header onLogout={this.onLogout} history={this.props.history} />
        <Layout.Section>
          <Layout.Main scrollable>
            <Switch>
              {routerData.filter(item => item.component).map((item, i) => (
                <Route key={i} exact path={item.path} component={item.component} />
              ))}
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </Layout.Main>
        </Layout.Section>
      </div>
    );
  }
}
