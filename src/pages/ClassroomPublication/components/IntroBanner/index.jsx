import React, { Component } from 'react';
import './index.scss';

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
      <div className="intro-banner-wrap">
        <div className="intro-banner-img-mask">
          <div className="intro-banner-text" >
            <h2 className="intro-banner-title"> 老师创建专题</h2>
          </div>
        </div>
      </div>
    );
  }
}
