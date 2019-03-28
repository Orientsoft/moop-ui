import React, { Fragment } from 'react';
import Tab from '@/components/Tab';
import ProjectList from '@/components/ProjectList';
import TeacherList from '@/components/TeacherList';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <Fragment>
      <div className="bg-conttop p-t-60 p-b-60">
        <div className="container  text-left">
          <div className="row">
            <div className="col-12 col-md-7">
              <h2 className="large ">学生报告</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white ">
        <div className="container text-left m-t-40 p-b-60">
          <div className="row">
            <div className="col-sm-12">
              <form>
                <div className="form-group row">
                  <label className="col-sm-2 ">学生姓名：</label>
                  <div className="fonts2 col-sm-10 ">吴崇试</div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 ">学生身份信息：</label>
                  <div className="fonts2 col-sm-10">518092873898</div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 ">实验报告名称：</label>
                  <div className="fonts2 col-sm-10">
                    <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value="例如：计算机程序设计（Python 3）" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 ">实验报告内容：</label>
                  <div className="col-sm-10">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" />
                  </div>
                </div>
                <div className="form-group row m-t-20">
                  <label  className="col-sm-2 "></label>
                  <div className="col-sm-10">
                    <a href="createcourse.html" className="btn btn-primary  addcouse">提交</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
