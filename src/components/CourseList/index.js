import React, { useEffect, useState } from 'react';
import get from 'lodash-es/get';
import { Link } from 'react-router-dom';
import { classroom } from '@/utils/api';

export default ({ size = 15, tag }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const config = { params: {} };

    if (tag) {
      config.params.tag = tag;
    }
    classroom.selectAll(config).then(({ data }) => setCourses(data.data));
  }, [size, tag]);

  return (
    <div className="row m-t-40">
      {courses.slice(0, size).map(({ id, title, description, thumb, timeConsume }) => (
        <div key={id} className="col-12 courseslist  col-md-4 m-b-30">
          <div className="card p-b-10">
            <div className="post"><Link to={`/classroom?id=${id}`} ><img className="card-img-top" src={get(thumb, 'thumbnail') ? thumb.thumbnail : '/static/images/index1.jpg'} alt={title} /></Link></div>
            <div className="card-body text-left">
              <h5 className="card-title"><Link to={`/classroom?id=${id}`} >{title}</Link></h5>
              <p className="card-text">{description}</p>
              <span className="text-secondary fs12">学时安排：{timeConsume}</span>
              {/* <Link to={`/classroom?id=${id}`} className="btn indexbtn">查看详情</Link> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
