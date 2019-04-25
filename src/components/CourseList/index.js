/* eslint-disable */
import React, { useEffect, useState } from 'react';
import get from 'lodash-es/get';
import { Link } from 'react-router-dom';
import { classroom } from '@/utils/api';

export default ({ size = 99, tag, owner }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const config = { params: {} };

    if (tag) {
      config.params.tag = tag;
    }
    if (owner) {
      config.params.owner = owner;
      config.params.all = 1;
    }
    classroom.selectAll(config).then(({ data }) => setCourses(data.data));
  }, [size, tag]);

  return (
    <div className="row m-t-40">
      {courses.length ? courses.slice(0, size).map(({ id, title, description, thumb, timeConsume, list_running }) => (
        <div key={id} className="col-12 courseslist  col-md-4 m-b-30">
          <div className="card p-b-10">
            <div className="post"><Link to={`/classroom?id=${id}`} ><img className="card-img-top" src={get(thumb, 'thumbnail') ? thumb.thumbnail : '/static/images/index1.jpg'} alt={title} /></Link></div>
            <div className="card-body text-left">
              <h5 className="card-title"><Link to={`/classroom?id=${id}`} >{title}</Link></h5>
              <p className="card-text">{description}</p>
              <span className="text-secondary fs12">学时安排：{timeConsume}</span>
              <span>{list_running ? '正在学习' : '未开始'}</span>
            </div>
          </div>
        </div>
      )) : (
        <div className="container p-b-60 ">
          <div className="row p-t-60">
            <div className="col text-center">
              <h4>当前分类还没有专题</h4>
              <p><img width="160" height="160" className="catalog-img" src="/static/images/empty_state.png" alt="浏览" /></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
