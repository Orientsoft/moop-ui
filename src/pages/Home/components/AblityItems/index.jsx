import React, { Component } from 'react';

export default class AblityItems extends Component {
  static displayName = 'AblityItems';

  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div className="hy-ability" style={style.hyAbilityStyles}>
        <hr></hr>
        <div style={style.hyThirdParty}>
          <h3 style={style.hyThirdPartyTitle}>
            内容由世界领先的机构开发
          </h3>
          <p style={style.hyThirdPartySubTitle}>Please select your intresting course , and start !</p>
        </div>
        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            alt=""
            src={require('./images/lear1.png')}
            style={style.hyAbilityItemImgStyle}
          />
          <h3 style={style.hyAbilityItemTitleStyle}>随时随地学习</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>
           学习者可以使用iOS和Android上的应用程序随时随地学习Coursera。还可以下载专题以供离线观看。
          </p>
        </div>

        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            alt=""
            src={require('./images/lear2.png')}
            style={style.hyAbilityItemImgStyle}
          />
          <h3 style={style.hyAbilityItemTitleStyle}>直观的课堂体验</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>
            Coursera专题将视频专题与交互式评估，测验和同行评审作业配对。
          </p>
        </div>

        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            alt=""
            src={require('./images/lear3.png')}
            style={style.hyAbilityItemImgStyle}
          />
          <h3 style={style.hyAbilityItemTitleStyle}>设计出色的L＆D计划</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>
            您可以设计世界一流的学习计划，而无需开发自己的内容。
          </p>
        </div>
      </div>
    );
  }
}

const style = {
  hyAbilityStyles: {
    fontFamily: 'Microsoft YaHei',
    paddingBottom: '120px',
    textAlign: 'center',
    background: '#fff',
  },
  hyThirdParty: {
    paddingTop: '47px',
    width: '1200px',
    margin: '0 auto',
  },
  hyThirdPartyTitle: {
    position: 'relative',
    textAlign: 'center',
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
    textAlign: 'center',
    verticalAlign: 'middle',
    marginBottom: '40px',
  },
  hyAbilityItemStyle: {
    display: 'inline-block',
    width: '280px',
    margin: '38px 35px 0',
    verticalAlign: 'top',
    textAlign: 'left',
  },
  hyAbilityItemImgStyle: {
    // height: '62px',
  },
  hyAbilityItemTitleStyle: {
    fontSize: '20px',
    lineHeight: '26px',
    color: '#333',
    fontWeight: '400',
    margin: '18px 0 10px',
  },
  hyAbilityItemSubtitleStyle: {
    fontSize: '16px',
    color: '#666',
    lineHeight: '30px',
  },
};
