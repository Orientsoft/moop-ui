import React, { Fragment } from 'react';
import Tab from '@/components/Tab';

const User = () => {
  return (
    <Fragment>
      <div className="bg-conttop p-t-60 p-b-60">
        <div className="container  text-left">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="large ">我的实验</h2>
            </div>
          </div>
        </div>
      </div>
      <Tab>
        <Tab.Item title="实验专题" className="bg-white m-t-20 p-b-60"></Tab.Item>
        <Tab.Item title="我的成就" className="bg-white m-t-20 p-b-60"></Tab.Item>
      </Tab>
    </Fragment>
  );
};

const Teacher = () => {
  return (
    <Fragment>
      <div className="bg-conttop p-t-60 p-b-60">
        <div className="container  text-left">
          <div className="row">
            <div className="col-6 col-md-6">
              <h2 className="large ">老师专题例表</h2>
            </div>
            <div className="col-6 col-md-6 text-right">
              <a href="createcourse.html" className="btn btn-primary  addcouse">创建专题 <span className="link-add">+</span></a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default () => {
  return <User />;
};
