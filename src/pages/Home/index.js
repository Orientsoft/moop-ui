import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import CourseList from '@/components/CourseList';

export default () => (
  <Fragment>
    <div className="mainbg">
      <div className="container">
        <div className="row p-b-120">
          <div className="col  m-t-60  p-b-60 text-center">
            <h1 className="large m-t-40">培养您需要的</h1>
            <h4 className="lead m-t-40 "><br />
              转变您的组织提供您的将来需要的技能。减少时间和成本通过利用edX审查的熟练用户群填充您<br /><br />
              产生影响创建增长文化，并通过提供按需学习平台帮助<br />
            </h4>
            <Link to="/courses" className="btn btn-lg startbtn m-t-40">更多专题</Link>
          </div>
        </div>
      </div>
      <div className="headerbottom"></div>
    </div>
    <div className="bg-eee p-t-60 p-b-60">
      <div className="container p-b-60 text-center">
        <h2 className="large">内容由世界领先的机构开发</h2>
        <p className="m-t-20"> Please select your intresting course , and start !</p>
        <CourseList size={3} />
        <h4 className="m-t-40"><Link to="/courses" className="btn btn-lg startbtn ">查看更多 <span className="link-symbol">→</span></Link></h4>
      </div>
      <div className="headerbottom"></div>
    </div>
    <div className="main-container p-b-60">
      {/* <img src="/static/images/main.png" className="mainproico" /> */}
      <div className="mainproico"></div>
      <div className="container p-t-60  p-b-60 ">
        <h2 className="large m-t-60 p-t-120">专为今天的学习者而设计。</h2>
        <p className="m-t-20 "> 精选专题集合，让您入门。</p>
        <div className="row m-t-60 text-left p-b-120" >
          <div className="col-12 col-md-3 ">
            <div className="feature">
              <img src="/static/images/lear1.png" />
              <h5 className="mb8 uppercase bold p-b-10">随时随地学习</h5>
              <p className="fade-1-4 p-b-10">学习者可以使用iOS和Android上的应用程序随时随地学习Coursera。还可以下载专题以供离线观看。</p>
            </div>
          </div>
          <div className="col-12 col-md-3 m-t-60">
            <div className="feature ">
              <img src="/static/images/lear2.png" />
              <h5 className="mb8 uppercase bold p-b-10">直观的课堂体验</h5>
              <p className="fade-1-4 p-b-10">Coursera专题将视频专题与交互式评估，测验和同行评审作业配对。</p>
            </div>
          </div>
          <div className="col-12 col-md-3 m-t-60">
            <div className="feature m-t-60">
              <img src="/static/images/lear3.png" />
              <h5 className="mb8 uppercase bold p-b-10">设计出色的L＆D计划</h5>
              <p className="fade-1-4 p-b-10">您可以设计世界一流的学习计划，而无需开发自己的内容。</p>
            </div>
          </div>
        </div>
      </div>
       <div className="bgbottom"></div>
    </div>
    <div className=" bg-bottom p-t-60 p-b-60">
      <div className="container p-b-60 text-center">
        <h2 className="large">是时候改变你的才能了。</h2>
        <p className="m-t-20"> 立即通过Coursera for Business为学习者提供支持。</p>
        <div className="row p-t-60">
          <div className="col-12 col-md-4 text-left">
            <img src="/static/images/teacher1.png" alt="..." style={{ width: 300 }} />
            <h5 className="m-t-20">Media heading</h5>
            <p className="m-t-10">讲师</p>
            学习者可以使用iOS和Android上的应用程序随时随地学习Coursera。还可以下载专题以供离线观看。。。
          </div>
          <div className="col-12 col-md-4 text-left">
            <img src="/static/images/teacher2.jpg" alt="..." style={{ width: 300 }} />
            <h5 className="m-t-20">陈思宁</h5>
            <p className="m-t-10">助教</p>
            学习者可以使用iOS和Android上的应用程序随时随地学习Coursera。还可以下载专题以供离线观看。。。
          </div>
          <div className="col-12 col-md-4 text-left">
            <img src="/static/images/teacher3.jpg" alt="..." style={{ width: 300 }} />
            <h5 className="m-t-20">Media heading</h5>
            <i className="m-t-10 ">Media heading</i><br /><br />
            学习者可以使用iOS和Android上的应用程序随时随地学习Coursera。还可以下载专题以供离线观看。。。
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
