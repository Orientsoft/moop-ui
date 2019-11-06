import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends PureComponent {
  render() {
    return (
      <Link to="/tenant" style={{ ...styles.logoStyle, ...this.props.style }}>
        K<span style={{ color: '#03a975' }}>@</span>S Lab
      </Link>
    );
  }
}

const styles = {
  logoStyle: {
    display: 'block',
    maxWidth: '180px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: '28px',
    color: '#fff',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  firstChar: {
    color: '#00ce72',
  },
};
