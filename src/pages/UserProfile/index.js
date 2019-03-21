import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CreateActivityForm from './components/CreateActivityForm';
// import BasicTab from './components/BasicTab';

export default class ClassroomList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header {...this.props} />
        <div className="intro-banner-wrap">
          <div className="intro-banner-img-mask">
            <div className="intro-banner-text" >
              <h2 className="intro-banner-title"> 我的档案</h2>
            </div>
          </div>
        </div>
        {/* <BasicTab /> */}
        <div className="pro-container">
          <CreateActivityForm />
        </div>
        <Footer />
      </div>
    );
  }
}

