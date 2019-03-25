import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ClassroomCard from '../../components/ClassroomCard';

import IntroBanner from './components/IntroBanner';
import AblityItems from './components/AblityItems';
import IntroTab from './components/IntroTab';
import { classroom } from '../../utils/api';

export default class Home extends Component {
  static displayName = 'Home';
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    classroom.selectAll({ params: { pageSize: 3 } }).then(({ data: { data } }) => this.setState({ courses: data }));
  }

  render() {
    const { courses } = this.state;

    return (
      <div style={styles.container}>
        <Header {...this.props} />
        <IntroBanner {...this.props} />
        <h3 style={styles.hyThirdPartyTitle}>
          内容由世界领先的机构开发
        </h3>
        <p style={styles.hyThirdPartySubTitle}>Please select your intresting course , and start !</p>
        <ClassroomCard data={courses}>
          <Link style={styles.thirdPartyMore} to="/classroom/list">
            查看更多学习 ➪
          </Link>
        </ClassroomCard>
        <AblityItems />
        <IntroTab />
        {/* <SlideBanner /> */}
        <Footer />
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    minWidth: '1280px',
  },
  hyThirdPartyTitle: {
    textAlign: 'center',
    fontFamily: 'Microsoft YaHei',
    fontSize: '32px',
    lineHeight: '40px',
    color: '#000',
    fontWeight: '600',
    paddingTop: '30px',
    verticalAlign: 'middle',
    marginBottom: '0',
  },
  hyThirdPartySubTitle: {
    fontFamily: 'Microsoft YaHei',
    fontSize: '22px',
    color: '#000',
    fontWeight: '500',
    textAlign: 'center',
    verticalAlign: 'middle',
    marginBottom: '40px',
  },
  thirdPartyMore: {
    position: 'absolute',
    left: '44%',
    bottom: '-50px',
    color: '#108ee9',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: '500',
    padding: '10px 30px',
    textDecoration: 'none',
    border: '1px solid #108ee9',
    borderRadius: '4px',
    WebkitTransition: 'all .2s linear',
    transition: 'all .2s linear',
  },
};
