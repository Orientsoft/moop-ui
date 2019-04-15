import React from 'react';
import { Button } from '@alifd/next';
import EurekaForm from '@/components/EurekaForm';

export default ({ user }) => {
  const items = [{
    label: '',
    wrapperCol: { span: 24 },
    render: () => (
      <div style={{ textAlign: 'center' }}>
        <p>请把以下邀请码复制给被邀请的学生。</p>
        <h2 className="m-t-10">{user.invitation ? user.invitation : '暂无邀请码'}</h2>
        <Button className="m-t-10" style={{ width: 100 }}>复制</Button>
      </div>
    ),
  }];

  return <EurekaForm items={items} />;
};
