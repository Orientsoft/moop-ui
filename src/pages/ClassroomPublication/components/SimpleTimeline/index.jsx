import React, { Component } from 'react';
import { Tab } from '@alifd/next';
import IceContainer from '@icedesign/container';
import './index.scss';


export default class BasicTab extends Component {
  static displayName = 'BasicTab';

  render() {
    const tabs = [
      { tab: '详情', key: 'guide' },
      { tab: '讨论', key: 'push' },
      { tab: '排行榜', key: 'message' },
      { tab: '学生(老师看)', key: 'autoreply' },
    ];

    return (
      <div className="basic-tab">
        <IceContainer style={styles.tabCardStyle}>
          <Tab contentStyle={{ display: 'none' }} >
            {tabs.map((item) => <Tab.Item key={item.key} title={item.tab} style={styles.tabCardtext} />)}
          </Tab>
        </IceContainer>
      </div>
    );
  }
}
const styles = {
  tabCardStyle: {
    padding: '0',
    margin: '0 auto 20px',
    width: '1200px',
  },
  tabCardtext: {
    fontSize: '14px',
  },
};

