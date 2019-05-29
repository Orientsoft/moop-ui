import React, { useState } from 'react';
import { Message, Button, Dialog } from '@alifd/next';
import { Link } from 'react-router-dom';
import { user, captcha as captchaAPI } from '@/utils/api';
import { startCounter } from '@/utils/helper';
import consts from '@/utils/consts';

export default ({ history }) => {
  const [values, setValues] = useState({});
  const [visible, setVisible] = useState(false);
  const [counter, setCounter] = useState(null);
  const [captchaUrl, setCaptchaUrl] = useState('#');
  const onSubmit = () => {
    const { mobile, code, key, password } = values;

    if (key !== password) {
      Message.error('两次密码输入不一致');
    } else if (mobile && code && key) {
      user.resetPassword({ data: { mobile, code, key } }).then(({ data }) => {
        if (!data.gender) {
          data.gender = consts.sex.MALE;
        }
        if (!data.thumb) {
          if (data.gender === consts.sex.MALE) {
            data.thumb = '/static/images/headerboy.png';
          } else {
            data.thumb = '/static/images/headgirl.png';
          }
        }
        Message.success('更新成功');
        setTimeout(() => history.push('/login'), 1000);
      }).catch(() => Message.error(<span className="text-danger">忘记密码？请联系管理员重置</span>));
    } else {
      Message.error('必填项不能为空');
    }
  };
  const setField = name => e => setValues({ ...values, [name]: e.target.value.trim() });
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
    <div className="bglog" style={{ height: '100vh' }}>
      <div className="container p-t-60">
        <h2 className="text-center"><Link className="navbar-brand logo" to="/"><i>M</i><span>oopLab</span></Link></h2>
        <div className="row justify-content-center">
          <div className="col-5">
            <div className=" card-box m-t-20">
              <h3 className="text-center uppercase">找回密码</h3>
              <div className="panel-body">
                <div className="form-horizontal m-t-30">
                  <div className="form-group">
                    <div className="col-12">
                      <input className="form-control" onChange={setField('mobile')} type="text" required placeholder="请输入手机号" />
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
                      <input className="form-control" onChange={setField('key')} type="password" required placeholder="请输入新密码" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-12">
                      <input className="form-control" onChange={setField('password')} type="password" required placeholder="确认密码" />
                    </div>
                  </div>
                  <div className="form-group text-center m-t-40">
                    <div className="col-12">
                      <button className="btn loginbnt btn-block" onClick={onSubmit}>提交</button>
                    </div>
                  </div>
                  <div className="form-group m-t-30 m-b-0">
                    <div className="col-12">没有帐号？<Link to="/register">注册</Link></div>
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
