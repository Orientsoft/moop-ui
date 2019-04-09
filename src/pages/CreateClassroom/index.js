import React, { Fragment } from 'react';
// import Tab from '@/components/Tab';
import Timeline from '@/components/Timeline';
import SpecialDescription from './SpecialDescription';
import ExperimentalProject from './ExperimentalProject';
import AddData from './AddData';
import AddStudents from './AddStudents';
import SubmitTopic from './SubmitTopic';

export default () => {
  return (
    <Fragment>
      <div className="bg-conttop p-t-60 p-b-60">
        <div className="container  text-left">
          <div className="row">
            <div className="col-12 col-md-7">
              <h2 className="large ">创建专题</h2>
            </div>
          </div>
        </div>
      </div>
      <Timeline>
        <Timeline.Item title="1.专题描述" className="bg-white">
          <div className="container text-left m-t-40 p-b-120">
            <div className="row">
              <SpecialDescription />
            </div>
          </div>
        </Timeline.Item>
        <Timeline.Item title="2.实验项目" className="bg-white">
          <div className="container text-left m-t-40 p-b-120">
            <div className="row">
              <ExperimentalProject />
            </div>
          </div>
        </Timeline.Item>
        <Timeline.Item title="3.添加学生" className="bg-white">
          <div className="container text-left m-t-40 p-b-120">
            <div className="row">
              <AddStudents />
            </div>
          </div>
        </Timeline.Item>
        <Timeline.Item title="4.提交专题" className="bg-white">
          <div className="container text-left m-t-40 p-b-120">
            <div className="row">
              <SubmitTopic />
            </div>
          </div>
        </Timeline.Item>
        <Timeline.Item title="5.添加数据" className="bg-white">
          <div className="container text-left m-t-40 p-b-120">
            <div className="row">
              <AddData />
            </div>
          </div>
        </Timeline.Item>
        <Timeline.Item title="6.发布专题" className="bg-white">
          <div className="container text-left m-t-40 p-b-120">
            <div className="form-row row m-t-20">
              <label className="import col-sm-2 col-form-label">立即发布</label>
              <div className="col-sm-8 m-t-10">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label className="form-check-label" >专题立即发布</label>
                </div>
                <p className="m-t-20"><button className="btn btn-primary  addcouse">下一步 </button></p>
              </div>
            </div>
          </div>
        </Timeline.Item>
      </Timeline>
    </Fragment>
  );
};
