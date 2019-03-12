import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import './index.scss';


export default class BasicTab extends Component {
  render() {
    return (
      <div className="basic-tab">
        <IceContainer style={styles.tabCardStyle}>
          <ul>
            
            <li><a href="#" className="active">详情</a></li>
            <li><a href="#">讨论</a></li>
            <li><a href="#">排行榜</a></li>
            <li><a href="#">学生(老师看)</a></li>
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

