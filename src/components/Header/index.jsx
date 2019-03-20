import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuButton } from '@alifd/next';
import Logo from '../Logo';
import { user } from '../../utils/api';
import { getCurrentUser, removeCurrentUser } from '../../utils/helper';
import './index.scss';

const { Item } = MenuButton;

export default class Header extends Component {
  state = {
    current: getCurrentUser(),
  };

  onItemClick = (key) => {
    if (key === 'logout') {
      user.logout().then(() => {
        this.setState({ current: null });
        removeCurrentUser();
        this.props.history.replace('/home');
      });
    }
  };

  render() {
    const { current } = this.state;

    return (
      <div className="header-container">
        <div className="header-content">
          <Logo />
          <div className="header-navbar">
            <ul className="next-menu">
              <li className="next-menu-item"><Link to="/home" className="active">首页</Link></li>
              <li className="next-menu-item"><Link to="/classroom/list">专题</Link></li>
            </ul>
          </div>
          {current ? (
            <Fragment>
              <MenuButton className="reg" label={current.name} onItemClick={this.onItemClick}>
                <Item key="logout">退出登录</Item>
              </MenuButton>
              <Link to="/user/myclassroom" className="reg">我的专题</Link>
              <Link to="/userteacherclassroom" className="reg">老师专题</Link>
              <Link to="/user/profile" className="reg">档案</Link>
            </Fragment>
          ) : <Link to="/user/login" className="reg">登录</Link>}
        </div>
      </div>
    );
  }
}
