import React from 'react';
import { Button } from '@alifd/next';
import EurekaForm from '@/components/EurekaForm';

export default ({ user }) => {
  const items = [{
    label: '邀请码',
    render: () => <Button>{user.invitation ? user.invitation : '暂无邀请码'}</Button>,
  }];

  return <EurekaForm items={items} />;
};
