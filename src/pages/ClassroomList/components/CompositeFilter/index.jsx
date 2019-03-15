import React, { Component } from 'react';
import { Search, Tab, Tag, DatePicker } from '@alifd/next';
import IceContainer from '@icedesign/container';
// import { enquireScreen } from 'enquire-js';

const TabItem = Tab.Item;

// mock data
const tagList = [
  {
    key: 'all',
    name: '全部商品',
  },
  {
    key: 'unclassified',
    name: '分类2',
  },
  {
    key: 'invalid',
    name: '分类3',
  },
  {
    key: 'haohuo',
    name: '分类4',
  },
  {
    key: 'bimai',
    name: '分类5',
  },
];

export default class CompositeFilter extends Component {
  static displayName = 'CompositeFilter';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
  }

  onTabChange = (key) => {
    console.log(`select tab is: ${key}`);
  };

  onTagChange = (key, selected) => {
    console.log(`Tag: ${key} is ${selected ? 'selected' : 'unselected'}`);
  };

  onDateChange = (value) => {
    console.log(value);
  };

  onSearch = (value) => {
    console.log(value);
  };

  render() {
    return (
      <div className="composite-filter">
        <IceContainer style={styles.filterCard}>
          <div className="pro-container">
            <Tab
              shape="text"
              onChange={this.onTabChange}
              contentStyle={{ display: 'none' }}
              // extra={
              //   !this.state.isMobile ? this.renderTabBarExtraContent() : null
              // }
            >
              <TabItem title="全部" key="all" />
              <TabItem title="分类1" key="pic" />
              <TabItem title="分类2" key="item" />
              <TabItem title="分类3" key="new" />
              <TabItem title="分类4" key="video" />
              </Tab>       
            <div style={styles.tagList}>
              {tagList.map((tag, index) => {
                return (
                  <Tag.Selectable
                    type="normal"
                    key={index}
                    style={styles.tag}
                    onChange={this.onTagChange.bind(this, tag.key)}
                  >
                    {tag.name}
                  </Tag.Selectable>
                );
              })}
            </div>
          </div>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  filterCard: {
    position: 'relative',
    padding: 10,
  },
  tagList: {
    marginTop: '10px',
  },
  tag: {
    margin: 8,
  },
  extraFilter: {
    marginTop: '8px',
    display: 'flex',
    flexDirection: 'row',
  },
  search: {
    marginLeft: '12px',
    width: 150,
  },
};
