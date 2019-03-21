import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ClassroomCard from '../../components/ClassroomCard';
import { classroom } from '../../utils/api';
import CompositeFilter from './components/CompositeFilter';

export default class ClassroomList extends Component {
  constructor(props) {
    super(props);
    this.state = { courses: [] };
  }

  componentDidMount() {
    classroom.selectAll().then(({ data: { data } }) => this.setState({ courses: data }));
  }

  onTagChange = (tags) => {
    classroom.selectAll({
      params: {
        tags: tags.map(tag => tag.id).join(','),
      },
    }).then(({ data: { data } }) => this.setState({ courses: data }));
  };

  render() {
    const { courses } = this.state;

    return (
      <div >
        <Header {...this.props} />
        <div style={styles.paddingtop}>
          <CompositeFilter onTagChange={this.onTagChange} />
          <ClassroomCard data={courses} />
        </div>
        <Footer />
      </div>
    );
  }
}
const styles = {
  paddingtop: {
    paddingTop: '80px',
  },
};
