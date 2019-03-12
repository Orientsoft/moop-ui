import React, { Component } from 'react';
import './index.scss';

export default class IntroBanner extends Component {
  static displayName = 'IntroBanner';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="intro-banner-wrap">
        <div className="intro-banner-img-mask">
          <div className="intro-banner-text" >
            <h2 className="intro-banner-title"> Python 3 Programming 专项实验</h2>
            <p className="intro-banner-subtitle"><br />
              开课时间： 2019年02月18日 ~ 2019年05月19日<span className="text-warning">进行至第1周，共13周</span><br />
              学时安排： 3~5小时每周<br /><br />
            </p>
            <p>
              <a href="#" className="startbtn">开始学习</a>
              <a href="#/classroom/presentation" className="startbtn">项目申报</a>
              <a href="#/classroom/publication" className="whitebtn">编辑专题</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
