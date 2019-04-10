import React, { Fragment, useState } from 'react';
import { Button, Step, Grid } from '@alifd/next';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

const StepItem = Step.Item;
const { Row, Col } = Grid;

const stepN = [{
  title: '专题描述',
  render: props => <Step1 {...props} />,
}, {
  title: '实验项目',
  render: props => <Step2 {...props} />,
}, {
  title: '添加学生',
  render: props => <Step3 {...props} />,
}, {
  title: '提交专题',
  render: props => <Step4 {...props} />,
}, {
  title: '添加数据',
  render: props => <Step5 {...props} />,
}, {
  title: '发布专题',
  render: props => null,
}];

export default () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent(current + 1);

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
      <Step current={current} shape="arrow">
        {stepN.map((step, i) => (
          <StepItem key={i} title={step.title} disabled={i > current} onClick={() => setCurrent(i)} />
        ))}
      </Step>
      <div style={{ margin: '30px 0' }}>
        {stepN[current].render({ next })}
      </div>
    </Fragment>
  );
};
