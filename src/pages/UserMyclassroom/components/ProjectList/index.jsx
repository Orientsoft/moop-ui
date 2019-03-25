import React, { Component } from 'react';
import moment from 'moment';
import './index.scss';

export default class Header extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="pro-card">
        <div className="card-header">
          <h5>{data.title}</h5>
          <span style={styles.titletime}>{moment(data.createdAt).format('YYYY年MM月DD日')}</span>
        </div>
        <div className="card-collapse">
          <div className="list-group">
            <span className="learnLesson all"><i></i></span>
            <a href="#">→ Garch模型的实现-单变量 </a>
            <span className=" time exend">已完成</span>
          </div>
          <div className="-body" style={styles.overviewRatingCard}>
            <h5 className="card-title">老师评语</h5>
            {/* <div style={styles.overviewRatingWrapper}>
              <span style={styles.overviewRatingCount}>4.5</span>
              <span style={styles.overviewRating}>
                <Rating value={4.5} disabled />
              </span>
            </div> */}
            <p className="card-text">本课程是空间信息和数字技术专业的专业课，是该专业大部分其他专业的前导课程。 几乎所有专业的大学生，都可以学习运用空间信息工程技术专业知识，与自己的创新创业目标融合。</p>
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  titletime: {
    color: '#666',
    marginTop: '10px',
    display: 'inline-block',
  },
  overviewRatingCard: {
    position: 'relative',
    padding: '20px',
  },
  overviewRatingWrapper: {
    position: 'absolute',
    display: 'flex',
    textAlign: 'center',
    right: '20px',
    top: '25px',
  },
  overviewRatingCount: {
    fontSize: '18px',
    margin: '0 10px',
  },
  overviewDetail: {
    marginTop: 20,
  },
};

