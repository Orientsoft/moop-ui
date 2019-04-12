import React, { Fragment } from 'react';
import { Tab } from '@alifd/next';
import EurekaBanner from '@/components/EurekaBanner';
import { isTeacher } from '@/utils';
import { getCurrentUser } from '@/utils/helper';
import Settings from './Settings';
import Password from './Password';
import Invitation from './Invitation';

export default () => {
  const user = getCurrentUser();

  return (
    <Fragment>
      <EurekaBanner>
        <div className="row">
          <div className="col-12 col-md-6">
            <h2 className="large">设置</h2>
          </div>
        </div>
      </EurekaBanner>
      <Tab navStyle={{ padding: '0 10%' }} contentStyle={{ padding: '30px 0' }}>
        <Tab.Item title="设置">
          <Settings user={user} />
        </Tab.Item>
        <Tab.Item title="密码修改">
          <Password user={user} />
        </Tab.Item>
        {isTeacher(user) && (
          <Tab.Item title="我的邀请码">
            <Invitation user={user} />
          </Tab.Item>
        )}
      </Tab>
    </Fragment>
  );
};
