import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { Dialog } from '@alifd/next';
import ReactMarkdown from 'react-markdown/with-html';
import moment from 'moment';
import Tab from '@/components/Tab';
import { classroom, invitation, progress as progressAPI, report as reportAPI } from '@/utils/api';
import consts from '@/utils/consts';
import { getCurrentUser, getCourseCover, openURL } from '@/utils/helper';
import { isTeacher } from '@/utils';
import ProjectList from '@/components/ProjectList';
import TeacherList from '@/components/TeacherList';

export default ({ history }) => {
  const [course, setCourse] = useState(null);
  const [students, setStudents] = useState([]);
  const [report, setReport] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const [actionButtons, setActionButtons] = useState([]);
  const user = getCurrentUser();
  const onJoin = () => {
    if (user) {
      Dialog.alert({
        title: '加入比赛',
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
  const onPreview = () => {
    const url = queryString.parse(history.location.search);
    openURL(reportAPI.buildPreviewURL(url.id));
  };
  const onDownload = () => {
    const url = queryString.parse(history.location.search);
    openURL(reportAPI.buildDownloadURL(url.id));
  };
  const onVisited = () => {
    const url = queryString.parse(history.location.search);

    classroom.select({ params: { embed: 1 } }, { classroomId: url.id })
      .then(({ data }) => setCourse(data));
    reportAPI.select({}, { reportId: url.id }).then(({ data }) => setReport(data));
  };

  useEffect(() => {
    const url = queryString.parse(history.location.search);
    const fixedNaver = (e) => {
      if (naver && naver.current) {
        if (e.target.scrollingElement.scrollTop >= 520) {
          naver.current.style.position = 'fixed';
          naver.current.style.left = `${naver.current.parentNode.offsetLeft + 15}px`;
          naver.current.style.top = '20px';
          naver.current.style.width = '255px';
          naver.current.style.zIndex = 1;
        } else {
          naver.current.style.position = 'relative';
          naver.current.style.left = 0;
          naver.current.style.top = 0;
        }
      }
    };

    if (url.tab) {
      const key = parseInt(url.tab, 10);

      if (!isNaN(key) && key < 2) {
        setActiveTab(key);
      }
    }
    // reportAPI.select({}, { reportId: url.id }).then(({ data }) => setReport(data));

    // classroom.select({ params: { embed: 1 } }, { classroomId: url.id })
    classroom.selectRace({ }, { })
      .then(({ data }) => {
        setCourse(data);
        if (user && isTeacher(user)) {
          progressAPI.getStudents({ params: { classroom: data.id } }).then(res => setStudents(res.data));
        }
      });
    document.addEventListener('scroll', fixedNaver);
    return () => document.removeEventListener('scroll', fixedNaver);
  }, [history.location.search]);
  useEffect(() => {
    const buttons = [];

    if (course && !user) {
      buttons.push(<a className="btn btn-primary btn-lg startbtn m-t-20" onClick={onJoin}>加入比赛</a>);
      setActionButtons(buttons);
      return;
    }
    if (course && user) {
      if (user.role === consts.user.STUDENT) {
        if (course.join) {
          buttons.push(<a className="btn btn-lg whitebtn m-t-20">已加入</a>);
        } else {
          buttons.push(<a className="btn btn-primary btn-lg startbtn m-t-20" onClick={onJoin}>加入比赛</a>);
        }
        setActionButtons(buttons);
      } else if (course.owner.id === user.id) {
        // <Link to={{ pathname: '/classroomdetail', search: `?id=${course.id}`, state: course }} className="btn btn-primary btn-lg startbtn m-t-20 m-l-15">项目申报</Link>,
        buttons.push(
          <Link to={{ pathname: '/editclassroom', state: course }} className="btn btn-primary btn-lg whitebtn m-t-20 m-l-15">编辑课题</Link>
        );
        setActionButtons(buttons);
      }
    }
  }, [course]);

  return course ? (
    <Fragment>
      <div className="bg-mainconttop p-t-60 p-b-60">
        <div className="container  text-left">
          <div className="row">
            <div className="col-12 col-md-7 m-b-30">
              <h2 className="large ">{course.title}</h2>
              <ul className="text-transparent m-t-20">
                {course.characteristic.map((name, i) => <li key={i}>{name}</li>)}
              </ul>
              <p className="coursetext ">
                {/* 学时安排：<span className="text-warning font-weight-bold">{course.timeConsume}</span><br /> */}
                {/* 开课时间：<span className="font-italic text-transparent ">{moment(course.startTime).format('YYYY年MM月DD日')} ~ {moment(course.endTime).format('YYYY年MM月DD日')}</span><br /> */}
              </p>
              {actionButtons.map((btn, i) => <Fragment key={i}>{btn}</Fragment>)}
            </div>
            <div className="col-12 col-md-5 m-b-30">
              <figure className="figure">
                <img src={getCourseCover(course)} className="figure-img img-fluid" alt={course.title} />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <Tab navStyle={{ padding: '0 10%' }} activeKey={activeTab} onChange={key => setActiveTab(key)} contentStyle={{ padding: '30px 0' }}>
        <Tab.Item title={user && course && user.role !== consts.user.STUDENT && user.id === course.owner.id ? '详情' : ''}>
          <div className="container text-left m-t-60 p-b-60">
            <div className="row">
              <div className="col-12 col-md-7">
              
                <h2 className="m-b-20 m-t-40" id="t-description">比赛流程</h2>
                <div className="text-secondary">
                  <ReactMarkdown source={course.description} escapeHtml={false} />
                </div>
                {/* <h2 className="m-b-20 m-t-40" id="t-testpoint">预备知识</h2>
                <div className="text-secondary">
                  <ReactMarkdown source={course.requirement} escapeHtml={false} />
                </div>
                <h2 className="m-b-20 m-t-40" id="t-content">考核内容</h2>
                <div className="text-secondary">
                  <ReactMarkdown source={course.testPoint} escapeHtml={false} />
                </div>
                <h2 className="m-b-20 m-t-40" id="t-material">参考资料</h2>
                <div className="text-secondary">
                  {course.material.map(({ name, href }, i) => (
                    <p key={i}>
                      <a href={href} rel="noopener noreferrer" target="_blank">{name}</a>
                    </p>
                  ))}
                </div> */}
              
              </div>
              <div className="col-12 col-md-5 m-b-30">
                <h2 className="m-b-20 m-t-40" id="t-project">启动比赛环境</h2>
                <ProjectList course={course} data={course.projects} onVisited={onVisited} onStarted={onProjectStarted} onStoped={onProjectStoped} />
                <div className="card">
                  {/* <div className="card-header" id="headingcourse4">
                    <h5 className="mb-0">
                      <a className="btn btn-link editclassroombtn">比赛报告</a>
                    </h5>
                    {course.progress_status && report.isShow && <Link to={`/studentreportedit?id=${course.id}`} className="reportbtn">比赛报告</Link>}
                  </div> */}
                  {course.progress_status && !report.isShow && (
                    <div className="card-body">
                      <h5 className="card-title" id="experimentitem">{report.title}</h5>
                      <p className="fontsw">发布报告时间：{moment(report.updatedAt).format('YYYY年MM月DD日')}</p>
                      <p dangerouslySetInnerHTML={{ __html: report.summary }} />
                      <hr />
                      <h5 className="card-title">老师评分：<span className="text-success">{report.score}</span></h5>
                      <h5 className="card-title">老师评语：</h5>
                      <p dangerouslySetInnerHTML={{ __html: report.feedback }} />
                    </div>
                  )}
                </div>

                {/* <h2 className="m-b-20 m-t-40" id="t-description">描述</h2>
                <div className="text-secondary">
                  <ReactMarkdown source={course.description} escapeHtml={false} />
                </div>
                <h2 className="m-b-20 m-t-40" id="t-testpoint">预备知识</h2>
                <div className="text-secondary">
                  <ReactMarkdown source={course.requirement} escapeHtml={false} />
                </div>
                <h2 className="m-b-20 m-t-40" id="t-content">考核内容</h2>
                <div className="text-secondary">
                  <ReactMarkdown source={course.testPoint} escapeHtml={false} />
                </div>
                <h2 className="m-b-20 m-t-40" id="t-material">参考资料</h2>
                <div className="text-secondary">
                  {course.material.map(({ name, href }, i) => (
                    <p key={i}>
                      <a href={href} rel="noopener noreferrer" target="_blank">{name}</a>
                    </p>
                  ))}
                </div> */}
              </div>
            
            </div>
          </div>
          <hr />
          {/* <div className="container m-t-40 p-b-120">
            <h2 className="large m-t-40" id="t-assistant">讲师</h2>
            <TeacherList data={course.tutors} />
          </div> */}
        </Tab.Item>
        {user && course && user.role !== consts.user.STUDENT && user.id === course.owner.id ? (
          <Tab.Item title="学生">
            <div className="container text-left m-t-60 p-b-60">
              <div className="row p-b-60">
                <div className="col-sm-12">
                  <h3 >教学报告</h3>
                  <a className="btn btn-primary btn-lg startbtn m-t-20 m-l-15" onClick={onPreview}>生成预览</a>
                  <a className="btn btn-primary btn-lg brownbtn m-t-20 m-l-15" onClick={onDownload}>生成PDF</a>
                  <h3 className="m-b-20 m-t-40 p-t-10">学生完成进度表</h3>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th width="140">姓名</th>
                        <th>进度</th>
                        <th width="140">评分</th>
                        <th width="200">操作</th>
                      </tr>
                      {students.map(({ participant, progress, report: showReport, score = 'N/A' }) => {
                        const { id, realname } = participant;
                        const percent = parseInt(progress * 100, 10);
                        return (
                          <tr key={id}>
                            <td>{realname}</td>
                            <td>
                              <div className="progress m-t-5">
                                <div className="progress-bar" role="progressbar" style={{ width: `${percent}%` }} aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100">{percent}%</div>
                              </div>
                            </td>
                            <td>{score}</td>
                            <td>{showReport && <Link to={`/studentreport?id=${id}&classroom=${course.id}&tab=${activeTab}`} className="btn badge badge-primary">查看报告 <span className="link-add">➪</span></Link>}</td>
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
