import React, { Fragment } from 'react';
import EurekaBanner from '@/components/EurekaBanner';
import EurekaCreateCourse from '@/components/EurekaCreateCourse';

export default (props) => {
  return (
    <Fragment>
      <EurekaBanner>
        <div className="row">
          <div className="col-12 col-md-7">
            <h2 className="large">创建专题</h2>
          </div>
        </div>
      </EurekaBanner>
      <EurekaCreateCourse {...props} />
    </Fragment>
  );
};
