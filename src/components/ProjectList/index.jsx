import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import get from 'lodash-es/get';
import './index.scss';

export default class Header extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="pro-card">
        <div className="card-header">
          <h5>{data.title}</h5>
        </div>
        <div className="card-collapse">
          {get(data, 'projects', []).map(({ id, title, timeConsume }) => (
            <div key={id} className="list-group">
              <span className="learnLesson all"><i /></span>
              <Link to="#">{title}</Link>
              <span className="time">耗时{timeConsume}</span>
            </div>
          ))}
          <div className="card-body">
            <h5 className="card-title">老师评语</h5>
            <p className="card-text">本课程是空间信息和数字技术专业的专业课，是该专业大部分其他专业的前导课程。 几乎所有专业的大学生，都可以学习运用空间信息工程技术专业知识，与自己的创新创业目标融合。</p>
          </div>
        </div>
      </div>
    );
  }
}
