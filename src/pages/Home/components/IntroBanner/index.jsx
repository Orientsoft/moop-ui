import React, { Component } from 'react';
import Login from '../../../../components/Login';

export default class IntroBanner extends Component {
  static displayName = 'IntroBanner';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="intro-banner-wrap" style={style.introBannerWrapStyles}>
        <img
          className="intro-banner-img"
          src={require('./images/helloworld.jpg')}
          style={style.introBannerImgStyles}
          alt=""
        />
        <div
          className="intro-banner-img-mask"
          style={style.introBannerImgMaskStyles}
        />
        <div className="intro-banner-text" style={style.introBannerTextStyles}>
          <div style={style.introBannerLeft}>
            <h2
              className="intro-banner-title"
              style={style.introBannerTitleStyles}
            >
            培养您需要的
            </h2>
            <p
              className="intro-banner-subtitle"
              style={style.introBannerSubtitleStyles}
            ><br />
              转变您的组织提供您的将来需要的技能<br /><br />
              减少时间和成本通过利用edX审查的熟练用户群填充您<br /><br />
              产生影响创建增长文化，并通过提供按需学习平台帮助<br />
            </p>
          </div>
          <div style={style.introBannerRight}>
            <Login />
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  introBannerWrapStyles: {
    width: '100%',
    height: '590px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introBannerImgStyles: {
    position: 'absolute',
    top: '0',
    left: '50%',
    display: 'block',
    width: '100%',
    // height: '100%',
    transform: 'translateX(-50%)',
    zIndex: '10',
  },
  introBannerImgMaskStyles: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    background: '#000',
    opacity: '.45',
    zIndex: '15',
  },
  introBannerTextStyles: {
    position: 'relative',
    zIndex: '99',
    width: '1200px',
    color: '#fff',
    paddingBottom: '50px',
  },
  introBannerTitleStyles: {
    fontWeight: '500',
    fontSize: '64px',
    lineHeight: '70px',
    paddingTop: '94px',
    // textShadow: '2px 2px 1px rgba(0,0,0,0.57);',
    textShadowOffset: { width: '2px', height: '5px' },
    textShadowColor: 'rgba(0,0,0,0.57)',
  },
  introBannerSubtitleStyles: {
    marginTop: '8px',
    marginBottom: '48px',
    maxWidth: '768px',
    fontSize: '18px',
    color: 'rgba(255,255,255,.6)',
    lineHeight: '25px',
  },
  introBannerLeft: {
    width: '45%',
    float: 'left',
  },
  introBannerRight: {
    width: '360px', 
    marginBottom: '40px',
    float: 'right',
  },
};
