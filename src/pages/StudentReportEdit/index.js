import React, { Fragment, useState } from 'react';
import { Message } from '@alifd/next';
import BraftEditor from 'braft-editor';
import queryString from 'query-string';
import { report as reportAPI } from '@/utils/api';
import { getCurrentUser } from '@/utils/helper';
import get from 'lodash-es/get';

export default ({ history, location }) => {
  const [feedback, setFeedback] = useState(null);
  const user = getCurrentUser();
  const onBack = () => {
    history.goBack();
  };
  const onSubmit = () => {
    reportAPI.create({
      data: {
        participant: get(user, 'id'),
        classroom: get(queryString.parse(location.search), 'id'),
        summary: feedback ? feedback.toHTML() : '',
      },
    }).then(() => {
      Message.success('保存成功');
      setTimeout(onBack, 1000);
    });
  };

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
                  <label className=" col-sm-2" />
                  <div className="col-sm-10 text-right">
                    <a className="btn btn-primary" style={{ color: 'white' }} onClick={onBack}>返回课程</a>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 ">学生姓名：</label>
                  <div className="fonts2 col-sm-10 ">{get(user, 'realname')}</div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 ">实验报告内容：</label>
                  <div className="col-sm-10">
                    <BraftEditor value={feedback} onChange={setFeedback} style={{ border: '1px solid #C4C6CF ' }} />
                  </div>
                </div>
                <div className="form-group row m-t-20">
                  <label className="col-sm-2" />
                  <div className="col-sm-10">
                    <a onClick={onSubmit} className="btn btn-primary addcouse">提交</a>
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
