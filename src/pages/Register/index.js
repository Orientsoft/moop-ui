import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="bglog" style={{ height: '100vh' }}>
      <div className="container p-t-60">
        <h2 className="text-center"><a className="navbar-brand logo" href="index.html"><i>E</i><span>ureka</span></a></h2>
        <div className="row justify-content-center">
          <div className="col-6">
            <div className=" card-box m-t-40">
              <h3 className="text-center uppercase">注册</h3>
              <div className="panel-body">
                <form className="form-horizontal m-t-30" >
                  <div className="form-group ">
                    <div className="col-12">
                      <input className="form-control" type="text" required="" placeholder="手机号" />
                    </div>
                  </div>
                  <div className="form-group row" style={{ marginRight: 0, marginLeft: 0 }}>
                    <div className="col-12 col-md-7 ">
                      <input className="form-control" type="password" required placeholder="请输入验证码" />
                    </div>
                    <div className="col-12 col-md-5 m-t-20">
                      <button className="btn loginbnt  btn-block  savecouse" type="submit">获取验证码</button>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-12">
                      <input className="form-control" type="password"required="" placeholder="请输入验密码" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-12">
                      <input className="form-control" type="password" required="" placeholder="邀请码（可选）" />
                    </div>
                  </div>
                  <div className="form-group text-center m-t-40">
                    <div className="col-12">
                      <button className="btn loginbnt  btn-block" type="submit">注册</button>
                    </div>
                  </div>
                  <div className="form-group m-t-30 m-b-0">
                    <div className="col-sm-12">
                      已有帐号？<Link to="/login">登录</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center p-30">
        <span className="fade-half">© 版权所有 Eureka</span>
      </div>
    </div>
  );
};
