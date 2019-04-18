import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <Tab.Item title="实验专题" className="bg-white m-t-20 p-b-60">
        <div className="container p-b-60">
          {data.length ? (
            <Fragment>
              <div className="row">
                <div className="col-12 text-left m-b-20">
                  <h4>正在学习</h4>
                </div>
                {data.map(course => <CourseCard key={course.id} data={course} />)}
              </div>
              <div className="row m-t-40 endcard">
                <div className="col-12 text-left m-b-20">
                  <h4>已完成学习</h4>
                </div>
              </div>
            </Fragment>
          ) : (
            <div className="row">
              <div className="col-12 text-center">
                <h4>您还没有激活专题</h4>
                <p>目前您没有任何激活的专题。</p>
                <p><Link to="/courses" className="btn btn-primary addcouse">浏览专题</Link></p>
                <p><img width="160" height="160" className="catalog-img" src="/static/images/empty_state.png" alt="浏览" /></p>
              </div>
            </div>
            )}
        </div>
      </Tab.Item>
      <Tab.Item title="我的成就" className="bg-white m-t-20 p-b-60">
        <div className="container p-b-60 ">
          <div className="row p-t-60">
            <div className="col text-center">
              <h4>你还没有完成专题课程</h4>
              <p>目前您没有任何激活的专题。</p>
              <p><img width="92" className="catalog-img" src="/static/images/lc_w.png" alt="浏览" /></p>
            </div>
          </div>
          <div className="row ">
            <div className="col-12 text-left m-b-20">
              <h4>我的成就</h4>
            </div>
            <div className="col-12 col-md-4">
              <div className="card p-b-10 achieve">
                <img className="card-img-top" src="/static/images/index2.jpg" alt="神经网络与深度学习" />
                <div className="card-body">
                  <img className="card-imgico" src="/static/images/lc_c.png" alt="" />
                  <h5 className="card-title">神经网络与深度学习</h5>
                  <h6 className="card-title">老师评分： <span className="text-success">A+</span></h6>
                  <p className="card-text">
                    2019年6月24日学期结束
                  </p>
                  <Link to="/classroom" className="btn bntlook">查看评语 </Link>
                </div>
              </div>
            </div>
          </div>
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
          <h2 style={{ fontSize: 18 }}>您有 {data.length} 个专题</h2>
        </div>
        <div className="col-6 col-md-6 text-right">
          <Link to="/createclassroom" className="btn btn-primary addcouse">创建专题<span className="link-add">+</span></Link>
        </div>
      </div>
    </EurekaBanner>
    <div className="bg-white p-t-60 p-b-60">
      <div className="container p-b-60 ">
        {data.length ? (
          data.map((course, i) => <CourseBlock key={i} data={course} />)
        ) : (
          <div className="row ">
            <div className="col-12">
              <div className="text-center">
                <h4>最后激活专题</h4>
                <p>目前您没有任何激活的专题。</p>
                <p><img width="160" height="160" className="catalog-img" src="/static/images/empty_state.png" alt="浏览" /></p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </Fragment>
);

export default () => {
  const user = getCurrentUser();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    classroom.selectMine().then(({ data }) => setCourses(data.data));
  }, []);

  return user.role === consts.user.TEACHER ? <Teacher user={user} data={courses} /> : <User user={user} data={courses} />;
};
