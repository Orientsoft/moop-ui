import React, { Component } from 'react';
import './index.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="pro-card">
        <div className="card-header">
          <h5> 实验项目2-Garch模型的实现-单变量</h5>
        </div>
        <div className="card-collapse">
          <div className="list-group">
            <span className="learnLesson all"><i></i></span>
            <a href="#">→ Garch模型的实现-单变量 </a>
            <span className="time">耗时10分钟</span>
          </div>
          <div className="list-group">
            <span className="learnLesson half"><i></i></span>
            <a href="#">→ Garch模型的实现-单变量 </a>
            <span className="time">耗时10分钟</span>
          </div>
          <div className="list-group">
            <span className="learnLesson "><i></i></span>
            <a href="#">→ Garch模型的实现-单变量 </a>
            <span className="time">耗时10分钟</span>
          </div>
          <div className="card-body">
            <h5 className="card-title">老师评语</h5>
            <p className="card-text">本课程是空间信息和数字技术专业的专业课，是该专业大部分其他专业的前导课程。 几乎所有专业的大学生，都可以学习运用空间信息工程技术专业知识，与自己的创新创业目标融合。</p>
          </div>
        </div>
      </div>
    );
  }
}
