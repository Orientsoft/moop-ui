import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Message } from '@alifd/next';
import { user, captcha as captchaAPI } from '@/utils/api';
import consts from '@/utils/consts';

export default ({ history }) => {
  const [values, setValues] = useState({});
  const [captchaUrl, setCaptchaUrl] = useState('#');
  const onSubmit = () => {
    const { name, key, password, captcha, invitation } = values;

    if (key !== password) {
      Message.error('两次密码输入不一致');
    } else if (!(/[0-9]+/.test(key) && /[a-zA-Z]+/.test(key) && key.length >= 8)) {
      Message.error('密码格式错误，必须是8位以上的数字和字母组合');
    } else if (name && key && captcha && key === password && invitation) {
      user.create({
        data: { name, key, captcha, invitation, role: consts.user.STUDENT },
      }).then(() => {
        Message.alert('注册成功');
        setTimeout(() => history.push('/login'), 1000);
      });
    } else {
      Message.error('必填项不能为空');
    }
  };
  const setField = name => e => setValues({ ...values, [name]: e.target.value.trim() });
  const refreshCaptcha = () => captchaAPI.refresh().then(({ data }) => setCaptchaUrl(data));

  useEffect(() => {
    refreshCaptcha();
  }, []);

  return (
    // <div className="bglog" style={{ height: '100vh' }}>
    <div className="bglog" style={{ height: '100vh' }}>
      <div className="container p-t-60">
        <h2 className="text-center"><a className="navbar-brand logo" href="/"><i>E</i><span>ureka</span></a></h2>
        <div className="row justify-content-center">
          <div className="col-5">
            <div className=" card-box m-t-40">
              <h3 className="text-center uppercase">注册</h3>
              <div className="panel-body">
                <div className="form-horizontal m-t-30">
                  <div className="form-group">
                    <div className="col-12">
                      <input className="form-control" onChange={setField('name')} type="text" required placeholder="用户名" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-12">
                      <input className="form-control" onChange={setField('key')} type="password" required placeholder="密码, 8位以上的数字和字母组合" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-12">
                      <input className="form-control" onChange={setField('password')} type="password" required placeholder="再次输入密码" />
                    </div>
                  </div>
                  <div className="form-group form-inline">
                    <div className="col-6">
                      <input style={{ marginTop: 0 }} className="form-control" onChange={setField('captcha')} type="text" required placeholder="验证码" />
                    </div>
                    <div className="col-6">
                      {/* eslint-disable */}
                      <img src={`data:image/png;base64,${captchaUrl}`} alt="验证码" onClick={refreshCaptcha} />
                      {/* eslint-enable */}
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-12">
                      <input className="form-control" onChange={setField('invitation')} required placeholder="邀请码" />
                    </div>
                  </div>
                  <div className="form-group text-center m-t-40">
                    <div className="col-12">
                      <button className="btn loginbnt btn-block" onClick={onSubmit}>注册</button>
                    </div>
                  </div>
                  <div className="form-group m-t-30 m-b-0">
                    <div className="col-sm-12">
                      已有帐号？<Link to="/login">登录</Link>
                    </div>
                  </div>
                </div>
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
