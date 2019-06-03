import React from 'react';
import { Input, Message, Dialog } from '@alifd/next';
import EurekaForm from '@/components/EurekaForm';
import { user } from '@/utils/api';
import { removeCurrentUser } from '@/utils/helper';
import get from 'lodash-es/get';

const items = [{
  label: <span className="col-sm-2 col-form-label">原始密码</span>,
  required: true,
  render: () => <Input htmlType="password" name="key" style={{ width: '100%' }} className="form-check col-sm-8" />,
}, {
  label: <span className="col-sm-2 col-form-label">新密码</span>,
  required: true,
  render: () => <Input htmlType="password" name="newKey" style={{ width: '100%' }} className="form-check col-sm-8" placeholder="8位以上的数字和字母组合" />,
}, {
  label: <span className="col-sm-2 col-form-label">确认密码</span>,
  required: true,
  render: () => <Input htmlType="password" name="password" style={{ width: '100%' }} className="form-check col-sm-8" placeholder="8位以上的数字和字母组合" />,
}];

export default (props) => {
  const onClick = ({ key, newKey, password }, form) => {
    form.field.validate(() => {
      if (newKey !== password) {
        Message.error('两次输入不一致，请重新输入');
      } else if (!(/[0-9]+/.test(newKey) && /[a-zA-Z]+/.test(newKey) && newKey.length >= 8)) {
        Message.error('密码格式错误，必须是8位以上的数字和字母组合');
      } else {
        user.update({ data: { key, newKey } }, { userId: props.user.id }).then(() => {
          removeCurrentUser();
          Dialog.show({
            title: '更新成功',
            content: '更新密码后需要重新登录',
            onOk: () => location.href = '/login',
            onClose: () => location.href = '/login',
            onCancel: () => location.href = '/login',
          });
        });
      }
    });
  };

  return <EurekaForm items={items} submitProps={{ onClick }} />;
};
