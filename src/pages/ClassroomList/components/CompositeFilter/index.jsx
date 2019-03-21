import React, { Component } from 'react';
import { Tag } from '@alifd/next';
import IceContainer from '@icedesign/container';
import { tag } from '../../../../utils/api';

export default class CompositeFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { tagList: [] };
  }

  componentDidMount() {
    tag.selectAll().then(({ data }) => {
      this.setState({
        tagList: [{ name: '全部', checked: true }].concat(data.map(d => ({ ...d, checked: false }))),
      });
    });
  }

  onTagChange = (selected, index) => {
    const { tagList } = this.state;

    if (index === 0) {
      if (selected) {
        for (let i = 1; i < tagList.length; i += 1) {
          tagList[i].checked = false;
        }
      }
    } else {
      tagList[0].checked = false;
    }
    tagList[index].checked = selected;
    this.setState({ tagList: [...tagList] });
    if (this.props.onTagChange) {
      this.props.onTagChange(tagList.filter(t => t.checked));
    }
  };

  render() {
    const { tagList } = this.state;

    return (
      <div className="composite-filter">
        <IceContainer style={styles.filterCard}>
          <div className="pro-container">
            <div style={styles.tagList}>
              {tagList.map(({ name, checked }, index) => {
                return (
                  <Tag.Selectable
                    type="normal"
                    key={index}
                    checked={checked}
                    style={styles.tag}
                    onChange={e => this.onTagChange(e, index)}
                  >
                    {name}
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
