import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ClassroomCard from '../../components/ClassroomCard';
import Introduction from '../../components/Introduction';

export default class ClassroomList extends Component {
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
            <Introduction />
          </div>
        </div>
      
        <div style={styles.paddingtop}>
          <ClassroomCard />
        </div>
        <Footer />
      </div>
    );
  }
}
const styles = {
  paddingtop: {
    paddingTop: '60px',
  },
};
