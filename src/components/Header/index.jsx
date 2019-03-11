import React, { Component } from 'react';

import Logo from '../Logo';
import { headerMenuConfig } from '../../menuConfig';
import './index.scss';

console.log(headerMenuConfig);
export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-content">
          <Logo />
          <div className="header-navbar">
            <ul className="next-menu">
              <li className="next-menu-item">  <a href="#/home" className="active">首页</a></li>
              <li className="next-menu-item">  <a href="#/classroom/list">专题</a></li>
            </ul>
          </div>
          <a href="#/user/login" className="reg">登录</a>
        </div>
      </div>
    );
  }
}
