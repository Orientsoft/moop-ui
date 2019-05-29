import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import CourseList from '@/components/CourseList';

export default () => (
  <Fragment>
    <div className="mainbg">
      <div className="container">
        <div className="row p-b-120">
          <div className="col  m-t-60  p-b-60 text-center">
            <h1 className="large p-t-60">数据科学开放实验室</h1>
            <h4 className="lead m-t-40 "><br />
              我们提供数据科学所需的实验环境，提供从入门到精深的课程，从数据分析师<br /><br />
              的训练到复杂的行业精益分析都可以在此完成。<br />
            </h4>
            <Link to="/courses" className="btn btn-lg startbtn m-t-40">更多课题</Link>
          </div>
        </div>
      </div>
      <div className="headerbottom"></div>
    </div>
    <div className="bg-eee p-t-80 p-b-60">
      <div className="container p-b-60 text-center">
        <h2 className="large">Jupyter 创始团队支持，与Jupyter社区同步演进</h2>
        <p className="m-t-20 p-b-30"> Jupyter Notebook 支持可视化交互编程，把文档、程序、报告融为一体，是数据科学家最常用的工具。</p>
        <CourseList size={3} />
        <h4 className="m-t-40"><Link to="/courses" className="btn btn-lg startbtn ">查看更多 <span className="link-symbol">→</span></Link></h4>
      </div>
      <div className="headerbottom"></div>
    </div>
    <div className="main-container p-b-60">
      {/* <img src="/static/images/main.png" className="mainproico" /> */}
      {/* <div className="mainproico"></div> */}
      <div className="container p-t-60 text-center  p-b-60 ">
        <h2 className="large m-t-60 p-t-120">我们向用户提供</h2>
        <p className="m-t-20 "> 全面的设施和教程，让您和您的团队轻松的探索数据科学。</p>
        <div className="row m-t-60  p-b-120 procont" >
          <div className="col-12 col-md-4 ">
            <div className="feature">
              <img src="/static/images/icno3.png" width=" "/>
              <h5 className="mb8 uppercase bold p-b-10">一键启动 </h5>
              <p className="fade-1-4 p-b-10">准备程序的运行环境是数据分析中相对复杂的环节，我们使用分布式容器技术，使每个实验环境都能一键启动。</p>
            </div>
          </div>
          <div className="col-12 col-md-4 ">
            <div className="feature ">
              <img src="/static/images/icno1.png" />
              <h5 className="mb8 uppercase bold p-b-10">数据保护</h5>
              <p className="fade-1-4 p-b-10">我们对每个用户提供私有的数据存储并保证安全访问，在实验课题成员之间能够通过授权进行数据交换。 </p>
            </div>
          </div>
          <div className="col-12 col-md-4 ">
            <div className="feature ">
              <img src="/static/images/icno2.png" />
              <h5 className="mb8 uppercase bold p-b-10">实验组装</h5>
              <p className="fade-1-4 p-b-10">我们随时跟踪业界前沿算法和论文，并转化为实验供学员学习，课程使用先进的数据分析工具Jupyter Notebook编写。</p>
            </div>
          </div>
        </div>
      </div>
       <div className="bgbottom"></div>
    </div>
    <div className=" bg-bottom p-t-80 p-b-60 main-container">
      <div className="container p-b-60 text-center">
        <h2 className="large">我们欢迎你的加入</h2>
        <p className="m-t-20"> 你可以作为以下三种角色使用实验室。</p>
        <div className="row p-t-60">
          <div className="col-12 col-md-4 text-left m-t-20">
            <img src="/static/images/newbbie1.png" alt="..." style={{ width: 300 }} />
            <h5 className="m-t-20"> Project Contributer</h5>
            <br />
            你可以提供精心编排的数据科学项目，帮助新手参考学习。
          </div>
          <div className="col-12 col-md-4 text-left m-t-20">
            <img src="/static/images/newbbie2.png" alt="..." style={{ width: 300 }} />
            <h5 className="m-t-20">Subject  Mentor</h5>
            <br />
            你可以从一个有趣的数据分析课题出发，组装不同的实验项目，使用自己的数据，组队完成课题目标。
          </div>
          <div className="col-12 col-md-4 text-left m-t-20">
            <img src="/static/images/newbbie3.png" alt="..." style={{ width: 300 }} />
            <h5 className="m-t-20">Newbbie</h5>
            <br />
            你可以从基础课程项目开始学习，根据自己的进展加入不同的课题小组，获得分析能力的提升。
          </div>
        </div>
      </div>
      <div className="bgbottom"></div>
    </div>
    <div className="p-t-80 p-b-120 main-container">
      <div className="container p-b-120  p-t-80  text-center">
        <h2 className="large">订阅计划</h2>
        <p className="m-t-20">我们担供以下三种服务，总有适合你的选择。</p>
        <div className="row p-t-60">
          <div className="col-12 col-md-4 text-left m-t-20">
            <div className="price-box">
              <div className="price-header">
                <h1><span className="dolor"></span>免费</h1>
                <h4>学生</h4>
              </div>
              <ul className="list-unstyled price-features">
                <li>低CPU优先级</li>
                <li>1 GB RAM</li>
                <li>1 GB存储</li>
                <li>有限支持</li>
                <li>需要.edu电子邮件</li>
              </ul>
              {/* <div className="price-footer">
                <a href="https://beta.gryd.us" className="btn btn-lg startbtn">注册</a>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-md-4 text-left m-t-20">
            <div className="price-box best-plan">
              <div className="price-header">
                <h1>
                  <span className="dolor">¥</span> 100
                  <span className="className">/月</span>
                </h1>
                <h4>专业版</h4>
              </div>
              <ul className="list-unstyled price-features">
                <li>高CPU优先级</li>
                <li>2 GB RAM</li>
                <li>3 GB存储</li>
                <li>可定制Jupyter镜像</li>
                <li>专业支持</li>
              </ul>
              {/* <div className="price-footer">
                <a href="https://beta.gryd.us" className="btn btn-lg startbtn">注册</a>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-md-4 text-left m-t-20">
            <div className="price-box">
              <div className="price-header">
                <h1>定制版</h1>
                <h4>教师</h4>
              </div>
              <ul className="list-unstyled price-features">
                <li>作业管理</li>
                <li>GPU环境支持</li>
                <li>自定义环境</li>
                <li>专业人员账户</li>
                <li>适合大型课程</li>
              </ul>
              {/* <div className="price-footer">
                <a href="/contact/" className="btn btn-lg startbtn">联系我们</a>
              </div> */}
            </div>
          </div>
          {/* <div className="row">
            <a href="https://jupyter.org/index.html" target="_blank" >
              <img className="navbar-logo" src="/static/images/jupyter_logo.svg" alt="Jupyter logo" />
            </a>
          </div> */}
        </div>
      </div>
      <div className="ftbgbottom"></div>
    </div>
  </Fragment>
);
