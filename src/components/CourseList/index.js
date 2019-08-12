/* eslint-disable */
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { getCourseCover } from '@/utils/helper';
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
      {courses.length ? courses.slice(0, size).map(({ id, title, description, thumb, timeConsume, list_running, public: isPublic, confirm, limit }, i, allCourses) => (
        <div key={id} className="col-12 courseslist  col-md-4 m-b-30">
          <div className="card p-b-10">
            <div className="post">
              <Link to={`/classroom?id=${id}`}>
                <img className="card-img-top" src={getCourseCover(allCourses[i])} alt={title} />
                {!isPublic && <div style={privateCourse}>私有课程</div>}
              </Link>
            </div>
            <div className="card-body text-left">
              <h5 className="card-title"><Link to={`/classroom?id=${id}`} >{title}</Link></h5>
              <div className="card-text card-overflow">
                <ReactMarkdown source={description} escapeHtml={false} />
              </div>
              <div className="text-secondary fs12" style={{ position: 'relative' }}>
                <span>学时安排：{timeConsume}</span>
                <span style={{ position: 'absolute', right: 0 }}>已加入 <span style={{ color: 'green' }}>{confirm ? confirm.confirmed : 0}</span> 人 ／ 人数上限 {limit || 0} 人</span>
              </div>
              {list_running ? <span className="couserun">正在学习</span> : ''}
            </div>
          </div>
        </div>
      )) : (
        <div className="container p-b-60 ">
          <div className="row p-t-60">
            <div className="col text-center">
              <h4>当前分类还没有课题</h4>
              <p><img width="160" height="160" className="catalog-img" src="/static/images/empty_state.png" alt="浏览" /></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const privateCourse = {
  position: 'absolute',
  right: '-50%',
  top: 0,
  lineHeight: '40px',
  width: '100%',
  height: '40px',
  textIndent: '-1.5em',
  color: 'white',
  background: 'salmon',
  boxShadow: '0px 0px 4px salmon',
  transform: 'rotate(45deg) translateY(40px)',
};