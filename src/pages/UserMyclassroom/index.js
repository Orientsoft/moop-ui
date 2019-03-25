import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProjectList from './components/ProjectList';
import { classroom } from '../../utils/api';

export default class ClassroomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      preview: 0,
    };
  }

  componentDidMount() {
    classroom.selectMine().then(({ data }) => {
      this.setState({ courses: data.data });
    });
  }

  onSwitchCourse = i => this.setState({ preview: i });

  render() {
    const { courses, preview } = this.state;

    return (
      <div >
        <Header {...this.props} />
        <div className="intro-banner-wrap">
          <div className="intro-banner-img-mask">
            <div className="intro-banner-text" >
              <h2 className="intro-banner-title"> 我的专题</h2>
            </div>
          </div>
        </div>
        <div className="pro-container" style={styles.paddingtop} >
          <div className="pro-left">
            {/* <h3 className="subtit">神经网络与深度学习</h3> */}
            {courses.map((course, i) => (preview === i ? <ProjectList key={i} data={course} /> : null))}
          </div>
          <div className="pro-right" >
            <h3 className="subtit">我的专题</h3>
            {courses.map((course, i) => (
              <div key={i} style={styles.thirdPartyDetailItem}>
                <img
                  style={styles.thirdPartyDetailImg}
                  src={course.thumb.thumbnail}
                  onClick={() => this.onSwitchCourse(i)}
                  alt={course.title}
                />
                <h5 onClick={() => this.onSwitchCourse(i)} style={styles.thirdPartyName}>{course.title}</h5>
                <p style={styles.thirdPartySold}>
                  学时安排：
                  <span style={styles.thirdPartySoldNumber}>{course.timeConsume}</span>
                </p>
                <Link style={styles.thirdPartyLink} to={`/classroom/detail?id=${course.id}`}>进入学习 <span style={styles.linkAdd}>➪</span></Link>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const styles = {
  paddingtop: {
    paddingTop: 20,
    paddingBottom: '60px',
  },
  thirdPartyDetailItem: {
    paddingTop: '10px',
    paddingBottom: '20px',
  },
  thirdPartyDetailImg: {
    width: '100%',
    borderRadius: '2px 2px 0 0',
    position: 'relative',
    left: '0',
    border: '0',
    cursor: 'pointer',
  },
  thirdPartyName: {
    margin: '10px 10px 6px',
    fontSize: '20px',
    lineHeight: '28px',
    color: '#333',
    fontWeight: '600',
    cursor: 'pointer',
  },
  thirdPartySold: {
    margin: '10px 10px 6px',
    fontSize: '14px',
    color: '#28a745',
    lineHeight: '20px',
  },
  thirdPartySoldNumber: {
    color: '#28a745',
    fontWeight: '500',
    marginRight: '3px',
  },
  thirdPartyDesc: {
    margin: '5px 20px 6px',
    color: '#333',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '24px',
    height: '50px',
    overflow: 'hidden',
  },
  thirdPartyLink: {
    padding: 0,
    margin: '10px 10px 6px',
    // margin: '10px 20px 6px',
    display: 'inline-block',
    fontSize: '14px',
    border: 'none',
    color: '#108ee9',
  },
};
