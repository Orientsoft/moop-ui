import React, { Component } from 'react';

const LIGHT =
  require('./images/TB1KmB6nntYBeNjy1XdXXXXyVXa-224-60.png');
const DARK =
  require('./images/TB1saOBbYGYBuNjy0FoXXciBFXa-218-58.png');

export default class Logo extends Component {
  render() {
    const { isDark } = this.props;
    const logo = isDark ? DARK : LIGHT;
    return (
      <div
        className="logo"
        style={{
          height: 32,
          color: '#f40',
          float: 'left',
          textAlign: 'left',
        }}
      >
        <a href="#/home" style={{ display: 'block', position: 'relative', color: '#fff', fontSize: '40px',letterSpacing: '.05em' }}>
          {/* <img src={logo} width="129" height="35" alt="logo" /> */}
          <span style={{ color: '#2ebc4f' }}>E</span>ureka
        </a>
      </div>
    );
  }
}
