import React, { Children, Component } from 'react';
import IceContainer from '@icedesign/container';
import './index.scss';

export default class BasicTab extends Component {
  state = { current: 0 };

  onTabChange = i => this.setState({ current: i });

  render() {
    const { current } = this.state;
    const { tabs = [], children } = this.props;

    return (
      <div className="basic-tab">
        <IceContainer style={styles.tabCardStyle}>
          <ul>
            {tabs.map((tab, i) => (
              <li key={i} onClick={() => this.onTabChange(i)}>
                {i === current ? <a href="javascript:void(0);" className="active">{tab}</a> : <a href="javascript:void(0);">{tab}</a>}
              </li>
            ))}
          </ul>
        </IceContainer>
        {Children.map(children, (child, i) => <div key={i} style={{ display: i === current ? 'block' : 'none' }}>{child}</div>)}
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

