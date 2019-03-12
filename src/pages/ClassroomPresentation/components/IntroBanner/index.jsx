import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Slider } from '@alifd/next';
import './index.scss';

const slides = [
  {
    url: require('./images/schoolbg6.jpg'),
    text: '手机淘宝皮肤征集',
    textinfo: '手机淘宝皮肤征集',
    textgo: '进入实验',
    textedit: '编辑项目',
  },
  {
    url: require('./images/schoolbg-6.jpg'),
    text: '阿里公益T恤设计大概',
    textinfo: '手机淘宝皮肤征集',
    textgo: '进入实验',
    textedit: '编辑项目',
  },
  {
    url: require('./images/schoolbg-7.jpg'),
    text: '阿里公益T恤设计大概',
    textinfo: '手机淘宝皮肤征集',
    textgo: '进入实验',
    textedit: '编辑项目',
  },
];
export default class IntroBanner extends Component {
  static displayName = 'IntroBanner';
  // static displayName = 'SimpleSlider';


  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="intro-banner-wrap">
        <Slider>
          {slides.map((item, index) => (
            <div key={index}>
              <img src={item.url} alt={item.text} style={styles.itemImg} />
              <div className="intro-banner-slider">
                <div className="intro-banner-text" >
                  <h2 className="intro-banner-title">{item.text}</h2>
                  <p className="intro-banner-subtitle"><br />
                    {item.textinfo}
                  </p>
                  <p>
                    <a href="#" className="startbtn">{item.textgo}</a>
                    <a href="#/classroom/publication" className="whitebtn">{item.textedit}</a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
const styles = {
  itemImg: {
    width: '100%',
  },
};