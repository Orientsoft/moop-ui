import React, { useEffect } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import get from 'lodash-es/get';
import { headerMenuConfig } from '@/menuConfig';
import { getCurrentUser, getCurrentTenant } from '@/utils/helper';
import consts from '@/utils/consts';

export default ({ onLogout, history }) => {
  const [active, setActive] = React.useState('/');	
  const user = getCurrentUser();
  const tenant = getCurrentTenant();
  const { pathname } = history.location;

  function onActive(k){
	  return function(){
		setActive(k)
	  }
  }

  function getClassName(k){
	  return k === active ? "nav-item active": "nav-item"
  }
  
  useEffect(() => {
	setActive(location.pathname)
  }, [location.pathname])

  return (
		<nav className="navbar navbar-expand-lg bg-white navbar-dark">
			<div className="container-navbar">
				<div className="row">
					<div className="col-lg-3 col-sm-12 col-md-12 col-12">
						<Link className="navbar-brand logo" to="/" onClick={onActive('/')}>
									<img src="../images/logo.png" />
						</Link>
						<button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
							<span className="navbar-toggler-icon"></span>
						</button>
					</div>
					<div className="col-lg-9 col-12">
						<div className="collapse navbar-collapse" id="collapsibleNavbar" style={{position: 'relative'}}>
							<ul className="navbar-nav">
								<li className={getClassName("/")}>
									<Link className="nav-link" to="/" onClick={onActive("/")}>
										平台首页
									</Link>  
								</li>
								<li className={getClassName('/faculty')}>
									<Link className="nav-link" to="/faculty" onClick={onActive('/faculty')}>教师团队</Link>
								</li>
								<li className={getClassName('/knowledge')}>
									<Link className="nav-link" to="/knowledge" onClick={onActive('/knowledge')}>实验介绍</Link>
								</li>
							  <li className={getClassName('/virtual')}>
								  <a className="nav-link" href="https://bwu.mooplab.com/classroom?id=5fa3ba79b8000861a6fd18da" onClick={onActive('/ https://bwu.mooplab.com/classroom?id=5fa3ba79b8000861a6fd18da')}>实验界面</a>
								</li>  
								{/* <li className={getClassName('/assessment')}>
									<Link className="nav-link" to="/assessment" onClick={onActive('/assessment')}>考核评价</Link>
								</li> */}
								<li className={getClassName('/declaration')}>
									<Link className="nav-link" to="/declaration" onClick={onActive('/declaration')}>项目申报</Link>
								</li>
							</ul>
       
                {user ? (
                  <div className="login-register float-right">
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
                  <div className="login-register float-right">
                    {/* <Link to="/register">注册</Link> */}
                    <Link to="/login" className="btn btn-success">登录</Link>
                  </div>
                )}
		
            </div>
					</div>
				</div>
			</div>
		</nav>
  );
};
