import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Message, Button, Dialog, Checkbox } from '@alifd/next';
import { user, captcha as captchaAPI } from '@/utils/api';
import { startCounter } from '@/utils/helper';
import consts from '@/utils/consts';

export default ({ history }) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const [counter, setCounter] = useState(null);
  const [visible, setVisible] = useState(false);
  const [agree, setAgree] = useState(false);
  const [captchaUrl, setCaptchaUrl] = useState('#');
  const [closeTip, setCloseTip] = useState(false);

  const onSubmit = () => {
    const { name, key, code, password, mobile, invitation } = values;

    if (!(name && key && password && mobile && code && invitation)) {
      Message.error('数据不能为空');
      return;
    }
    if (key !== password) {
      Message.error('两次输入密码不一致');
      return;
    }
    if (Object.values(errors).find(error => error)) {
      Message.error('数据格式错误');
      return;
    }
    user.create({
      data: { name, key, code, mobile, invitation, role: consts.user.STUDENT },
    }).then(() => {
      Message.success('注册成功');
      setTimeout(() => history.push('/login'), 1000);
    });
  };
  const setField = name => (e) => {
    const value = e.target.value.trim();

    if (!value) {
      setErrors({ ...errors, [name]: false });
      return;
    }
    if (name === 'name') {
      if (!/^[a-z0-9]+$/.test(value)) {
        setErrors({ ...errors, [name]: '用户名格式不正确' });
      } else {
        setErrors({ ...errors, [name]: false });
      }
    } else if (name === 'key' || name === 'password') {
      if (name === 'password') {
        if (value !== values.key) {
          setErrors({ ...errors, [name]: '两次输入密码不一致' });
        } else {
          setErrors({ ...errors, [name]: errors.key });
        }
      } else if (/^[a-zA-Z0-9]{8,}$/.test(value)) {
        if (!/[a-zA-Z]+/.test(value)) {
          setErrors({ ...errors, [name]: '密码必须包含字母' });
        } else if (!/[0-9]+/.test(value)) {
          setErrors({ ...errors, [name]: '密码必须包含数字' });
        } else {
          setErrors({ ...errors, [name]: false });
        }
      } else {
        setErrors({ ...errors, [name]: '密码格式不正确' });
      }
    } else if (name === 'mobile') {
      if (!/^1[0-9]{10}$/.test(value)) {
        setErrors({ ...errors, [name]: '手机号格式不正确' });
      } else {
        setErrors({ ...errors, [name]: false });
      }
    }
    setValues({ ...values, [name]: value });
  };
  const refreshCaptcha = () => captchaAPI.refresh().then(({ data }) => setCaptchaUrl(data));
  const onSendCode = () => {
    if (counter > 0) return;
    refreshCaptcha();
    setVisible(true);
  };
  const onSendOk = () => {
    const { captcha, mobile } = values;

    setVisible(false);
    user.sendVerifyCode({ data: { mobile, captcha } }).then(() => {
      startCounter(60, n => setCounter(n));
    });
  };

  return (
    // <div className="bglog" style={{ height: '100vh' }}>
    <div className="bglog" style={{ height: '100vh' }}>
      <div className="container p-t-60 povr">
        <h2 className="text-center"><a className="navbar-brand logo" href="/"><span>K</span><span style={{ color: '#01ab71' }}>@</span><span>S</span>&nbsp;<span>Lab</span></a></h2>
        {/* <div className="reg_tipbox" style={{ display: closeTip ? 'none' : '' }}>
          <a href="#" className="closebnt" onClick={() => setCloseTip(true)} />
          <h4>成为贡献者或老师</h4>
          <div className="reg_tipinfo">请您联系我们：<br />邮箱：<span>support@mooplab.com</span></div>
        </div> */}
        <div className="row justify-content-center">
          <div className="col-5">
            <div className=" card-box m-t-20">
              <h3 className="text-center uppercase">注册</h3>
              <div className="panel-body">
                <div className="form-horizontal m-t-30">
                  <div className="form-group">
                    <div className="col-12">
                      <input className="form-control" onChange={setField('name')} type="text" required placeholder="用户名，小写字母或数字" />
                      <span style={{ position: 'absolute', color: 'red', fontSize: 12 }}>{errors.name}</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-12">
                      <input className="form-control" onChange={setField('key')} type="password" required placeholder="密码，8位以上的数字和字母组合" />
                      <span style={{ position: 'absolute', color: 'red', fontSize: 12 }}>{errors.key}</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-12">
                      <input className="form-control" onChange={setField('password')} type="password" required placeholder="再次输入密码" />
                      <span style={{ position: 'absolute', color: 'red', fontSize: 12 }}>{errors.password}</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-12">
                      <input className="form-control" onChange={setField('mobile')} type="text" required placeholder="手机号" />
                      <span style={{ position: 'absolute', color: 'red', fontSize: 12 }}>{errors.mobile}</span>
                    </div>
                  </div>
                  <div className="form-group form-inline">
                    <div className="col-6">
                      <input style={{ marginTop: 0 }} className="form-control" onChange={setField('code')} type="text" required placeholder="手机验证码" />
                    </div>
                    <div className="col-6">
                      <Button type="secondary" onClick={onSendCode}>{counter ? `重新发送(${counter}s)` : '发送验证码'}</Button>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-12">
                      <input className="form-control" onChange={setField('invitation')} required placeholder="邀请码" />
                    </div>
                  </div>
                  <div className="form-group m-t-10">
                    <div className="col-sm-12 text-left fs14">
                      <Checkbox onChange={v => setAgree(v)}>我同意</Checkbox><Link to="/help">《服务协议》</Link>
                    </div>
                    <div className="col-12  m-t-10 text-center ">
                      <button disabled={!agree} className="btn loginbnt btn-block" onClick={onSubmit}>注册</button>
                    </div>
                  </div>
                  <div className="form-group m-t-10 m-b-0">
                 
                    <div className="col-sm-12">
                      已有帐号？<Link to="/login">登录</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Dialog visible={visible} title="请输入图形验证码" onOk={onSendOk} onCancel={() => setVisible(false)}>
          <div className="form-horizontal m-t-30">
            <div className="form-group form-inline">
              <div className="col-6">
                <input style={{ marginTop: 0, width: '100%' }} className="form-control" onChange={setField('captcha')} type="text" required placeholder="图形验证码" />
              </div>
              <div className="col-6">
                <img src={`data:image/png;base64,${captchaUrl}`} alt="图形验证码" onClick={refreshCaptcha} />
              </div>
            </div>
          </div>
        </Dialog>
      </div>
      <div className="container text-center p-30">
        <span className="fade-half">© 版权所有 MoopLab</span>
      </div>
    </div>
  );
};
