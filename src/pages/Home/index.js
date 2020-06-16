import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import get from 'lodash-es/get';
import CourseList from '@/components/CourseList';
import { getCurrentTenant } from '@/utils/helper';

export default () => {
  const tenant = getCurrentTenant();

  return (
    <Fragment>
      <div className="mainbg" style={{ backgroundImage: `url(${get(tenant, 'background', '/images/loginbg.png')})` }}>
        <div className="container">
          <div className="row p-b-120">
            <div className="col  m-t-60  p-b-60 text-center">
              <h1 className="large p-t-60">{get(tenant, 'remark', '')}</h1>
              <h4 className="lead m-t-40 ">
                <br />
                {get(tenant, 'description', '')}
                <br />
              </h4>
              <Link to="/courses" className="btn btn-lg startbtn m-t-40">更多课题</Link>
            </div>
          </div>
        </div>
        <div className="headerbottom" />
      </div>
      <div className="bg-eee p-t-80 p-b-60">
        <div className="container p-b-60 text-center">
          <h2 >
            <a className="m-r-15" href="https://jupyter.org" rel="noopener noreferrer" target="_blank" >
              <img height="60" src="/images/jupter-b.png" alt="Jupyter logo" />
            </a>
          </h2>
          <h2 className="large m-t-40">Jupyter 创始团队支持，与Jupyter社区同步演进</h2>
          <p className="m-t-20 p-b-30"> Jupyter Notebook 支持可视化交互编程，把文档、程序、报告融为一体，是数据科学家最常用的工具。</p>
          <CourseList size={3} />
          <h4 className="m-t-40"><Link to="/courses" className="btn btn-lg startbtn ">查看更多 <span className="link-symbol">→</span></Link></h4>
        </div>
        <div className="headerbottom" />
      </div>
      <div className="main-container bg-bottom   p-b-60">
        {/* <img src="/images/main.png" className="mainproico" /> */}
        {/* <div className="mainproico"></div> */}
        <div className="container p-t-60 text-center  p-b-60 ">
          <h2 className="large m-t-60 p-t-120">数据科学空间</h2>
          <p className="m-t-20 "> 共享空间</p>
          <div className="row m-t-60  p-b-120 procont" >
            <div className="col-12 col-md-6 ">
              <div className="datacont text-left">
                <h3>应用空间</h3>
                <img src="/images/pro10.png" alt="" />
                &nbsp;&nbsp;&nbsp;&nbsp;图书馆提供独立的环境，可以将对数据科学感兴趣的老师和学生聚集一起，共同学习、互相协作。需要学生加入共享空间，可以参与策划“空间改造”活动，激发学生的参与热情。<br /><br />
              </div>
            </div>
            <div className="col-12 col-md-6 ">
              数据科学实验平台：实现数据科学学习、实体平台和虚拟平台联动，提供线上线下一体化服务，配备云服务环境的实操平台，我司可以提供技术平台支持。
            </div>

            {/* <div className="col-12 col-md-6 ">
              <div className="feature ">
                <img src="/images/icno1.png" alt="" />
                <h5 className="mb8 uppercase bold p-b-10">数据保护</h5>
                <p className="fade-1-4 p-b-10">我们对每个用户提供私有的数据存储并保证安全访问，在实验课题成员之间能够通过授权进行数据交换。 </p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="headerbottom headerbottom-e" />
      </div>
      <div className="main-container  p-b-60">
        {/* <img src="/images/main.png" className="mainproico" /> */}
        {/* <div className="mainproico"></div> */}
        <div className="container p-t-60 text-center  p-b-60 ">
          <h2 className="large m-t-60 p-t-120">我们向用户提供</h2>
          <p className="m-t-20 "> 全面的设施和教程，让您和您的团队轻松的探索数据科学。</p>
          <div className="row m-t-60  p-b-120 procont" >
            <div className="col-12 col-md-4 ">
              <div className="feature">
                <img src="/images/icno3.png" alt="" />
                <h5 className="mb8 uppercase bold p-b-10">一键启动 </h5>
                <p className="fade-1-4 p-b-10">准备程序的运行环境是数据分析中相对复杂的环节，我们使用分布式容器技术，使每个实验环境都能一键启动。</p>
              </div>
            </div>
            <div className="col-12 col-md-4 ">
              <div className="feature ">
                <img src="/images/icno1.png" alt="" />
                <h5 className="mb8 uppercase bold p-b-10">数据保护</h5>
                <p className="fade-1-4 p-b-10">我们对每个用户提供私有的数据存储并保证安全访问，在实验课题成员之间能够通过授权进行数据交换。 </p>
              </div>
            </div>
            <div className="col-12 col-md-4 ">
              <div className="feature ">
                <img src="/images/icno2.png" alt="" />
                <h5 className="mb8 uppercase bold p-b-10">实验组装</h5>
                <p className="fade-1-4 p-b-10">我们随时跟踪业界前沿算法和论文，并转化为实验供学员学习，课程使用先进的数据分析工具Jupyter Notebook编写。</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bgbottom" />
      </div>
      <div className=" bg-bottom p-t-80 p-b-60 main-container">
        <div className="container p-b-60 text-center">
          <h2 className="large">我们欢迎你的加入</h2>
          <p className="m-t-20"> 你可以作为以下三种角色使用实验室。</p>
          <div className="row p-t-60" style={{ display: get(tenant, 'introduction', []).length ? '' : 'none' }}>
            {get(tenant, 'introduction', []).map(({ profession, remark, thumb }, i) => (
              <div key={i} className="col-12 col-md-4 text-left m-t-20">
                <img src={thumb} alt="" style={{ width: 300, height: 300 }} />
                <h5 className="m-t-20">{profession}</h5>
                <br />
                {remark}
              </div>
            ))}
          </div>
        </div>
        <div className="bgbottom" />
      </div>
    </Fragment>
  );
};
