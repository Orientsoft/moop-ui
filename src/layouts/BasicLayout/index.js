import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '@icedesign/layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NotFound from '@/components/NotFound';
import { removeCurrentUser } from '@/utils/helper';
import routerData from '@/routerConfig';

export default class BasicLayout extends Component {
  onLogout = () => {
    removeCurrentUser();
    this.props.history.replace('/login');
  };

  render() {
    return (
      <Layout fixable>
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
      </Layout>
    );
  }
}
