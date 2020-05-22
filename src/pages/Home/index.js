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
      {/* <div className="mainbg" style={{ backgroundImage: `url(/images/bgpaly.jpg)` }}> */}
        <div className="container">
          <div className="row p-b-120 p-t-40">
            <div className="col  m-t-60  p-b-60 p-t-40 text-center">
              {/* <h1 className="large p-t-60">{get(tenant, 'remark', '')}</h1> */}
              <h2 className="large p-t-60">2020西南财经大学</h2>
              <h2 className="smlarge p-t-40">金融科技建模大赛</h2>
               
              <h4 className="lead m-t-40 ">
                <br />
                {/* {get(tenant, 'description', '')} */}
                使用在线数据分析平台实践模拟解决金融前沿问题，MATLAB、Python、R、SAS等你来战
                <br />
              </h4>
              <Link to="/classroom?id=race1mos2ed23f3d3d3d3s2frace" className="btn btn-lg startbtn m-t-40">参加比赛</Link>
            </div>
          </div>
        </div>
        <div className="headerbottom" />
      </div>
      <div className="bg-eee p-t-80 p-b-60">
        <div className="container p-b-60 text-center">
          <h2 >
            <a className="m-r-15" href="" rel="noopener noreferrer" target="_blank" >
              <img height="160" src="/images/swufe.png" alt="Jupyter logo" />
            </a>
          </h2>
          <h2 className="large m-t-60 p-b-30 ">2020 西南财经大学金融科技建模大赛介绍</h2>
          <p className="m-t-20 p-b-30 text-left "> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在互联网的高速发展、云计算技术的不断成熟的社会大背景下，大数据与金融科技已引起越来越广泛的社会关注。大数据作为一个新兴产业，其应用逐渐渗透到各个领域，为社会科学、自然科学的多个领域研究提供了新的思路和新的技术。其中，金融领域更是经历了以大数据支持的金融科技和人工智能带来的变革。目前，大数据分析、数据挖掘、机器学习等数据分析方法在金融风险管理中广泛应用，并且成为了金融工作的热点和重点。在金融领域大数据化的趋势下，大数据和实体经济将会深度融合，所以大数据技术的快速普及和推广、大数据应用型人才的培养已经迫在眉睫。</p>
          <p className="m-t-20 p-b-30 text-left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;金融科技建模大赛以数据带来新知，驱动业务并提升风险识别和管理水平。大赛将理论与实践结合，致力于为金融大数据应用型人才的培养提供良好的平台。举办此类比赛的目的不仅是为了培养出更多金融大数据分析的精英人才，更是为广大在校大学生提供一个展示自身专业能力并获取就业机会的平台。同时激发在校学生对大数据分析的兴趣，提高建模分析的学习积极性，增强对金融风险管理的认识，创新社会治理方法，创造社会价值。</p>
          
          {/* <CourseList size={3} /> */}
          {/* <h4 className="m-t-40"><Link to="/courses" className="btn btn-lg startbtn ">查看更多 <span className="link-symbol">→</span></Link></h4> */}
        </div>
        <div className="headerbottom" />
      </div>
      <div className="main-container p-b-60">
        {/* <img src="/images/main.png" className="mainproico" /> */}
        {/* <div className="mainproico"></div> */}
        <div className="container p-t-60 text-center  p-b-60 ">
          <h2 className="large m-t-60 p-t-120">支持单位</h2>
          {/* <p className="m-t-20 "> 全面的设施和教程，让您和您的团队轻松的探索数据科学。</p> */}
          <div className="row m-t-60  p-b-120 procont" >
            <div className="col-12 col-md-4 ">
              <div className="feature">
                {/* <img src="/images/icon9.png" alt="" /> */}
                <h5 className="mb8 uppercase bold p-b-10">主办单位 </h5>
                <p className="fade-1-4 p-b-10">
                  西南财经大学<br />
                  教务处<br />
                  金融学院<br />
                  经济管理实验教学中心<br />
                  统计学院<br />
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 ">
              <div className="feature ">
                {/* <img src="/images/icon8.png" alt="" /> */}
                <h5 className="mb8 uppercase bold p-b-10">承办单位</h5>
                <p className="fade-1-4 p-b-10">
                  西南财经大学<br />
                  金融建模协会<br />
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 ">
              <div className="feature ">
                {/* <img src="/images/icon7.png" alt="" /> */}
                <h5 className="mb8 uppercase bold p-b-10">合作单位</h5>
                <p className="fade-1-4 p-b-10"> 
                  成都农商银行<br />
                  簇桥支行<br />
                  MathWorks <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bgbottom" /> */}
      </div>
      {/* <div className=" bg-bottom p-t-80 p-b-60 main-container">
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
      </div> */}
    </Fragment>
  );
};
