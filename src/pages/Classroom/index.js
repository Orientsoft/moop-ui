import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import moment from 'moment';
import { classroom, invitation } from '@/utils/api';
import consts from '@/utils/consts';
import { getCurrentUser } from '@/utils/helper';
import Tab from '@/components/Tab';
import ProjectList from '@/components/ProjectList';
import TeacherList from '@/components/TeacherList';

export default ({ history }) => {
  const [course, setCourse] = useState(null);
  const user = getCurrentUser();
  const onJoin = () => {
    if (user) {
      if (user.check) {
        invitation.create({
          data: {
            invitee: user.id,
            classroom: course.id,
            confirmed: true,
          },
        });
      } else {
        history.push('/user/profile');
      }
    } else {
      history.push('/login');
    }
    return false;
  };
  const naver = useRef(null);

  useEffect(() => {
    const url = queryString.parse(history.location.search);
    const container = document.querySelector('.ice-layout-scrollable');
    const fixedNaver = (e) => {
      if (naver && naver.current) {
        if (e.target.scrollTop >= 424) {
          naver.current.style.position = 'fixed';
          naver.current.style.left = `${naver.current.parentNode.offsetLeft + 15}px`;
          naver.current.style.top = '90px';
          naver.current.style.width = '255px';
        } else {
          naver.current.style.position = 'relative';
          naver.current.style.left = 0;
          naver.current.style.top = 0;
        }
      }
    };

    classroom.select({ params: { embed: 1 } }, { classroomId: url.id })
      .then(({ data }) => setCourse(data));
    container.addEventListener('scroll', fixedNaver);
    return () => container.removeEventListener('scroll', fixedNaver);
  }, [history.location.search]);

  return course ? (
    <Fragment>
      <div className="bg-conttop p-t-60 p-b-60">
        <div className="container  text-left">
          <div className="row">
            <div className="col-12 col-md-7 m-b-30">
              <h2 className="large ">{course.title}</h2>
              <ul className="text-transparent m-t-20">
                {course.characteristic.map((name, i) => <li key={i}>{name}</li>)}
              </ul>
              <p className="coursetext ">开课时间：{moment(course.startTime).format('YYYY年MM月DD日')} ~ {moment(course.endTime).format('YYYY年MM月DD日')}<br />
                  学时安排：<span className="text-warning">{course.timeConsume}</span><br />
              </p>
              {course.join ? null : <a className="btn btn-primary btn-lg startbtn m-t-20" onClick={onJoin}>加入学习</a>}
              <Link to="/classroomdetail" className="btn btn-primary btn-lg startbtn m-t-20 m-l-15">项目申报</Link>
              <Link to="/createclassroom" className="btn btn-primary btn-lg whitebtn m-t-20 m-l-15">编辑专题</Link>
            </div>
            <div className="col-12 col-md-5 m-b-30">
              <figure className="figure">
                <img src="/static/images/index4.jpg" className="figure-img img-fluid rounded" alt={course.title} />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <Tab>
        <Tab.Item title="详情" className="bg-white">
          <div className="container text-left m-t-60 p-b-60">
            <div className="row">
              <div className="col-12 col-md-8 m-b-30">
                <h2 className="m-b-20" id="t-project">实验项目</h2>
                <ProjectList data={course.projects} />
                <div className="card">
                  <div className="card-header" id="headingcourse4">
                    <h5 className="mb-0">
                      <a className="btn btn-link editclassroombtn">实验总结报告</a>
                    </h5>
                    {course.progress_status && <Link to="/studentreportedit" className=" reportbtn">写实验报告</Link>}
                  </div>
                  {course.progress_status && (
                    <div className="card-body">
                      <h5 className="card-title" id="experimentitem">实验报告名称</h5>
                      <p className="fontsw">发布报告时间：2019-03-12</p>
                      <p>这个专业化教授Python 3中的编程基础。我们将从头开始，使用变量，条件和循环，并获得一些中间材料，如关键字参数，列表推导，lambda表达式和类继承。</p>
                      <p><Link to="#" className="text-primary">展开/收起</Link></p>
                      <hr />
                      <h5 className="card-title">老师评分：<span className="text-success">A+</span></h5>
                      <h5 className="card-title">老师评语：</h5>
                      <p>本课程是空间信息和数字技术专业的专业课，是该专业大部分其他专业的前导课程。 几乎所有专业的大学生，都可以学习运用空间信息工程技术专业知识，与自己的创新创业目标融合。</p>
                    </div>
                  )}
                </div>

                <h2 className="m-b-20 m-t-40" id="t-description">实验项目描述</h2>
                <div className="text-secondary">
                  <p>{course.description}</p>
                </div>

                <h2 className="m-b-20 m-t-40" id="t-testpoint">预备知识</h2>
                <p>{course.requirement}</p>

                <h2 className="m-b-20 m-t-40" id="t-content">考核内容</h2>
                <p>{course.testPoint}</p>

                <h2 className="m-b-20 m-t-40" id="t-material">参考资料</h2>
                {course.material.map(({ name, href }, i) => (
                  <p key={i}>
                    <a href={href} rel="noopener noreferrer" target="_blank">{name}</a>
                  </p>
                ))}
              </div>
              <div className="col-12 col-md-3 ml-auto">
                <div className="list-group list-group-flush" ref={naver}>
                  <a href="#t-project" className="list-group-item list-group-item-action">实验项目</a>
                  <a href="#t-description" className="list-group-item list-group-item-action">实验项目描述</a>
                  <a href="#t-testpoint" className="list-group-item list-group-item-action">预备知识</a>
                  <a href="#t-content" className="list-group-item list-group-item-action">考核内容</a>
                  <a href="#t-material" className="list-group-item list-group-item-action">参考资料</a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="container m-t-40 p-b-120">
            <h2 className="large m-t-40">讲师</h2>
            <TeacherList data={course.assistants} />
          </div>
        </Tab.Item>
        {user && user.role === consts.user.TEACHER ? (
          <Tab.Item title="学生(老师看)" className="bg-white">
            <div className="container text-left m-t-60 p-b-60">
              <div className="row p-b-60">
                <div className="col-sm-12">
                  <h3 className="m-b-20">学生完成进度表</h3>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th width="200">学生身份信息</th>
                        <th width="140">姓名</th>
                        <th>进度</th>
                        <th width="140">评分</th>
                        <th width="200">操作</th>
                      </tr>
                      <tr>
                        <td>5072120019098922</td>
                        <td>吴崇试</td>
                        <td>
                          <div className="progress m-t-5">
                            <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                          </div>
                        </td>
                        <td>A+</td>
                        <td><Link to="/studentreport" className="btn badge badge-primary">查看报告 <span className="link-add">➪</span></Link></td>
                      </tr>
                      <tr>
                        <td>072120019098922</td>
                        <td>高春媛</td>
                        <td>
                          <div className="progress m-t-5">
                            <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                          </div>
                        </td>
                        <td>A+</td>
                        <td><Link to="/studentreport" className="btn badge badge-primary">查看报告 <span className="link-add">➪</span></Link></td>
                      </tr>
                      <tr>
                        <td>072120019098922</td>
                        <td>王林</td>
                        <td>
                          <div className="progress m-t-5">
                            <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                          </div>
                        </td>
                        <td>A+</td>
                        <td><Link to="/studentreport" className="btn badge badge-primary">查看报告 <span className="link-add">➪</span></Link></td>
                      </tr>
                      <tr>
                        <td>072120019098922</td>
                        <td>王森林</td>
                        <td>
                          <div className="progress m-t-5">
                            <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                          </div>
                        </td>
                        <td>A+</td>
                        <td><Link to="/studentreport" className="btn badge badge-primary">查看报告 <span className="link-add">➪</span></Link></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Tab.Item>
        ) : null}
      </Tab>
    </Fragment>
  ) : null;
};
