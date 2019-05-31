import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import { getCurrentUser } from '@/utils/helper';
import consts from '@/utils/consts';
import { logout } from '../../api';
import Header from './components/Header';
import Aside from './components/Aside';
import MainRoutes from './MainRoutes';
import './index.scss';

export default class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.user = getCurrentUser();
  }

  onLogout = () => {
    logout();
    this.props.history.push('/login');
  };

  render() {
    if (!this.user || this.user.role !== consts.user.CONTRIBUTOR) {
      this.props.history.push('/login');
      return null;
    }

    return this.user && (
      <Layout
        fixable
        style={{ minHeight: '100vh' }}
        className="ice-design-layout"
      >
        <Layout.Section>
          <Layout.Aside width={240}>
            <Aside />
          </Layout.Aside>

          <Layout.Main scrollable>
            <Layout.Header>
              <Header user={this.user} onLogout={this.onLogout} />
            </Layout.Header>
            <div className="main-container">
              <MainRoutes />
            </div>
          </Layout.Main>
        </Layout.Section>
      </Layout>
    );
  }
}
