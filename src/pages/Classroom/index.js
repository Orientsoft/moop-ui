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
        title: '加入学习',
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
    reportAPI.select({}, { reportId: url.id }).then(({ data }) => setReport(data));

    classroom.select({ params: { embed: 1 } }, { classroomId: url.id })
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
      buttons.push(<a className="btn btn-primary btn-lg startbtn m-t-20" onClick={onJoin}>加入学习</a>);
      setActionButtons(buttons);
      return;
    }
    if (course && user) {
      if (user.role === consts.user.STUDENT) {
        if (course.join) {
          buttons.push(<a className="btn btn-lg whitebtn m-t-20">已加入</a>);
        } else {
          buttons.push(<a className="btn btn-primary btn-lg startbtn m-t-20" onClick={onJoin}>加入学习</a>);
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
      <div className="bg-mainconttop p-t-80 p-b-60">
        <div className="container  text-left">
          <div className="row">
            <div className="col-12 col-md-7 m-b-30">
              <h2 className="large ">{course.title}</h2>
              <ul className="text-transparent m-t-20">
                {course.characteristic.map((name, i) => <li key={i}>{name}</li>)}
              </ul>
              <p className="coursetext ">
                学时安排：<span className="font-weight-bold">{course.timeConsume}</span><br />
                开课时间：<span className="font-italic text-transparent ">{moment(course.startTime).format('YYYY年MM月DD日')} ~ {moment(course.endTime).format('YYYY年MM月DD日')}</span><br />
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
          <div className="container p-t-60 text-center ">
            <h2 className="large m-t-60 p-t-120">快递自提网点布局虚拟仿真实验</h2>
            <div className="row-warp" >
              <div className="row  m-t-60 ">
                <div className="col-md-4">
                  <div className="bindex-pro bd999 bdgreen">
                    <a href="#" className=" nocolor bggreen">1 实验说明</a> <br /><br />
                    <span className="font32 color999 colorgreen">↓</span><br /><br />
                    <a href="#" className=" nocolor bggreen">2 获取经纬度 </a> <br /><br />
                    <span className="font32 color999 colorgreen">↓</span><br /><br />
                    <a href="#" className=" nocolor bggreen">3 可视化数据</a> <br />
                    {/* <p className=" font14 color999 ">模块一：历史报表</p> */}
                  </div>
                </div>

                <div className="col-md-1 right pt200"><span className="font32 color999 colorgreen ">⇨</span></div>
                <div className="col-md-7 right">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="bindex-pro bd999 bdgreen">
                            <a href="#" className=" nocolor bggreen">8 删除偏远小区或超市 </a> <br />
                            <span className="font32 color999 colorgreen">↑</span><br /><br />
                            <a href="#" className=" nocolor bggreen">7 用户自提意愿计算</a> <br /><br />

                            {/* <p className=" font14 color999 ">模块三：估值计算</p> */}
                          </div>
                        </div>
                        <span className="font32 color999 colorgreen pt100">⇨</span>
                        <div className="col-md-6 fr">
                          <div className="bindex-pro bd999 bdgreen">
                            <a href="#" className=" nocolor bggreen">9 整数规划</a> <br />
                            <span className="font18 color999 colorgreen">↓</span><br />
                            <a href="#" className=" nocolor bggreen">10 模型结果可视化 </a> <br />
                            <span className="font18 color999 colorgreen">↓</span><br />
                            <a href="#" className=" nocolor bggreen">11 学生考核 </a> <br />
                            {/* <p className=" font14 color999 "> 模块四：报告输出</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absol-upbtn">
                      <span className="font32 color999 colorgreen pl100">⇧</span>
                    </div>
                    <div className="col-md-12">
                      <div className="absol-pro2 width28 bd999 bdgreen">
                        <a href="#" className=" nocolor bggreen">4 选择实验范围</a>
                        <span className="font18 color999 colorgreen">→</span>
                        <a href="#" className=" nocolor bggreen">5 计算路程</a>
                        <span className="font18 color999 colorgreen">→</span>
                        <a href="#" className=" nocolor bggreen">6 拟合用户意愿</a>
                        {/* <p className=" font14 color999 "> 模块二：报表预测</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container text-left m-t-60 p-b-60">
            <div className="row contclassroom">
              {/* <div className="col-12 col-md-1"></div> */}
              <div className="col-12 col-md-12 m-b-30">
                <h2 className="m-b-20" id="t-project">进入后台目录</h2>
                <ProjectList course={course} data={course.projects} onVisited={onVisited} onStarted={onProjectStarted} onStoped={onProjectStoped} />
                <div className="card">
                  <div className="card-header" id="headingcourse4">
                    <h5 className="mb-0">
                      <a className="btn btn-link editclassroombtn">实验总结报告</a>
                    </h5>
                    {course.progress_status && report.isShow && <Link to={`/studentreportedit?id=${course.id}`} className="reportbtn">写实验报告</Link>}
                  </div>
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

                <h2 className="m-b-20 m-t-40" id="t-description">实验项目描述</h2>
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
                </div>
              </div>
            </div>
          </div>
        
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
