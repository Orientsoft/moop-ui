import React, { useEffect, useState } from 'react';
import get from 'lodash-es/get';
import { Link } from 'react-router-dom';
import { classroom } from '@/utils/api';

export default ({ size = 9, tag }) => {
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
        <div key={id} className="col-12 col-md-4 m-b-30">
          <div className="card p-b-10">
            <img className="card-img-top" src={get(thumb, 'thumbnail') ? thumb.thumbnail : '/static/images/index1.jpg'} alt={title} style={{ height: 124 }} />
            <div className="card-body text-left">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="text-success fs14">学时安排：{timeConsume}</p>
              <Link to={`/classroom?id=${id}`} className="btn btn-primary">查看详情 <span className="link-add">➪</span></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
