import React, { Component } from 'react';

export default class SimpleTestimonial extends Component {
  render() {
    const { data = {} } = this.props;

    return (
      <div className="simple-testimonial" style={styles.simpleTestimonial}>
        <img
          style={styles.avatar}
          src={data.thumb}
          alt={data.name}
        />
        <div style={styles.item}>
          <h5 style={styles.name}><a href="#/userteacher">{data.name}</a></h5>
          <p style={styles.company}>就职公司/职务</p>
          <p style={styles.description}>{data.remark}</p>
        </div>
      </div>
    );
  }
}

const styles = {
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
