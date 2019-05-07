import React, { Fragment, useState, useEffect } from 'react';
import { Select, Message } from '@alifd/next';
import BraftEditor from 'braft-editor';
import queryString from 'query-string';
import get from 'lodash-es/get';
import { report as reportAPI, user } from '@/utils/api';

export default () => {
  const [student, setStudent] = useState(null);
  const [report, setReport] = useState(null);
  const [score, setScore] = useState('A+');
  const [feedback, setFeedback] = useState(null);
  const url = queryString.parse(location.search);
  const onSubmit = () => {
    reportAPI.update({
      data: {
        score,
        feedback: feedback ? feedback.toHTML() : '',
      },
    }, { reportId: report.id }).then(() => {
      Message.success('更新成功');
    });
  };
  const onBack = () => {
    history.go(-1);
  };

  useEffect(() => {
    if (!url || !url.id || !url.classroom) {
      return null;
    }
    user.select({}, { userId: url.id }).then(({ data }) => {
      setStudent(data);
      reportAPI.selectAll({
        params: {
          participant: data.id,
          classroom: url.classroom,
        },
      }).then((res) => {
        setReport(res.data.reports[0]);
        setScore(res.data.reports[0].score);
        setFeedback(res.data.reports[0].feedback);
      });
    });
  }, []);

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
      {student && (
        <div className="bg-white ">
          <div className="container text-left m-t-40 p-b-60">
            <div className="row">
              <div className="col-sm-12">
                <form>
                  <div className="form-group row">
                    <label className=" col-sm-2" />
                    <div className="col-sm-10 text-right">
                      <a className="btn btn-primary" style={{ color: 'white' }} onClick={onBack}>返回学生列表</a>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 ">学生姓名：</label>
                    <div className="fonts2 col-sm-10 ">{student.realname}</div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 ">学生身份信息：</label>
                    <div className="fonts2 col-sm-10">{student.certification}</div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 ">实验报告名称：</label>
                    <div className="fonts2 col-sm-10">{get(report, 'title', '')}</div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 ">实验报告：</label>
                    <div className="col-sm-10">
                      <p dangerouslySetInnerHTML={{ __html: get(report, 'summary') }} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 ">评分</label>
                    <div className="col-sm-10">
                      <Select onChange={setScore} style={{ width: '100%' }} value={score} dataSource={['A+', 'A', 'B', 'C', 'D']} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 ">评语</label>
                    <div className="col-sm-10">
                      <BraftEditor value={feedback} onChange={setFeedback} style={{ border: '1px solid #C4C6CF ' }} />
                    </div>
                  </div>
                  <div className="form-group row m-t-20">
                    <label className="col-sm-2" />
                    <div className="col-sm-10">
                      <a onClick={onSubmit} className="btn btn-primary  addcouse">提交</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
