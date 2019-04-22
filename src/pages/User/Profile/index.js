import React, { Fragment } from 'react';
// import { Tab } from '@alifd/next';
import Tab from '@/components/Tab';
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
            <h3 className="large">设置</h3>
          </div>
        </div>
      </EurekaBanner>
      <Tab >
        <Tab.Item title="设置" >
          <div className="p-t-60 p-b-60 p-l-r-30">
            <Settings user={user} />
          </div>
        </Tab.Item>
        <Tab.Item title="密码修改">
          <div className="p-t-60 p-b-60">
            <Password user={user} />
          </div>
        </Tab.Item>
        {isTeacher(user) && (
          <Tab.Item title="我的邀请码">
            <div className="p-t-60 p-b-60">
              <Invitation user={user} />
            </div>
          </Tab.Item>
        )}
      </Tab>
    </Fragment>
  );
};
