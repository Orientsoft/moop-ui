import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import get from 'lodash-es/get';
import CourseList from '@/components/CourseList';
import { getCurrentTenant } from '@/utils/helper';

export default () => {
  const tenant = getCurrentTenant();

  return (
    <Fragment>
      <div className="mainbg">
        <div className="container">
          <div className="row p-b-120">
            <div className="col  m-t-60  p-b-60 text-center">
              <h1 className="large p-t-60">{get(tenant, 'name', '')}</h1>
              <h4 className="lead m-t-40 ">
                <br />
                {get(tenant, 'remark', '')}
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
              <img height="60" src="/static/images/jupter-b.png" alt="Jupyter logo" />
            </a>
          </h2>
          <h2 className="large m-t-40">Jupyter 创始团队支持，与Jupyter社区同步演进</h2>
          <p className="m-t-20 p-b-30"> Jupyter Notebook 支持可视化交互编程，把文档、程序、报告融为一体，是数据科学家最常用的工具。</p>
          <CourseList size={3} />
          <h4 className="m-t-40"><Link to="/courses" className="btn btn-lg startbtn ">查看更多 <span className="link-symbol">→</span></Link></h4>
        </div>
        <div className="headerbottom" />
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
                <img src="/static/images/icno3.png" alt="" />
                <h5 className="mb8 uppercase bold p-b-10">一键启动 </h5>
                <p className="fade-1-4 p-b-10">准备程序的运行环境是数据分析中相对复杂的环节，我们使用分布式容器技术，使每个实验环境都能一键启动。</p>
              </div>
            </div>
            <div className="col-12 col-md-4 ">
              <div className="feature ">
                <img src="/static/images/icno1.png" alt="" />
                <h5 className="mb8 uppercase bold p-b-10">数据保护</h5>
                <p className="fade-1-4 p-b-10">我们对每个用户提供私有的数据存储并保证安全访问，在实验课题成员之间能够通过授权进行数据交换。 </p>
              </div>
            </div>
            <div className="col-12 col-md-4 ">
              <div className="feature ">
                <img src="/static/images/icno2.png" alt="" />
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
            {get(tenant, 'introduction', []).map(({ realname, remark, profession, thumb }, i) => (
              <div key={i} className="col-12 col-md-4 text-left m-t-20">
                <img src={thumb} alt="..." style={{ width: 300 }} />
                <h5 className="m-t-20">{realname}<span>{profession}</span></h5>
                <br />
                {remark}
              </div>
            ))}
          </div>
        </div>
        <div className="bgbottom" />
      </div>
      <div className="p-t-80 p-b-120 main-container">
        <div className="container p-b-120  p-t-80  text-center">
          <h2 className="large">订阅计划</h2>
          <p className="m-t-20">我们担供以下三种服务，总有适合你的选择。</p>
          <div className="row p-t-60">
            <div className="col-12 col-md-4 text-left m-t-20">
              <div className="price-box">
                <div className="price-header">
                  <h1><span className="dolor" />免费</h1>
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
        <div className="ftbgbottom" />
      </div>
    </Fragment>
  );
};
