import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { user } from '../../utils/api';
import './index.scss';

export default class Header extends Component {
  state = { isLogin: false };

  componentDidMount() {
    user.select({}, { userId: 'mine' }).then(() => {
      this.setState({ isLogin: true });
    });
  }

  render() {
    const { isLogin } = this.state;

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
          {isLogin ? (
            <Fragment>
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
