import React from 'react';
import { Input, Message } from '@alifd/next';
import EurekaForm from '@/components/EurekaForm';
import { user } from '@/utils/api';

const items = [{
  label: '新密码',
  required: true,
  render: () => <Input htmlType="password" name="key" />,
}, {
  label: '确认密码',
  required: true,
  render: () => <Input htmlType="password" name="password" />,
}];

export default (props) => {
  const onClick = ({ key, password }, form) => {
    form.field.validate(() => {
      if (key !== password) {
        Message.error('两次输入不一致，请重新输入');
      } else {
        user.update({ data: { key } }, { userId: props.user.id }).then(() => {
          Message.success('更新成功');
        });
      }
    });
  };

  return <EurekaForm items={items} submitProps={{ onClick }} />;
};
