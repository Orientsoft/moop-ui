import React, { Fragment, useState, useEffect } from 'react';
import { Message, NumberPicker } from '@alifd/next';
import moment from 'moment';
import BraftEditor from 'braft-editor';
import queryString from 'query-string';
import get from 'lodash-es/get';
import { report as reportAPI, user } from '@/utils/api';

// const defaultstr = '<p style="text-align:center;"><span style="color:#2d2e2e"><span style="background-color:#ffffff"><strong><span style="font-size:18px"><span style="line-height:4">北京物资学院《快递自提网点布局虚拟仿真》实验报告</span></span></strong></span></span></p><p style="text-align:left;"><span style="color:#2d2e2e"><span style="font-size:15px"><span style="background-color:#ffffff"><span style="line-height:2.5">院系:__________________________________ <span style="letter-spacing:0px">专业班级</span>:_______________________________</span></span></span></span></p><p style="text-align:left;"><span style="color:#2d2e2e"><span style="font-size:15px"><span style="background-color:#ffffff"><span style="line-height:2.5">学号:__________________________________ 姓名:___________________________________</span></span></span></span></p><p style="text-align:left;"><span style="color:#2d2e2e"><span style="font-size:15px"><span style="background-color:#ffffff"><span style="line-height:2.5">实验日期: _______年 _______月 ______日</span></span></span></span></p><p class="MsoNormal"><strong><span style="line-height:4">一、实验目的</span></strong></p><p class="MsoNormal"></p><p></p><p></p><p></p><p class="MsoNormal"><span style="line-height:4"><strong>二、实验内容</strong>（描述实验任务）</span></p><p></p><p></p><p></p><p></p><p class="MsoNormal"><span style="line-height:4"><strong>三、实验环境</strong>（描述实验的软件、硬件环境）</span></p><p></p><p></p><p></p><p></p><p class="MsoNormal"><strong><span style="line-height:4">四、实验步骤与结果</span></strong></p><p>（描述实现实验内容的步骤和命令即在实验中做了什么事情，怎么做的，结果如何。）</p><p></p><p></p><p></p><p></p><p class="MsoNormal"><strong><span style="line-height:4">五、总结</span></strong></p><p class="MsoNormal">（说明实验过程中遇到的问题及解决办法；个人的收获；未解决的问题等）</p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>';
export default ({ history }) => {
  const [student, setStudent] = useState(null);
  const [report, setReport] = useState(null);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const url = queryString.parse(location.search);
  const onChangeScore = (v) => {
    setScore(v);
  };
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
    const tab = parseInt(url.tab, 10);
    let backTo = `/classroom?id=${url.classroom}`;

    if (!isNaN(tab)) {
      backTo = `${backTo}&tab=${tab}`;
    }
    history.push(backTo);
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
        if (res.data.reports.length) {
          setReport(res.data.reports[0]);
          setScore(res.data.reports[0].score);
          setFeedback(res.data.reports[0].feedback);
        }
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
                    <label className="col-sm-2 ">实验报告名称：</label>
                    <div className="fonts2 col-sm-10">{get(report, 'title', '')}</div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 ">实验报告：</label>
                    <div className="col-sm-10">
                      <p dangerouslySetInnerHTML={{
                        __html: get(report, 'summary'),
                        // __html: defaultstr?defaultstr.replace(/[\n]/g, '<br/>'): '',
                      }}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 ">提交时间</label>
                    <div className="col-sm-10">
                      {moment(student.updatedAt).format('YYYY-MM-DD HH:mm:ss')}
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 ">评分</label>
                    <div className="col-sm-10">
                      {/* <Select onChange={setScore} style={{ width: '100%' }} value={score} dataSource={['A+', 'A', 'B', 'C', 'D']} /> */}
                      <NumberPicker min={0} max={100} onChange={onChangeScore} style={{ width: '100%' }} value={score} />
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
