import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import './index.scss';


export default class BasicTab extends Component {
  render() {
    return (
      <div className="basic-tab">
        <IceContainer style={styles.tabCardStyle}>
          <ul>
            <li><a href="#" className="active">项目团队</a></li>
            <li><a href="#">项目描述</a></li>
            <li><a href="#">网络要求</a></li>
            <li><a href="#">技术架构</a></li>
            <li><a href="#">项目特色</a></li>
            <li><a href="#">服务计划</a></li>
          </ul>
        </IceContainer>
      </div>
    );
  }
}
const styles = {
  tabCardStyle: {
    padding: '0',
    margin: '0 auto 20px',
    borderRadius: '0',
    borderBottom: 'solid 1px #ddd',
    // width: '1200px',
  },
  tabCardtext: {
    fontSize: '14px',
  },
};

