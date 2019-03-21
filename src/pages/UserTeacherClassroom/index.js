import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProjectList from './components/ProjectList';
import BasicTab from './components/BasicTab';

export default class ClassroomList extends Component {
  static displayName = 'ReviewOverview';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div >
        <Header {...this.props} />
        <div className="intro-banner-wrap">
          <div className="intro-banner-img-mask">
            <div className="intro-banner-text" >
              <h2 className="intro-banner-title"> 老师的专题</h2>
            </div>
          </div>
        </div>
        <BasicTab />
        <div className="pro-container"> 
          <ProjectList />
          <ProjectList />
        </div>
        <Footer />
      </div>
    );
  }
}
const styles = {
  paddingtop: {
    paddingTop: '20px',
    paddingBottom: '60px',
    
  },
};
