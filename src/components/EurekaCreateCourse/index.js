import React, { Fragment } from 'react';
import { Form, Field, Step } from '@alifd/next';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';

const steps = [{
  title: '专题描述',
  render: Step1,
}, {
  title: '实验项目',
  render: Step2,
}, {
  title: '添加学生',
  render: Step3,
}, {
  title: '提交专题',
  render: Step4,
}, {
  title: '添加数据',
  render: Step5,
}, {
  title: '发布专题',
  render: Step6,
}];

export default class extends React.Component {
  field = new Field(this);

  state = { current: 0 };

  componentDidMount() {
    this.onSwitch(0);
  }

  onSwitch = (current) => {
    const values = sessionStorage.getItem(`step${current}`);

    if (values) {
      try {
        this.field.setValues(JSON.parse(values));
      } catch (error) { /**/ }
    }
    this.setState({ current });
  };

  onSubmit = () => {
    const { current } = this.state;

    this.field.validate((error, values) => {
      if (!error) {
        sessionStorage.setItem(`step${current}`, JSON.stringify(values));
        this.setState({ current: current + 1 });
      }
    });
  };

  render() {
    const { current } = this.state;

    return (
      <Fragment>
        <Step current={current} shape="arrow">
          {steps.map((step, i) => (
            <Step.Item key={i} title={step.title} onClick={() => this.onSwitch(i)} />
          ))}
        </Step>
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 12 }} field={this.field} style={{ margin: '40px 0', minHeight: 160 }}>
          {steps[current].render(current, this).map(({ render, ...itemProps }, i) => (
            <Form.Item key={i} {...itemProps}>{render()}</Form.Item>
          ))}
          <Form.Item wrapperCol={{ span: 4, offset: 10 }}>
            <Form.Submit type="primary" style={{ width: '100%' }} onClick={this.onSubmit}>
              {current === steps.length - 1 ? '完成创建' : '下一步'}
            </Form.Submit>
          </Form.Item>
        </Form>
      </Fragment>
    );
  }
}
