import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ClassroomCard from '../../components/ClassroomCard';

export default class ClassroomList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div >
        <Header />
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
