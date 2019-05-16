import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import CourseList from '@/components/CourseList';

export default () => (
  <Fragment>
    <div className="mainbg">
      <div className="container">
        <div className="row p-b-120">
          <div className="col  m-t-60  p-b-60 text-center">
            <h1 className="large m-t-40">数据科学在线实验室</h1>
            <h4 className="lead m-t-40 "><br />
              我们提供数据科学所需的实验环境，提供从入门到精深的课程，从数据分析师<br /><br />
              的训练到复杂的行业精益分析都可以在此完成。<br />
            </h4>
            <Link to="/courses" className="btn btn-lg startbtn m-t-40">更多专题</Link>
          </div>
        </div>
      </div>
      <div className="headerbottom"></div>
    </div>
    <div className="bg-eee p-t-80 p-b-60">
      <div className="container p-b-60 text-center">
        <h2 className="large">Jupyter 创始团队支持，与Jupyter社区同步演进</h2>
        <p className="m-t-20"> Jupyter Notebook 支持可视化交互编程，把文档、程序、报告融为一体，是数据科学家最常用的工具。</p>
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
        <p className="m-t-20 "> 从头开始设计，为您和您的团队使复杂的数据科学无痛。</p>
        <div className="row m-t-60  p-b-120 procont" >
          <div className="col-12 col-md-4 ">
            <div className="feature">
              <img src="/static/images/icno3.png"  width=" "/>
              <h5 className="mb8 uppercase bold p-b-10">一键启动 </h5>
              <p className="fade-1-4 p-b-10">准备计算机软硬件环境对数据分析专家来说最为复杂，我们使用分布式容器技术，使每个实验都能一键启动实验环境 。</p>
            </div>
          </div>
          <div className="col-12 col-md-4 ">
            <div className="feature ">
              <img src="/static/images/icno1.png" />
              <h5 className="mb8 uppercase bold p-b-10">数据安全</h5>
              <p className="fade-1-4 p-b-10">我们对每个用户提供私有的数据存储并保证安全访问，在实验主题成员之间能够通过授权进行数据交换。 
</p>
            </div>
          </div>
          <div className="col-12 col-md-4 ">
            <div className="feature ">
              <img src="/static/images/icno2.png" />
              <h5 className="mb8 uppercase bold p-b-10">课程先进</h5>
              <p className="fade-1-4 p-b-10">我们随时跟踪业界的先进算法和论文，并转化为实验供学员学习，课程使用jupyter Notebook编写，业界最先进的数据分析工具。  
</p>
            </div>
          </div>
        </div>
      </div>
       <div className="bgbottom"></div>
    </div>
    <div className=" bg-bottom p-t-80 p-b-60">
      <div className="container p-b-60 text-center">
        <h2 className="large">我们欢迎你的加入</h2>
        <p className="m-t-20"> 你可以作为以下三种角色使用实验室。</p>
        <div className="row p-t-60">
          <div className="col-12 col-md-4 text-left">
            <img src="/static/images/newbbie1.png" alt="..." style={{ width: 300 }} />
            <h5 className="m-t-20"> Project Contributer</h5>
            <br />
            你可以提供精心编排的数据科学项目，帮助新手参考学习。
          </div>
          <div className="col-12 col-md-4 text-left">
            <img src="/static/images/newbbie2.png" alt="..." style={{ width: 300 }} />
            <h5 className="m-t-20">Subject  Mentor</h5>
            <br />
            你可以从一个有趣的数据分析课题出发，组装不同的实验项目，使用自己的数据，组队完成课题目标。
          </div>
          <div className="col-12 col-md-4 text-left">
            <img src="/static/images/newbbie3.png" alt="..." style={{ width: 300 }} />
            <h5 className="m-t-20">Newbbie</h5>
            <br />
            你可以从基础课程项目开始学习，根据自己的进展加入不同的课题小组，获得分析能力的提升。
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
