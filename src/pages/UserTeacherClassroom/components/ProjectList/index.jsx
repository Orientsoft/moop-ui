import React, { Component } from 'react';
// import { Grid, Rating } from '@alifd/next';
// import './index.scss';
// import { Grid, Rating } from '@alifd/next';
// import IceContainer from '@icedesign/container';
import Progress from './Progress';

export default class Header extends Component {
  render() {
    return (
      <div style={styles.tabList} >
        <div style={styles.left}>
          <div style={styles.num}>
            <img
              style={styles.avatar}
              src={require('./images/index1.jpg')}
              alt="图像"
            />
            <div style={styles.title}>神经网络与深度学习</div>
          </div>
        </div>
        <div style={styles.middleright}>
          <div style={styles.middle}>
            <div style={styles.subtitle}>→ Garch模型的实现-单变量   <span style={styles.subtitletime}>2019年2月14日</span></div>
            <div style={styles.desc} >2019级二班 25人 </div>
            <div style={styles.overviewDetail}>
              <div style={styles.overviewDetailItem}>
                <span style={styles.overviewDetailItemText}>1实验</span>
                <span style={styles.overviewDetailItemPercentWrapper}>
                  <Progress
                    style={styles.overviewDetailItemPercent}
                    color="#27ae60"
                    percent={90}
                    extra="480"
                  />
                </span>
              </div>
              <div style={styles.overviewDetailItem}>
                <span style={styles.overviewDetailItemText}>2实验</span>
                <span style={styles.overviewDetailItemPercentWrapper}>
                  <Progress
                    style={styles.overviewDetailItemPercent}
                    color="#2980b9"
                    percent={70}
                    extra="270"
                  />
                </span>
              </div>
              <div style={styles.overviewDetailItem}>
                <span style={styles.overviewDetailItemText}>3实验</span>
                <span style={styles.overviewDetailItemPercentWrapper}>
                  <Progress
                    style={styles.overviewDetailItemPercent}
                    color="#f1c40f"
                    percent={10}
                    extra="40"
                  />
                </span>
              </div>
            </div>
          </div>
          <div style={styles.btnBox}>
            <a href="#" style={styles.btnLink}>
              查看详情
            </a>
          </div>
        </div>
        <div style={styles.middleright}>
          <div style={styles.middle}>
            <div style={styles.subtitle}>→ Garch模型的实现-单变量   <span style={styles.subtitletime}>2019年2月14日</span></div>
            <div style={styles.desc} >2019级二班 25人 </div>
            <div style={styles.overviewDetail}>
              <div style={styles.overviewDetailItem}>
                <span style={styles.overviewDetailItemText}>1实验</span>
                <span style={styles.overviewDetailItemPercentWrapper}>
                  <Progress
                    style={styles.overviewDetailItemPercent}
                    color="#27ae60"
                    percent={90}
                    extra="480"
                  />
                </span>
              </div>
              <div style={styles.overviewDetailItem}>
                <span style={styles.overviewDetailItemText}>2实验</span>
                <span style={styles.overviewDetailItemPercentWrapper}>
                  <Progress
                    style={styles.overviewDetailItemPercent}
                    color="#2980b9"
                    percent={70}
                    extra="270"
                  />
                </span>
              </div>
              <div style={styles.overviewDetailItem}>
                <span style={styles.overviewDetailItemText}>3实验</span>
                <span style={styles.overviewDetailItemPercentWrapper}>
                  <Progress
                    style={styles.overviewDetailItemPercent}
                    color="#f1c40f"
                    percent={10}
                    extra="40"
                  />
                </span>
              </div>
            </div>
          </div>
          <div style={styles.btnBox}>
            <a href="#" style={styles.btnLink}>
              查看详情
            </a>
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  tabList: {
    background: '#fff',
    position: 'relative',
    paddingRight: '40px',
    transition: 'all .3s',
    marginTop: '40px',
    marginBottom: '60px',
    borderBottom: 'solid 1px #ccc',
    paddingBottom: '20px',
  },
  middleright: {
    paddingLeft: '335px',
    position: 'relative',
    // paddingRight: '200px',
    // height: '120px',
    overflow: 'hidden',
  },
  middle: {
    // paddingLeft: '335px',
    paddingRight: '200px',
    // height: '120px',
    overflow: 'hidden',
  },
  left: {
    position: 'absolute',
    left: '0',
    top: '0',
    // height: '120px',
    overflow: 'hidden',
  },
  num: {
    float: 'left',
  },
  avatar: {
    width: '300px',
    height: '100px',
    border: '1px solid #ddd',
  },
  title: {
    // float: 'left',
    maxWidth: '255px',
    fontSize: '20px',
    // lineHeight: '80px',
    fontWeight: '600',
    color: '#333',
    paddingTop: '10px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  subtitle: {
    fontSize: '20px',
    fontWeight: '600',
    position: 'relative',
  },
  subtitletime: {
    right: '5px',
    position: 'absolute',
    fontSize: '14px',
    fontWeight: '400',
    top: '10px',
  },
  desc: {
    fontSize: '14px',
    lineHeight: '24px',
    // color: 'hsla(0,0%,100%,.8)',
    marginTop: '10px',
    // whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  btnBox: {
    position: 'absolute',
    right: '0',
    top: '10px',
  },
  btnLink: {
    display: 'inline-block',
    width: '160px',
    height: '40px',
    border: '1px solid #ccc',
    lineHeight: '38px',
    fontSize: '16px',
    color: '#333',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'all .3s',
  },
  overviewDetail: {
    marginTop: '10px',
    marginBottom: '20px',
  },
  overviewDetailItem: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 5,
  },
  overviewDetailItemPercentWrapper: {
    flex: 1,
  },
  overviewDetailItemPercent: {
    display: 'inline-block',
  },
  overviewDetailItemText: {
    marginRight: 10,
  },
};

