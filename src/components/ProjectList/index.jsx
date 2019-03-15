import React, { Component } from 'react';
import './index.scss';

export default class Header extends Component {
  render() {
    const { data = {} } = this.props;

    return (
      <div className="pro-card">
        <div className="card-header">
          <h5>课程列表</h5>
        </div>
        <div className="card-collapse">
          <div className="list-group">
            <span className="learnLesson all"><i></i></span>
            <a href="#">{data.title}</a>
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
        </div>
      </div>
    );
  }
}
