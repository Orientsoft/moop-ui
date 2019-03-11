import React, { Component } from 'react';

export default class CardItems extends Component {
  static displayName = 'CardItems';
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={styles.hyThirdPartyWrapper}>
        <div style={styles.hyThirdParty}>
          <h3 style={styles.hyThirdPartyTitle}>
            内容由世界领先的机构开发
          </h3>
          <p style={styles.hyThirdPartySubTitle}>Please select your intresting course , and start !</p>
          <div style={styles.thirdPartyDetails}>
            <div
              style={{
                ...styles.thirdPartyDetailItem,
                ...styles.thirdPartyDetailItemFirst,
              }}
            >
              <img
                style={styles.thirdPartyDetailImg}
                src={require('./images/index1.jpg')}
                alt=""
              />
              <h5 style={styles.thirdPartyName}>机器学习</h5>
              <p style={styles.thirdPartySold}>
                学时安排：
                <span style={styles.thirdPartySoldNumber}>74</span>
                小时
              </p>
              <p style={styles.thirdPartyDesc}>
                机器学习是让计算机在没有明确编程的情况下采取行动的科学。在过去的十年中，机器学习为我们提供了自动驾驶汽车，实用的语音识别，有效的网络搜索以及对人类基因组的大大改进的理解。
              </p>
              <a style={styles.thirdPartyLink} href="#/classroom/detail">
                进入学习 <span style={styles.linkAdd}>➪</span>
              </a>
            </div>

            <div style={styles.thirdPartyDetailItem}>
              <img
                style={styles.thirdPartyDetailImg}
                src={require('./images/index2.jpg')}
                alt=""
              />
              <h5 style={styles.thirdPartyName}>神经网络与深度学习</h5>
              <p style={styles.thirdPartySold}>
                学时安排：
                <span style={styles.thirdPartySoldNumber}>206</span>
                小时
              </p>
              <p style={styles.thirdPartyDesc}>
                训练和应用深度神经网络的方法。通过医疗保健，自动驾驶，音乐生成和自然语言处理等案例研究，学习者不仅可以掌握深度学习理论，还可以了解它如何应用于工业。
              </p>
              <a style={styles.thirdPartyLink} href="#/classroom/detail">
                进入学习 <span style={styles.linkAdd}>➪</span>
              </a>
            </div>

            <div style={styles.thirdPartyDetailItem}>
              <img
                style={styles.thirdPartyDetailImg}
                src={require('./images/index3.jpg')}
                alt=""
              />
              <h5 style={styles.thirdPartyName}>云筑社区综合管理平台</h5>
              <p style={styles.thirdPartySold}>
                学时安排：
                <span style={styles.thirdPartySoldNumber}>287</span>
                小时
              </p>
              <p style={styles.thirdPartyDesc}>
                通过将权力平衡从公司转移到消费者，帮助您的团队了解数字工具如何改变营销。专题中最受欢迎的专题之一，数字世界营销被Class Central评为有史以来最好的50个MOOC之一。
              </p>
              <a style={styles.thirdPartyLink} href="#/classroom/detail">
                进入学习 <span style={styles.linkAdd}>➪</span>
              </a>
            </div>
            <a style={styles.thirdPartyMore} href="#/classroom/list">
              查看更多学习 ➪
            </a>
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
    paddingTop: '47px',
    paddingBottom: '100px',
    textAlign: 'left',
    width: '1200px',
    margin: '0 auto',
  },
  hyThirdPartyTitle: {
    position: 'relative',
    fontFamily: 'Microsoft YaHei',
    fontSize: '32px',
    lineHeight: '40px',
    color: '#000',
    fontWeight: '600',
    verticalAlign: 'middle',
    marginBottom: '0',
  },
  hyThirdPartySubTitle: {
    fontFamily: 'Microsoft YaHei',
    fontSize: '22px',
    color: '#000',
    fontWeight: '500',
    verticalAlign: 'middle',
    marginBottom: '40px',
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
