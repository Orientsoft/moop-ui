import React from 'react';
import { Input, Message } from '@alifd/next';
import EurekaForm from '@/components/EurekaForm';
import { user } from '@/utils/api';
import get from 'lodash-es/get';

const items = [{
  label: '原始密码',
  required: true,
  render: () => <Input htmlType="password" name="key" />,
}, {
  label: '新密码',
  required: true,
  render: () => <Input htmlType="password" name="newKey" />,
}, {
  label: '确认密码',
  required: true,
  render: () => <Input htmlType="password" name="password" />,
}];

export default (props) => {
  const onClick = ({ key, newKey, password }, form) => {
    form.field.validate(() => {
      if (newKey !== password) {
        Message.error('两次输入不一致，请重新输入');
      } else {
        user.update({ data: { key, newKey } }, { userId: props.user.id }).then(() => {
          Message.success('更新成功');
        }).catch(err => Message.error(get(err, 'response.data.msg', err.message)));
      }
    });
  };

  return <EurekaForm items={items} submitProps={{ onClick }} />;
};
