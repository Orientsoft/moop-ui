import React, { Fragment } from 'react';
// import { Tab } from '@alifd/next';
import Tab from '@/components/Tab';
import EurekaBanner from '@/components/EurekaBanner';
import { isTeacher } from '@/utils';
import { getCurrentUser } from '@/utils/helper';
import Settings from './Settings';
import Password from './Password';
import Mobile from './Mobile';
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
          <div className="p-t-60 p-b-60 p-l-r-30 centminheight">
            <Settings user={user} />
          </div>
        </Tab.Item>
        <Tab.Item title="密码修改">
          <div className="p-t-60 p-b-60 centminheight">
            <Password user={user} />
          </div>
        </Tab.Item>
        <Tab.Item title="手机绑定">
          <div className="p-t-60 p-b-60 centminheight">
            <Mobile user={user} />
          </div>
        </Tab.Item>
        {isTeacher(user) && (
          <Tab.Item title="我的邀请码">
            <div className="p-t-60 p-b-60 centminheight">
              <Invitation user={user} />
            </div>
          </Tab.Item>
        )}
      </Tab>
    </Fragment>
  );
};
