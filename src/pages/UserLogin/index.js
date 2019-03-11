import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
// import IntroBanner from './components/IntroBanner';
// import BasicTab from './components/BasicTab';
// import CreateActivityForm from './components/CreateActivityForm';

// import ProjectList from '../../components/ProjectList';
// import Introduction from '../../components/Introduction';

import './index.scss';

export default class ClassroomList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        {/* <IntroBanner /> */}
        {/* <BasicTab />
        <div className="pro-container">
          <CreateActivityForm />
        </div> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

