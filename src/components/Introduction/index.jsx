import React, { Component } from 'react';
import { user } from '../../utils/api';

export default class SimpleTestimonial extends Component {
  state = {};

  componentDidMount() {
    user.select({}, { userId: this.props.teacherId }).then(({ data }) => {
      this.setState({ teacher: data });
    });
  }

  render() {
    const { teacher = {} } = this.state;

    return (
      <div className="simple-testimonial" style={styles.simpleTestimonial}>
        <img
          style={styles.avatar}
          src={require('./images/teacher1.png')}
          alt={teacher.name}
        />
        <div style={styles.item}>
          <h5 style={styles.name}><a href="#/userteacher">{teacher.name}</a></h5>
          <p style={styles.company}>就职公司/职务</p>
          <p style={styles.description}>{teacher.remark}</p>
        </div>
      </div>
    );
  }
}

const styles = {
  item: {
    // width: '100%',
    // maxWidth: '1080px',
    // margin: '0 auto',
    // textAlign: 'left',
  },
  // description: {
  //   lineHeight: '28px',
  //   color: '#999',
  //   fontSize: '14px',
  // },
  infoBox: {
    display: 'flex',
    textAlign: '',
    justifyContent: 'left',
    alignItems: 'left',
    marginTop: '40px',
  },
  avatar: {
    width: '128px',
    height: '128px',
    float: 'left',
    display: 'inline-block',
    marginRight: '20px',
    borderRadius: '50%',
  },
  name: {
    margin: '0 0 10px',
    fontSize: '25px',
    fontWeight: 'bold',
  },
  company: {
    margin: 0,
  },
  simpleTestimonial: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'left',
  },
};
