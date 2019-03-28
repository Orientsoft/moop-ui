import React, { Fragment } from 'react';
import Tab from '@/components/Tab';
import ProjectList from '@/components/ProjectList';
import TeacherList from '@/components/TeacherList';

export default () => {
  return (
    <Fragment>
      <div className="bg-conttop p-t-60 p-b-60">
        <div className="container  text-left">
          <div className="row">
            <div className="col-12 col-md-7 m-b-30">
              <h2 className="large ">Python 3 Programming 专项实验</h2>
              <ul className="text-transparent m-t-20">
                <li>100% 在线实验</li>
                <li>灵活的计划</li>
                <li>初级易懂。</li>
                <li>完成时间大约为1 个月</li>
              </ul>
              <p className="coursetext ">开课时间： 2019年02月18日 ~ 2019年05月19日<br />
                  学时安排：  <span className="text-warning">48小时</span><br /></p>
                <a href="#" className="btn btn-primary btn-lg startbtn m-t-20">加入学习</a>
                <a href="details.html" className="btn btn-primary btn-lg startbtn m-t-20 m-l-15">项目申报</a>
                <a href="createcourse.html" className="btn btn-primary btn-lg whitebtn m-t-20 m-l-15">编辑专题</a>
            </div>
            <div className="col-12 col-md-5 m-b-30">
              <figure className="figure">
                <img src="/static/images/index4.jpg" className="figure-img img-fluid rounded" />
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
                <h2 className="m-b-20">实验项目</h2>
                <ProjectList />
                <div className="card">
                  <div className="card-header" id="headingcourse4">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsecourse4" aria-expanded="false" aria-controls="collapsecourse3">
                          实验总结报告
                      </button>
                    </h5>
                    <a href="student-report.html" className=" reportbtn">写实验报告</a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">实验报告名称</h5>
                    <p className="fontsw">发布报告时间：2019-03-12</p>
                    <p>这个专业化教授Python 3中的编程基础。我们将从头开始，使用变量，条件和循环，并获得一些中间材料，如关键字参数，列表推导，lambda表达式和类继承。</p>
                    <p><a href="#" className="text-primary">展开/收起</a></p>
                    <hr />
                    <h5 className="card-title">老师评分： <span className="text-success">A+</span></h5>
                    <h5 className="card-title">老师评语：</h5>
                    <p>本课程是空间信息和数字技术专业的专业课，是该专业大部分其他专业的前导课程。 几乎所有专业的大学生，都可以学习运用空间信息工程技术专业知识，与自己的创新创业目标融合。</p>
                  </div>
                </div>

                <h2 className="m-b-20  m-t-40">实验项目描述</h2>
                <div className="text-secondary">
                  <p>这个专业化教授Python 3中的编程基础。我们将从头开始，使用变量，条件和循环，并获得一些中间材料，如关键字参数，列表推导，lambda表达式和类继承。</p>
                  <p>你将有很多练习的机会。 您还将学习推理程序执行的方法，以便它不再神秘，并且您可以在程序不工作时调试程序。</p>
                  <p><a href="#" className="text-primary">Learn More</a></p>
                </div>

                <h2 className="m-b-20 m-t-40">预备知识</h2>
                <p>本课程适合如下教学目标：</p>
                <p>程序设计入门课：面向各层次各专业大学在校生、部分优秀高中生，作为程序设计入门课程</p>
                <p>体系化编程基础：面向拟构建坚实编程能力的自学者，作为不断奋斗的参考在线课程</p>
                <p>Python科目备考：面向全国计算机等级考试二级Python科目的备考考生，作为在线备考资源</p>

                <h2 className="m-b-20 m-t-40">考核内容</h2>
                <p>1，独立完全成实验步骤</p>
                <p>2，完成实验报告</p>

                <h2 className="m-b-20 m-t-40">参考资料</h2>
                <p>
                  《深放Python 3》<a  href="#">https://www.icourse163.org/course/BIT-268001</a>
                </p>
                <p>
                  讲座在线学习视频 <a  href="#">https://www.icourse163.org/course/BIT-268002</a>
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="container m-t-40 p-b-60">
            <h2 className="large m-t-40">讲师</h2>
            <TeacherList />
          </div>
        </Tab.Item>
        <Tab.Item title="学生(老师看)" className="bg-white">
          <div className="container text-left m-t-60 p-b-60">
            <div className="row">
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
                      <td><a href="course-report.html" className="btn badge badge-primary">查看报告 <span className="link-add">➪</span></a></td>
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
                      <td>查看报告</td>
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
                      <td>查看报告</td>
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
                      <td>查看报告</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Tab.Item>
      </Tab>
    </Fragment>
  );
};
