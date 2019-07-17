import React, { Fragment } from 'react';
import { Step } from '@alifd/next';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';

const steps = [{
  title: '课题描述',
  render: props => <Step1 {...props} />,
}, {
  title: '添加模版',
  render: props => <Step2 {...props} />,
}, {
  title: '提交课题',
  render: props => <Step3 {...props} />,
}, {
  title: '编辑模版',
  render: props => <Step7 {...props} />,
}, {
  title: '发布课题',
  render: props => <Step4 {...props} />,
}, {
  title: '添加数据',
  render: props => <Step5 {...props} />,
}, {
  title: '添加学生',
  render: props => <Step6 {...props} />,
}];

const FORM_SESSION = 'CREATEFORM';
const CLASSROOM_SESSION = 'CREATECLASSROOM';

export default class EurekaCreateCourse extends React.Component {
  state = { current: 3 };

  constructor(props) {
    super(props);

    const disbaledSteps = sessionStorage.getItem('__DISABLED_STEP__');

    try {
      this.disbaledStep = JSON.parse(disbaledSteps) || [];
    } catch (error) {
      this.disbaledStep = [];
    }
  }

  setData = (key, data) => {
    let savedItem = sessionStorage.getItem(FORM_SESSION);

    if (savedItem) {
      try {
        savedItem = JSON.parse(savedItem);
      } catch (error) {
        savedItem = {};
      }
    } else {
      savedItem = {};
    }
    sessionStorage.setItem(FORM_SESSION, JSON.stringify(Object.assign(savedItem, { [key]: data })));
  };

  getData = (key) => {
    let savedItem = sessionStorage.getItem(FORM_SESSION);

    if (savedItem) {
      try {
        savedItem = JSON.parse(savedItem);
      } catch (error) {
        savedItem = {};
      }
    } else {
      savedItem = {};
    }
    return savedItem[key];
  };

  getPostData = () => {
    const item0 = this.getData(0);
    const item1 = this.getData(1);
    const item2 = this.getData(2);

    return {
      ...item0,
      projects: item1 ? item1.projects.map(p => p.id) : [],
      homework: item1 ? item1.homework : false,
      ...item2,
      invited: item0.public,
      status: 0,
    };
  };

  setClassroom = data => sessionStorage.setItem(CLASSROOM_SESSION, JSON.stringify(data));

  getClassroom = () => {
    let savedItem = sessionStorage.getItem(CLASSROOM_SESSION);

    if (savedItem) {
      try {
        savedItem = JSON.parse(savedItem);
      } catch (error) {
        savedItem = null;
      }
    }
    return savedItem;
  };

  componentWillUnmount() {
    sessionStorage.removeItem(FORM_SESSION);
    sessionStorage.removeItem(CLASSROOM_SESSION);
    sessionStorage.removeItem('__DISABLED_STEP__');
  }

  render() {
    const { current } = this.state;

    return (
      <Fragment>
        <div className="setbox">
          <Step current={current} shape="arrow">
            {steps.map((step, i) => (
              <Step.Item disabled={this.disbaledStep.indexOf(i) !== -1 || i > current} key={i} title={step.title} onClick={() => this.setState({ current: i })} />
            ))}
          </Step>
        </div>
        <div className="p-b-60">
          {steps[current].render({
            setData: data => this.setData(current, data),
            getData: () => this.getData(current),
            getPostData: this.getPostData,
            getLocalData: this.getData,
            toNext: () => {
              if (this.disbaledStep.length) {
                const last = Math.max(...this.disbaledStep);
                if (last < steps.length - 1) {
                  if (current >= last) {
                    this.setState({ current: current + 1 });
                  } else {
                    this.setState({ current: last + 1 });
                  }
                }
              } else {
                this.setState({ current: current + 1 });
              }
            },
            history: this.props.history,
            setClassroom: this.setClassroom,
            getClassroom: this.getClassroom,
            labelSpan: 6,
            wrapperSpan: 12,
            disableStep: (..._steps) => {
              this.disbaledStep.push(..._steps);
              sessionStorage.setItem('__DISABLED_STEP__', JSON.stringify(this.disbaledStep));
            },
          })}
        </div>
      </Fragment>
    );
  }
}
