import React, { useState } from 'react';
import { Message, Button, Dialog } from '@alifd/next';
import { user, captcha as captchaAPI } from '@/utils/api';
import { startCounter, setCurrentUser } from '@/utils/helper';

export default (props) => {
  const [values, setValues] = useState({ mobile: props.user.mobile });
  const [visible, setVisible] = useState(false);
  const [counter, setCounter] = useState(null);
  const [captchaUrl, setCaptchaUrl] = useState('#');
  const setField = name => e => setValues({ ...values, [name]: e.target.value.trim() });
  const refreshCaptcha = () => captchaAPI.refresh().then(({ data }) => setCaptchaUrl(data));
  const onSubmit = () => {
    const { code, mobile } = values;

    if (!/1[0-9]{10,}/.test(mobile)) {
      Message.error('手机号格式错误');
    } else if (code && mobile) {
      user.updateMobile({
        data: { code, mobile },
      }).then(({ data }) => {
        setCurrentUser(data);
        Message.success('修改成功');
      });
    } else {
      Message.error('必填项不能为空');
    }
  };
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
    <div className="row justify-content-center">
      <div className="col-5">
        <div className="form-horizontal m-t-30">
          <div className="form-group row" >
            <span className="col-3 col-form-label ">请输入手机号：</span>
            <input className="form-control col-6" value={values.mobile} onChange={setField('mobile')} type="text" required placeholder="手机号" />
          </div>
          <div className="form-group form-inline row">
            <span className="col-3 col-form-label ">请输入验证码：</span>
            <input style={{ marginTop: 0 }} className="form-control col-3 m-r-10" onChange={setField('code')} type="text" required placeholder="手机验证码" />
            <Button type="secondary" className="col-2" onClick={onSendCode}>{counter ? `重新发送(${counter}s)` : '发送验证码'}</Button>
          </div>
          <div className="form-group text-center m-t-40">
            <div className="col-4 offset-4">
              <button className="btn loginbnt btn-block serverbtn" onClick={onSubmit}>保存</button>
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
  );
};
