import React, { Component } from 'react';
import './index.scss';

export default class IntroTab extends Component {
  static displayName = 'IntroTab';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  isSelected = (index, target) => (index === target ? 'selected' : ' ');

  clickTab = (event) => {
    let { index } = event.currentTarget.dataset;
    index = parseInt(index, 10);
    if (isNaN(index)) {
      index = 0;
    }
    this.setState({ index });
  };
  render() {
    const { index } = this.state;
    return (
      <div className="scenario-column">
        <div className="scenario-detail-img"></div>
        <div className={`scenario-detail-item ${this.isSelected(index, 0)}`}>
          <div className="scenario-detail-left">
            <div className="scenario-detail-cont">
              <h2 className="">我们的服务</h2>
              <p className="">是时候改变你的才能了</p>
              <div className="reason">
                <dl className="reason_item">
                  <dt className="reason_division">课件</dt>
                  <dd className="reason_result"><span className="reason_n">122,000</span>以上</dd>
                </dl>
                <dl className="reason_item">
                  <dt className="reason_division">老师</dt>
                  <dd className="reason_result"><span className="reason_n">400</span>以上</dd>
                </dl>
                <dl className="reason_item">
                  <dt className="reason_division">学生</dt>
                  <dd className="reason_result"><span className="reason_n">12,000</span>以上</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="hy-ability">
          <h3 className="teachtit">是时候改变你的才能了。</h3>
          <p className="teachtitsub">立即通过Coursera for Business为学习者提供支持。</p>
          <div className="hy-ability-item">
            <img alt="" src={require('./images/teacher1.png')} />
            <h3>贾马尔戴维斯，亲善</h3>
            <h2>前端开发</h2>
            <p >
              学习者可以使用iOS和Android上的应用程序随时随地学习Coursera。还可以下载专题以供离线观看。
            </p>
          </div>
          <div className="hy-ability-item">
            <img alt="" src={require('./images/teacher2.jpg')} />
            <h3>Ben Lewis</h3>
            <h2>前端开发</h2>
            <p >
              学习者可以使用iOS和Android上的应用程序随时随地学习Coursera。还可以下载专题以供离线观看。
            </p>
          </div>
          <div className="hy-ability-item">
            <img alt="" src={require('./images/teacher3.jpg')} />
            <h3>Lucia Gonzalez，Atrium</h3>
            <h2>前端开发</h2>
            <p >
              学习者可以使用iOS和Android上的应用程序随时随地学习Coursera。还可以下载专题以供离线观看。
            </p>
          </div>
        </div>
      </div>
    );
  }
}
