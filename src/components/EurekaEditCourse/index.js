import React, { Fragment } from 'react';
import { Form, Field, Grid, Step } from '@alifd/next';
import merge from 'lodash-es/merge';
import { classroom } from '@/utils/api';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';

const { Row, Col } = Grid;

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

const formValues = [];

export default class extends React.Component {
  field = new Field(this);

  state = { current: 0 };

  componentDidMount() {
    this.onSwitch(0);
  }

  onSwitch = (current) => {
    let values = sessionStorage.getItem('form');

    if (values) {
      try {
        values = JSON.parse(values);
        this.field.setValues(values[current]);
      } catch (error) { /**/ }
    }
    this.setState({ current });
  };

  onSubmit = () => {
    const { current } = this.state;

    this.field.validate((error, values) => {
      if (!error) {
        if (current === steps.length - 1) {
          let postData = sessionStorage.getItem('form');
          try {
            postData = JSON.parse(postData);
            classroom.create({
              data: {
                title: postData[0].title,
                thumb: postData[0].thumb,
                description: postData[0].description,
                requirement: postData[0].requirement,
                material: [],
                testPoint: postData[0].testPoint,
                public: postData[0].public !== 0,
                tags: postData[3].tags || [],
                projects: postData[1],
                characteristic: [postData[0].characteristic],
                startTime: postData[3].times[0],
                endTime: postData[3].times[1],
              },
            });
          } catch (err) { /**/ }
        } else {
          formValues[current] = merge(formValues[current], values);
          sessionStorage.setItem('form', JSON.stringify(formValues));
          this.field.remove();
          this.setState({ current: current + 1 });
        }
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
          {steps[current].render(current, formValues, this).map(({ render, label, ...itemProps }, i) => {
            if (label) {
              return <Form.Item key={i} label={label} {...itemProps}>{render()}</Form.Item>;
            }
            return (
              <Row key={i} justify="center" style={{ marginBottom: 40 }}>
                <Col span={18}>{React.createElement(render)}</Col>
              </Row>
            );
          })}
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
