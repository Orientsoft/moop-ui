import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCurrentUser } from '../../../../utils/helper';
import './index.scss';

export default class IntroBanner extends Component {
  current = getCurrentUser();

  render() {
    const { data = {} } = this.props;
    return (
      <div className="intro-banner-wrap">
        <div className="intro-banner-img-mask">
          <div className="intro-banner-text" >
            <h2 className="intro-banner-title">{data.title}</h2>
            <p className="intro-banner-subtitle"><br />
              开课状态： {data.public ? '已开课' : '未开课'}<br />
              学时安排： {data.timeConsume}<br /><br />
            </p>
            <p className="intro-banner-subtitle">
              <Link to="#" className="startbtn">开始学习</Link>
              <Link to="/classroom/presentation" className="startbtn">项目申报</Link>
              {this.current && this.current.id === data.owner ? <Link to="/classroom/publication" className="whitebtn">编辑专题</Link> : null}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
