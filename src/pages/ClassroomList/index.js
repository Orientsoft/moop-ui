import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ClassroomCard from '../../components/ClassroomCard';
import { classroom } from '../../utils/api';

export default class ClassroomList extends Component {
  constructor(props) {
    super(props);
    this.state = { courses: [] };
  }

  componentDidMount() {
    classroom.selectAll().then(({ data: { data } }) => this.setState({ courses: data }));
  }

  render() {
    const { courses } = this.state;

    return (
      <div >
        <Header />
        <div style={styles.paddingtop}>
          <ClassroomCard data={courses} />
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
