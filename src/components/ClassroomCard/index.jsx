import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CardItems extends Component {
  render() {
    const { data = [] } = this.props;

    return (
      <div style={styles.hyThirdPartyWrapper}>
        <div style={styles.hyThirdParty}>
          <div style={styles.thirdPartyDetails}>
            {data.map(({ id, title, description, timeConsume }) => (
              <div key={id} style={styles.thirdPartyDetailItem}>
                <img
                  style={styles.thirdPartyDetailImg}
                  src={require('./images/index1.jpg')}
                  alt=""
                />
                <h5 style={styles.thirdPartyName}>{title}</h5>
                <p style={styles.thirdPartySold}>
                  学时安排：
                  <span style={styles.thirdPartySoldNumber}>{timeConsume}</span>
                </p>
                <p style={styles.thirdPartyDesc}>{description}</p>
                <Link style={styles.thirdPartyLink} to={`/classroom/detail?id=${id}`}>
                  进入学习 <span style={styles.linkAdd}>➪</span>
                </Link>
              </div>
            ))}
            <Link style={styles.thirdPartyMore} to="/classroom/list">
              查看更多学习 ➪
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  hyThirdPartyWrapper: {
    background: '#fff',
    minWidth: '1280px',
  },
  hyThirdParty: {
    // paddingTop: '40px',
    paddingBottom: '80px',
    textAlign: 'left',
    width: '1200px',
    margin: '0 auto',
  },

  thirdPartyMore: {
    position: 'absolute',
    left: '44%',
    bottom: '-50px',
    color: '#108ee9',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: '500',
    padding: '10px 30px',
    textDecoration: 'none',
    border: '1px solid #108ee9',
    borderRadius: '4px',
    WebkitTransition: 'all .2s linear',
    transition: 'all .2s linear',
  },
  thirdPartyDetails: {
    position: 'relative',
    // height: '400px',
    margin: '0',
    padding: '0',
  },
  // thirdPartyDetail: {
  //   zIndex: '0',
  //   fontSize: '0',
  //   position: 'absolute',
  //   left: '0',
  //   top: '0',
  //   width: '100%',
  //   display: 'block',
  //   WebkitTransition: 'opacity .3s linear',
  //   transition: 'opacity .3s linear',
  // },
  thirdPartyDetailItem: {
    display: 'inline-block',
    verticalAlign: 'top',
    width: '30.333%',
    // height: '400px',
    paddingBottom: '40px',
    borderRadius: '2px 2px 0 0',
    margin: '0  2% 30px 0',
    border: '1px solid #eaeaea',
    boxSizing: 'border-box',
    WebkitTransition: '-webkit-transform .2s linear',
    transition: 'transform .2s linear,\n-webkit-transform .2s linear',
  },
  thirdPartyDetailItemFirst: {
    marginLeft: '0',
  },
  thirdPartyDetailItemLast: {
    marginRight: '0',
  },
  thirdPartyDetailImg: {
    width: '100%',
    borderRadius: '2px 2px 0 0',
    position: 'relative',
    left: '0',
    border: '0',
  },
  thirdPartyName: {
    margin: '20px 20px 6px',
    fontSize: '20px',
    lineHeight: '28px',
    color: '#333',
    fontWeight: '600',
  },
  thirdPartySold: {
    margin: '10px 20px 6px',
    fontSize: '14px',
    color: '#28a745',
    lineHeight: '20px',
  },
  thirdPartySoldNumber: {
    color: '#28a745',
    fontWeight: '500',
    marginRight: '3px',
  },
  thirdPartyDesc: {
    margin: '10px 20px 6px',
    color: '#333',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '24px',
    height: '50px',
    overflow: 'hidden',
  },
  thirdPartyLink: {
    margin: '10px 20px 6px',
    display: 'inline-block',
    fontSize: '14px',
    color: '#108ee9',
  },
};
