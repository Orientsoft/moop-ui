import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tab from '@/components/Tab';
import { classroom } from '@/utils/api';
import { getCurrentUser } from '@/utils/helper';
import consts from '@/utils/consts';
import CourseCard from './CourseCard';
import CourseBlock from './CourseBlock';

const User = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    classroom.selectMine().then(({ data }) => setCourses(data.data));
  }, []);

  return (
    <Fragment>
      <div className="bg-conttop p-t-60 p-b-60">
        <div className="container  text-left">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="large ">我的实验</h2>
            </div>
          </div>
        </div>
      </div>
      <Tab>
        <Tab.Item title="实验专题" className="bg-white m-t-20 p-b-60">
          <div className="container p-b-60">
            {courses.length ? (
              <Fragment>
                <div className="row">
                  <div className="col-12 text-left m-b-20">
                    <h4>正在学习</h4>
                  </div>
                  <CourseCard />
                  <CourseCard />
                </div>
                <div className="row m-t-40 endcard">
                  <div className="col-12 text-left m-b-20">
                    <h4>已完成学习</h4>
                  </div>
                  <CourseCard />
                  <CourseCard />
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
        <Tab.Item title="我的成就" className="bg-white m-t-20 p-b-60"></Tab.Item>
      </Tab>
    </Fragment>
  );
};

const Teacher = () => {
  return (
    <Fragment>
      <div className="bg-conttop p-t-60 p-b-60">
        <div className="container  text-left">
          <div className="row">
            <div className="col-6 col-md-6">
              <h2 className="large ">老师专题例表</h2>
            </div>
            <div className="col-6 col-md-6 text-right">
              <a href="createcourse.html" className="btn btn-primary  addcouse">创建专题 <span className="link-add">+</span></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-t-60 p-b-60">
        <div className="container p-b-60 ">
          <div className="row ">
            <div className="col-12">
              <div className="text-center">
                <h4>最后激活专题</h4>
                <p>目前您没有任何激活的专题。</p>
                <p><img width="160" height="160" className="catalog-img" src="/static/images/empty_state.png" alt="浏览" /></p>
              </div>
            </div>
          </div>
          <CourseBlock />
          <CourseBlock />
        </div>
      </div>
    </Fragment>
  );
};

export default () => {
  const user = getCurrentUser();

  return user.role === consts.user.TEACHER ? <Teacher /> : <User />;
};
