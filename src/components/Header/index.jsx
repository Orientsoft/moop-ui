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
    } else if (key === 'classroom') {
      this.props.history.push('/user/myclassroom');
    } else if (key === 'settings') {
      this.props.history.push('/userteacherclassroom');
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
                <Item key="classroom">我的专题</Item>
                <Item key="settings">个人设置</Item>
                <Item key="logout">退出登录</Item>
              </MenuButton>
            </Fragment>
          ) : <Link to="/user/login" className="reg">登录</Link>}
        </div>
      </div>
    );
  }
}
