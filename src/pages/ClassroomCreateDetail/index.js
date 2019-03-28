import React, { Fragment } from 'react';
// import Tab from '@/components/Tab';
import Timeline from '@/components/Timeline';
import { Link } from 'react-router-dom';
import Information from './Information';
import MaterialEdit from './MaterialEdit';

export default () => {
  return (
    <Fragment>
      <div className="bg-conttop p-t-60 p-b-60">
        <div className="container  text-left">
          <div className="row">
            <div className="col-12 col-md-7">
              <h2 className="large ">创建项目申报实验</h2>
            </div>
          </div>
        </div>
      </div>
      <Timeline>
        <Timeline.Item title="1. 填写基本信息" className="bg-white">
          <div className="container text-left m-t-40 p-b-120">
            <div className="row">
              <Information />
            </div>
          </div>
        </Timeline.Item>
        <Timeline.Item title="2. 材料编辑" className="bg-white">
          <div className="container text-left m-t-40 p-b-120">
            <div className="row">
              <MaterialEdit />
            </div>
          </div>
        </Timeline.Item>
      </Timeline>
    </Fragment>
  );
};
