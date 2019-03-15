import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IntroBanner from './components/IntroBanner';
import BasicTab from './components/BasicTab';
import CreateActivityForm from './components/CreateActivityForm';

export default class ClassroomList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div className="intro-banner-wrap">
          <div className="intro-banner-img-mask">
            <div className="intro-banner-text" >
              <h2 className="intro-banner-title"> 老师创建专题</h2>
            </div>
          </div>
        </div>
        <BasicTab />
        <div className="pro-container">
          <CreateActivityForm />
        </div>
        <Footer />
      </div>
    );
  }
}

