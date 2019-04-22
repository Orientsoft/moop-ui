import React from 'react';
import EurekaForm from '@/components/EurekaForm';

export default ({ user }) => {
  const items = [{
    label: '',
    wrapperCol: { span: 24 },
    render: () => (
      <div className="inputinfoation" >
        <p>你的邀请码是：</p>
        <h2 className="m-t-10 ">{user.invitation ? user.invitation : '暂无邀请码'}</h2>
        <div className="m-t-10 alert alert-warning alert-dismissible fade show" role="alert">
          <strong>注意</strong>， 请把以上邀请码复制给被邀请的学生。
          {/* <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button> */}
        </div>
        {/* <Button className="m-t-10" style={{ width: 100 }}>复制</Button> */}
      </div>
    ),
  }];

  return <EurekaForm items={items} />;
};
