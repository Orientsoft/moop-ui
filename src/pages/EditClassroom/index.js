import React, { Fragment } from 'react';
import EurekaBanner from '@/components/EurekaBanner';
import EurekaEditCourse from '@/components/EurekaEditCourse';

export default (props) => {
  return (
    <Fragment>
      <EurekaBanner>
        <div className="row">
          <div className="col-12 col-md-7">
            <h2 className="large">编辑课题</h2>
          </div>
        </div>
      </EurekaBanner>
      <EurekaEditCourse {...props} />
    </Fragment>
  );
};
