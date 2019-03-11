import React, { Component } from 'react';
import './index.scss';
import { Button } from '@alifd/next';
export default class ExcellentHomePage extends Component {
  static displayName = 'ExcellentHomePage';

  render() {
    return (
      <div className="excellent-home-page" style={{ height: '43vh' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.4,
            backgroundSize: 'cover',
            backgroundImage: `url(${require('./images/slbg1.jpg')})`,
            backgroundPosition: 'center',
          }}
        />

        <div className="excellent-home-page-background" />
        <div className="excellent-home-page-content-wrapper">
          <div className="excellent-home-page-content">
            <h2 className="title">为您确定正确的学习途径</h2>
            <p className="subtitle">
             将您的目标与我们的计划相匹配，探索您的选择，并确定您的成功之路。
            </p>
            <div
              className="excellent-home-page-buttons"
              style={{ textAlign: 'center', marginTop: 30 }}
            >
              <a href="/framework/">
                <Button
                  style={{
                    height: 50,
                    padding: '0 58px',
                    fontSize: 16,
                    marginBottom: '20px',
                    background: '#00CE72',
                  }}
                  type="primary"
                  size="large"
                >
                  快速上手
                  <div
                    style={{
                      marginLeft: '5px',
                      display: 'inline-block',
                      width: '10px',
                      height: '10px',
                      borderRight: '1px solid #fff',
                      borderBottom: '1px solid #fff',
                      transform: 'rotate(-45deg)',
                    }}
                  />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

