import React, { Component } from 'react';
// import { Tab } from '@alifd/next';
import IceContainer from '@icedesign/container';
import './index.scss';


export default class BasicTab extends Component {
  static displayName = 'BasicTab';

  render() {
    return (
      <div className="basic-tab">
        <IceContainer style={styles.tabCardStyle}>
          <ul className="subnav-item">
            <li><a href="#" className="active">1.专题描述</a></li>
            <li><a href="#">2.实验项目</a></li>
            <li><a href="#">3.添加数据</a></li>
            <li><a href="#">4.添加学生</a></li>
            <li><a href="#">5.提交专题</a></li>
          </ul>
        </IceContainer>
      </div>
    );
  }
}
const styles = {
  tabCardStyle: {
    padding: '0',
    margin: '0 auto',
    width: '1200px',
  },
};

