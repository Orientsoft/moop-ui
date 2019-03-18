import React, { Component } from 'react';

export default class FooterLinks extends Component {
  static displayName = 'FooterLinks';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.footerBox}>
        <div style={styles.footerBoxContent}>
          <div style={styles.footerClearfix} />
          <div style={styles.footerBoxLeft}>
            <ul style={styles.footerBoxContentUl}>
              <li style={styles.footerBoxContentLi} >
                <div style={styles.footerBoxContentItem}>
                  <div style={styles.footerBoxContentName}>关于</div>
                  <div>
                    <ul>
                      <li style={styles.footerBoxContentSubli}>
                        <a href="#" style={styles.footerBoxContentItemLink}>
                          关于我们
                        </a>
                      </li>
                      <li style={styles.footerBoxContentSubli}>
                        <a href="#/help" style={styles.footerBoxContentItemLink}>
                          常见问题
                        </a>
                      </li>
                      <li style={styles.footerBoxContentSubli}>
                        <a href="#" style={styles.footerBoxContentItemLink}>
                          服务协议
                        </a>
                      </li>
                      <li style={styles.footerBoxContentSubli}>
                        <a href="#/help" style={styles.footerBoxContentItemLink}>
                          帮助
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li style={styles.footerBoxContentLi}>
                <div style={styles.footerBoxContentItem}>
                  <div style={styles.footerBoxContentName}>友情链接</div>
                  <div>
                    <ul>
                      <li style={styles.footerBoxContentSubli}>
                        <a href="#" style={styles.footerBoxContentItemLink}>
                          友情链接
                        </a>
                      </li>
                      <li style={styles.footerBoxContentSubli}>
                        <a href="#" style={styles.footerBoxContentItemLink}>
                          广告合作
                        </a>
                      </li>
                      <li style={styles.footerBoxContentSubli}>
                        <a href="#" style={styles.footerBoxContentItemLink}>
                          开放日
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li style={styles.footerBoxContentLi_liwidth}>
                <div style={styles.footerBoxContentItem}>
                  <div style={styles.footerBoxContentName}>联系我们</div>
                  <div>
                    <ul>
                      <li style={styles.footerBoxContentSubli}>地址：成都市成华区建设北路一段76号1706</li>
                      <li style={styles.footerBoxContentSubli}>传真：028-84118086/84118096-888</li>
                      <li style={styles.footerBoxContentSubli}>电话：028-84118076/86/96</li>
                      <li style={styles.footerBoxContentSubli}> 邮件：wangzheng@orientsoft.cn</li>
                   
                    </ul>
                  </div>
                </div>
              </li>
              <li style={styles.footerClearfix} />
            </ul>
          </div>
          <div style={styles.footerBoxRight}>
            <div style={styles.footerBoxRightTitle}>关注我们</div>
            <div
              style={{
                ...styles.footerBoxRightItem,
                ...styles.footerBoxRightItemOpacity,
              }}
            >
              加入微信群
            </div>
            <div style={styles.footerBoxRightItem}>
              <img
                style={styles.footerBoxRightItemImg}
                src={require('./images/TB1J2tnuKSSBuNjy0FlXXbBpVXa-1060-1086.png')}
                alt=""
              />
            </div>
            <div
              style={{
                ...styles.footerBoxRightItem,
                ...styles.footerBoxRightItemOpacity,
              }}
            >
              打开微信扫一扫
            </div>
          </div>
          <div style={styles.footerClearfix} />
        </div>
      </div>
    );
  }
}

const styles = {
  footerBox: {
    backgroundColor: '#0E1A2E',
    WebkitFontSmoothing: 'antialiased',
    fontFamily: 'Tahoma,arial,Hiragino Sans GB,Microsoft Yahei',
    lineHeight: '1.6',
    boxSizing: 'border-box',
    minWidth: '1280px',
  },
  footerBoxContent: {
    width: '1240px',
    margin: '0 auto',
    padding: '50px 0px 30px',
    boxSizing: 'border-box',
  },
  footerClearfix: {
    display: 'block',
    height: 0,
    boxSizing: 'border-box',
    clear: 'both',
  },
  footerBoxLeft: {
    float: 'left',
    width: '1020px',
    boxSizing: 'border-box',
  },
  footerBoxRight: {
    float: 'right',
    width: '220px',
    paddingLeft: '80px',
    borderLeft: '1px solid rgba(151,151,151,0.4)',
    boxSizing: 'border-box',
  },
  footerBoxContentUl: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
  },
  footerBoxContentLi: {
    listStyle: 'none',
    marginLeft: '0',
    boxSizing: 'border-box',
    float: 'left',
    width: '20%',
    paddingRight: '10px',
  },
  footerBoxContentLi_liwidth:{
    width: '45%',
    listStyle: 'none',
    marginLeft: '0',
    boxSizing: 'border-box',
    float: 'left',
    paddingRight: '10px',
  },
  footerBoxContentItem: {
    // width: '208px',
    boxSizing: 'border-box',
  },
  footerBoxContentName: {
    fontSize: '22px',
    color: '#FFFFFF',
    paddingBottom: '20px',
    boxSizing: 'border-box',
  },
  footerBoxContentSubli: {
    paddingTop: '14px',
    whiteSpace: 'normal',
    wordBreak: 'break-all',
    overflow: 'hidden',
    boxSizing: 'border-box',
    listStyle: 'none',
    fontSize: '14px',
    color: '#FFFFFF',
    opacity: '0.6',
  },
  footerBoxContentItemLink: {
    fontSize: '14px',
    color: '#FFFFFF',
    // opacity: '0.6',
    textDecoration: 'none',
  },
  footerBoxRightTitle: {
    paddingBottom: '16px',
    fontSize: '22px',
    color: '#FFFFFF',
    boxSizing: 'border-box',
  },
  footerBoxRightItem: {
    paddingTop: '12px',
    fontSize: '14px',
    color: '#FFFFFF',
    boxSizing: 'border-box',
  },
  footerBoxRightItemOpacity: {
    opacity: 0.6,
  },
  footerBoxRightItemImg: {
    width: '97px',
    height: '97px',
    border: '0',
    boxSizing: 'border-box',
  },
};
