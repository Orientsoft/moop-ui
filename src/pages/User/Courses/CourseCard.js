import React from 'react';
import { Link } from 'react-router-dom';
import get from 'lodash-es/get';
import moment from 'moment';

export default ({ data }) => {
  return (
    <div className="col-12 courseslist col-md-4 m-b-30">
      <div className="card p-b-10">
        <img className="card-img-top" src={get(data, 'thumb.thumbnail') ? data.thumb.thumbnail : '/static/images/index1.jpg'} alt={data.title} />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text font-italic" style={{ height: 'auto' }}>
            已学习 {data.progress_count} 个实验
          </p>
          {/* <div className="progress m-b-10">
            <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
          </div> */}
          <p className="card-text font-italic" style={{ height: 'auto' }}>
            {moment(data.endTime).format('YYYY年MM月DD日')}学期结束
          </p>
          <Link to={`/classroom?id=${data.id}`} className="btn btn-primary m-t-20">进入学习 <span className="link-add">+</span></Link>
        </div>
      </div>
    </div>
  );
};
