import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import get from 'lodash-es/get';
import Tab from '@/components/Tab';
import EurekaBanner from '@/components/EurekaBanner';
import { classroom } from '@/utils/api';
import { getCurrentUser } from '@/utils/helper';
import consts from '@/utils/consts';
import CourseCard from './CourseCard';
import CourseBlock from './CourseBlock';

const User = ({ data }) => (
  <Fragment>
    <EurekaBanner>
      <div className="row">
        <div className="col-12 col-md-6">
          <h2 className="large ">我的实验</h2>
        </div>
      </div>
    </EurekaBanner>
    <Tab>
      <Tab.Item title="实验课题" className="bg-white p-t-30 p-b-60">
        <div className="container p-b-60">
          {data.length ? (
            <Fragment>
              <div className="row">
                <div className="col-12 text-left m-b-20">
                  <h4>正在学习</h4>
                </div>
                {data.filter(c => !c.progress_status).map(course => <CourseCard key={course.id} data={course} />)}
              </div>
              <div className="row m-t-40 endcard">
                <div className="col-12 text-left m-b-20">
                  <h4>已完成学习</h4>
                </div>
                {data.filter(c => c.progress_status).map(course => <CourseCard key={course.id} data={course} />)}
              </div>
            </Fragment>
          ) : (
            <div className="row">
              <div className="col-12 text-center">
                <h4>您还没有激活课题</h4>
                <p>目前您没有任何激活的课题。</p>
                <p><Link to="/courses" className="btn btn-primary addcouse">浏览课题</Link></p>
                <p><img width="160" height="160" className="catalog-img" src="/static/images/empty_state.png" alt="浏览" /></p>
              </div>
            </div>
            )}
        </div>
      </Tab.Item>
      <Tab.Item title="我的成就" className="bg-white p-t-30 p-b-60">
        <div className="container p-b-60 ">
          {data.filter(c => c.progress_status).length ? (
            <div className="row courseslist">
              {data.filter(c => c.progress_status).map(course => (
                <div key={course.id} className="col-12 col-md-4 m-b-30">
                  <div className="card p-b-10 achieve">
                    <img className="card-img-top" src={get(course, 'thumb.thumbnail') ? course.thumb.thumbnail : '/static/images/index1.jpg'} alt={course.title} />
                    <div className="card-body">
                      <img className="card-imgico" src="/static/images/lc_c.png" alt="" />
                      <h5 className="card-title">{course.title}</h5>
                      <h6 className="card-title">老师评分： <span className="text-success">{get(consts.scores, course.score, '暂无评分')}</span></h6>
                      <p className="card-text">{moment(course.endTime).format('YYYY年MM月DD日')}学期结束</p>
                      <Link to={`/classroom?id=${course.id}`} className="btn bntlook">查看评语 </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="row p-t-60">
              <div className="col text-center">
                <h4>你还没有完成课题课程</h4>
                <p>目前您没有任何激活的课题。</p>
                <p><img width="92" className="catalog-img" src="/static/images/lc_w.png" alt="浏览" /></p>
              </div>
            </div>
          )}
        </div>
      </Tab.Item>
    </Tab>
  </Fragment>
);
const Teacher = ({ user, data }) => (
  <Fragment>
    <EurekaBanner>
      <div className="row">
        <div className="col-6 col-md-6">
          <h2 className="large">Hi, {user.realname}</h2>
          <p className=" text-warning card-text">您有 {data.length} 个课题</p>
        </div>
        <div className="col-6 col-md-6 text-right">
          <Link to="/createclassroom" className="btn btn-primary addcouse">创建课题<span className="link-add">+</span></Link>
        </div>
      </div>
    </EurekaBanner>
    <div className="bg-white p-t-60 p-b-60">
      <div className="container ">
        <div className="row">
          {data.length ? (
            data.map((course, i) => (
              <div key={i} className="col-12 courseslist col-md-4 m-b-30">
                {/* style={{ width: '33%', display: 'inline-block' }} */}
                <CourseBlock key={i} data={course} />
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="text-center">
                <h4>最后激活课题</h4>
                <p>目前您没有任何激活的课题。</p>
                <p><img width="160" height="160" className="catalog-img" src="/static/images/empty_state.png" alt="浏览" /></p>
              </div>
            </div>
        )}
        </div>
      </div>
    </div>
  </Fragment>
);

export default () => {
  const user = getCurrentUser();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    classroom.selectMine({ params: { all: 1 } }).then(({ data }) => setCourses(data.data));
  }, []);

  return user.role === consts.user.TEACHER ? <Teacher user={user} data={courses} /> : <User user={user} data={courses} />;
};
