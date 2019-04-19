import React, { Fragment } from 'react';
import { Form, Field, Grid, Step, Message } from '@alifd/next';
import merge from 'lodash-es/merge';
import { classroom } from '@/utils/api';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

const { Row, Col } = Grid;

const steps = [{
  title: '专题描述',
  render: Step1,
}, {
  title: '实验项目',
  render: Step2,
}, {
  title: '提交专题',
  render: Step3,
}, {
  title: '添加学生',
  render: Step4,
}, {
  title: '添加数据',
  render: Step5,
}];

const formValues = [];

export default class extends React.Component {
  field = new Field(this);

  state = { current: 0, classroomData: {} };

  constructor(props) {
    super(props);
    const { state } = props.location;

    if (state) {
      classroom.select({
        params: {
          embed: 1,
        },
      }, { classroomId: state.id }).then(({ data }) => {
        this.setState({ classroomData: data });
        sessionStorage.setItem('formClassroom', JSON.stringify(data));
        formValues[0] = {
          title: data.title,
          thumb: data.thumb.thumbnail,
          description: data.description,
          requirement: data.requirement,
          testPoint: data.testPoint,
          material: data.material,
          public: data.public ? 1 : 0,
          characteristic: data.characteristic,
        };
        formValues[1] = data.projects;
        formValues[2] = {
          times: [data.startTime, data.endTime],
          tags: data.tags.map(tag => tag.id),
        };
        sessionStorage.setItem('form', JSON.stringify(formValues));
        this.onSwitch(0);
      });
    }
  }

  onSwitch = (current) => {
    let values = sessionStorage.getItem('form');
    let formClassroom = sessionStorage.getItem('formClassroom');

    if (formClassroom) {
      try {
        formClassroom = JSON.parse(formClassroom);
      } catch (error) {
        formClassroom = {};
      }
      this.setState({ classroomData: formClassroom });
    }
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
        let postData = null;
        const { thumb, ...restFormValues } = formValues[current];
        formValues[current] = merge(formValues[current], values);
        switch (current) {
          // 专题描述
          case 0:
            postData = {
              ...restFormValues,
              public: !!restFormValues.public,
            };
            if (thumb && thumb.indexOf('.') === -1) {
              postData.thumb = thumb;
            }
            break;
          // 实验项目
          case 1:
            postData = {};
            break;
          case 2:
            postData = {
              startTime: formValues[current].times[0],
              endTime: formValues[current].times[1],
              tags: formValues[current].tags,
            };
            break;
          default:
            postData = null;
        }
        if (postData) {
          classroom.update({ data: postData }, { classroomId: this.props.location.state.id }).then(() => {
            Message.success('更新成功');
          });
        } else {
          Message.success('更新成功');
        }
      }
    });
  };

  componentWillUnmount() {
    sessionStorage.removeItem('form');
    sessionStorage.removeItem('formClassroom');
    sessionStorage.removeItem('formInvitations');
  }

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
            <Form.Submit type="primary" style={{ width: '100%' }} onClick={this.onSubmit}>保存</Form.Submit>
          </Form.Item>
        </Form>
      </Fragment>
    );
  }
}
