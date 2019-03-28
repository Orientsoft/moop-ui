import React, { useState } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { headerMenuConfig } from '@/menuConfig';

export default ({ onLogout }) => {
  const [active, setActive] = useState(0);

  return (
    <header className="bd-navbar">
      <div className="container ">
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
          <a className="navbar-brand logo" href="index.html"><i>E</i><span>ureka</span></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* eslint-disable */}
            <ul className="navbar-nav mr-auto">
              {headerMenuConfig.map((menu, i) => (
                <li key={i} className={classnames('nav-item', { active: active === i })} onClick={() => setActive(i)}>
                  <Link className="nav-link" to={menu.path}>{menu.name}</Link>
                </li>
              ))}
            </ul>
            {/* eslint-enable */}
            <div className="my-2 my-lg-0">
              <div className="dropdown usertop">
                <img src="/static/images/user.jpg" alt="..." className="rounded-circle dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link className="dropdown-item" to="/user/courses">我的专题</Link>
                  <Link className="dropdown-item" to="/user/profile">设置</Link>
                  <a className="dropdown-item" onClick={onLogout}>退出</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
