import React from 'react';
import { Input, Message } from '@alifd/next';
import EurekaForm from '@/components/EurekaForm';
import { user } from '@/utils/api';
import { removeCurrentUser } from '@/utils/helper';
import get from 'lodash-es/get';

const items = [{
  label: <span className="col-sm-2 col-form-label">原始密码</span>,
  required: true,
  render: () => <div className="form-check col-sm-8 "><Input htmlType="password" name="key" style={{ width: '100%' }} /></div>,
}, {
  label: <span className="col-sm-2 col-form-label">新密码</span>,
  required: true,
  render: () => <div className="form-check col-sm-8 "><Input htmlType="password" name="newKey" style={{ width: '100%' }} /></div>,
}, {
  label: <span className="col-sm-2 col-form-label">确认密码</span>,
  required: true,
  render: () => <div className="form-check col-sm-8 "><Input htmlType="password" name="password" style={{ width: '100%' }} /></div>,
}];

export default (props) => {
  const onClick = ({ key, newKey, password }, form) => {
    form.field.validate(() => {
      if (newKey !== password) {
        Message.error('两次输入不一致，请重新输入');
      } else {
        user.update({ data: { key, newKey } }, { userId: props.user.id }).then(() => {
          removeCurrentUser();
          location.href = '/login';
        }).catch(err => Message.error(get(err, 'response.data.msg', err.message)));
      }
    });
  };

  return <EurekaForm items={items} submitProps={{ onClick }} />;
};
