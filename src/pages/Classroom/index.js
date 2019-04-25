import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { Dialog } from '@alifd/next';
import moment from 'moment';
import Tab from '@/components/Tab';
import { classroom, invitation, progress as progressAPI } from '@/utils/api';
import consts from '@/utils/consts';
import { getCurrentUser } from '@/utils/helper';
import get from 'lodash-es/get';
import { isTeacher } from '@/utils';
import ProjectList from '@/components/ProjectList';
import TeacherList from '@/components/TeacherList';

export default ({ history }) => {
  const [course, setCourse] = useState(null);
  const [students, setStudents] = useState([]);
  const [actionButtons, setActionButtons] = useState([]);
  const user = getCurrentUser();
  const onJoin = () => {
    if (user) {
      Dialog.show({
        title: '加入学生',
        content: '是否确认加入？',
        onOk: () => invitation.create({
          data: {
            invitee: user.id,
            classroom: course.id,
            confirmed: true,
          },
        }).then(() => location.reload()),
      });
    } else {
      history.push('/login');
    }
    return false;
  };
  const naver = useRef(null);
  const onProjectStarted = () => {
    const url = queryString.parse(history.location.search);
    classroom.select({ params: { embed: 1 } }, { classroomId: url.id })
      .then(({ data }) => {
        setCourse(data);
        if (user && isTeacher(user)) {
          progressAPI.getStudents({ params: { classroom: data.id } }).then(res => setStudents(res.data));
        }
      });
  };
  const onProjectStoped = () => {
    onProjectStarted();
  };

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
      .then(({ data }) => {
        const buttons = [];

        setCourse(data);
        if (user && data) {
          if (user.role === consts.user.STUDENT) {
            if (data.join) {
              buttons.push(<a className="btn btn-lg startbtn m-t-20">已加入</a>);
            } else {
              buttons.push(<a className="btn btn-primary btn-lg startbtn m-t-20" onClick={onJoin}>加入学习</a>);
            }
          } else if (data.owner.id === user.id) {
            buttons.push(
              <Link to={{ pathname: '/classroomdetail', state: data }} className="btn btn-primary btn-lg startbtn m-t-20 m-l-15">项目申报</Link>,
              <Link to={{ pathname: '/editclassroom', state: data }} className="btn btn-primary btn-lg whitebtn m-t-20 m-l-15">编辑专题</Link>
            );
          }
        } else {
          buttons.push(<a className="btn btn-primary btn-lg startbtn m-t-20" onClick={onJoin}>加入学习</a>);
        }
        setActionButtons(buttons);
        if (user && isTeacher(user)) {
          progressAPI.getStudents({ params: { classroom: data.id } }).then(res => setStudents(res.data));
        }
      });
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
              <p className="coursetext ">
                学时安排：<span className="text-warning font-weight-bold">{course.timeConsume}</span><br />
                开课时间：<span className="font-italic text-transparent ">{moment(course.startTime).format('YYYY年MM月DD日')} ~ {moment(course.endTime).format('YYYY年MM月DD日')}</span><br />
              </p>
              {actionButtons.map((btn, i) => <Fragment key={i}>{btn}</Fragment>)}
            </div>
            <div className="col-12 col-md-5 m-b-30">
              <figure className="figure">
                <img src={get(course, 'thumb.thumbnail', '/static/images/coursesimg.png')} className="figure-img img-fluid rounded" alt={course.title} />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <Tab navStyle={{ padding: '0 10%' }} contentStyle={{ padding: '30px 0' }}>
        <Tab.Item title="详情">
          <div className="container text-left m-t-60 p-b-60">
            <div className="row">
              <div className="col-12 col-md-8 m-b-30">
                <h2 className="m-b-20" id="t-project">实验项目</h2>
                <ProjectList course={course} data={course.projects} onStarted={onProjectStarted} onStoped={onProjectStoped} />
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
                <div className="text-secondary">
                  <p>{course.requirement}</p>
                </div>
                <h2 className="m-b-20 m-t-40" id="t-content">考核内容</h2>
                <div className="text-secondary">
                  <p>{course.testPoint}</p>
                </div>
                <h2 className="m-b-20 m-t-40" id="t-material">参考资料</h2>
                <div className="text-secondary">
                  {course.material.map(({ name, href }, i) => (
                    <p key={i}>
                      <a href={href} rel="noopener noreferrer" target="_blank">{name}</a>
                    </p>
                  ))}
                </div>
              </div>
              <div className="col-12 col-md-3 ml-auto">
                <div className="list-group " ref={naver}>
                  <a href="#t-project" className="list-group-item ">实验项目</a>
                  <a href="#t-description" className="list-group-item ">实验项目描述</a>
                  <a href="#t-testpoint" className="list-group-item ">预备知识</a>
                  <a href="#t-content" className="list-group-item ">考核内容</a>
                  <a href="#t-material" className="list-group-item">参考资料</a>
                  <a href="#t-assistant" className="list-group-item ">讲师</a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="container m-t-40 p-b-120">
            <h2 className="large m-t-40" id="t-assistant">讲师</h2>
            <TeacherList data={course.tutors} />
          </div>
        </Tab.Item>
        {user && user.role === consts.user.TEACHER ? (
          <Tab.Item title="学生">
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
                      {students.map(({ participant, progress, score = 'N/A' }) => {
                        const { id, certification, realname } = participant;
                        const percent = parseInt(progress * 100, 10);
                        return (
                          <tr key={id}>
                            <td>{certification}</td>
                            <td>{realname}</td>
                            <td>
                              <div className="progress m-t-5">
                                <div className="progress-bar" role="progressbar" style={{ width: `${percent}%` }} aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100">{percent}%</div>
                              </div>
                            </td>
                            <td>{score}</td>
                            <td><Link to={`/studentreport?id=${id}&classroom=${course.id}`} className="btn badge badge-primary">查看报告 <span className="link-add">➪</span></Link></td>
                          </tr>
                        );
                      })}
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
