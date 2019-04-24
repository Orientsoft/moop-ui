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
          <div className="form-group">
            <div className="col-12">
              <input className="form-control" value={values.mobile} onChange={setField('mobile')} type="text" required placeholder="手机号" />
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
          <div className="form-group text-center m-t-40">
            <div className="col-12">
              <button className="btn loginbnt btn-block" onClick={onSubmit}>保存</button>
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
