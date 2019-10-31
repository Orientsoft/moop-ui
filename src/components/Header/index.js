import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import get from 'lodash-es/get';
import { headerMenuConfig } from '@/menuConfig';
import { getCurrentUser, getCurrentTenant } from '@/utils/helper';
import consts from '@/utils/consts';

export default ({ onLogout, history }) => {
  const user = getCurrentUser();
  const tenant = getCurrentTenant();
  const { pathname } = history.location;

  return (
    <header className={classnames({ 'bd-navbar': true, 'bd-index': pathname === '/' })}>
      <div className="container ">
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
          <Link className="navbar-brand logo" to="/">
            {get(tenant, 'logo.0') ? <img src={get(tenant, 'logo.0')} alt="" height="60" /> : <span><i>M</i>oopLab</span>}
          </Link>
          {/* <a className="m-r-15" href="https://github.com/jupyter/design" target="_blank" >
            <img height="35" src="/static/images/jupter-l.png" alt="Jupyter logo" />
          </a> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* eslint-disable */}
            <ul className="navbar-nav mr-auto">
              {headerMenuConfig.map((menu, i) => (
                <li key={i} className={classnames('nav-item', { active: pathname === menu.path })}>
                  <Link className="nav-link" to={menu.path}>{menu.name}</Link>
                </li>
              ))}
              {/* <li  className='nav-item'>
                <a className="nav-link" href="https://docs.mooplab.com" target="_blank">用户文档</a>
              </li> */}
            </ul>
            {/* eslint-enable */}
            {user ? (
              <div className="my-2 my-lg-0">
                <div className="dropdown usertop">
                  <span style={{ color: 'lightgrey', fontSize: 17, marginRight: 10, verticalAlign: 'middle' }}>{user.role === consts.user.TEACHER ? '教师' : '学生'}</span>
                  <img src={user.thumb} alt={user.name} className="rounded-circle dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {/* <Link className="dropdown-item" to="/users/courses">我的课题</Link> */}
                    <Link className="dropdown-item" to="/users/profile">设置</Link>
                    <a className="dropdown-item" onClick={onLogout}>退出</a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="my-2 my-lg-0 regbnt">
                {/* <Link to="/register">注册</Link> */}
                <Link to="/login" className="toploginbtn">登录</Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
