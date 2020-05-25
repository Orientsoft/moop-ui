import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import get from "lodash-es/get";
import CourseList from "@/components/CourseList";
import { getCurrentTenant } from "@/utils/helper";

export default () => {
  const tenant = getCurrentTenant();

  return (
    <Fragment>
      <div
        className="mainbg"
        style={{
          backgroundImage: `url(${get(
            tenant,
            "background",
            "/images/loginbg.png"
          )})`,
        }}
      >
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
              <Link
                to="/classroom?id=5ec8c2eb9d4fa492d0d51858"
                className="btn btn-lg startbtn m-t-40"
              >
                参加比赛
              </Link>
            </div>
          </div>
        </div>
        <div className="headerbottom" />
      </div>
      <div className="bg-eee p-t-80 p-b-60">
        <div className="container p-b-60 text-center">
          <h2>
            <a
              className="m-r-15"
              href=""
              rel="noopener noreferrer"
              target="_blank"
            >
              <img height="160" src="/images/swufe.png" alt="Jupyter logo" />
            </a>
          </h2>
          <h2 className="large m-t-60 p-b-30 ">
            2020 西南财经大学金融科技建模大赛介绍
          </h2>
          <p className="m-t-20 p-b-30 text-left ">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国人民银行2019年印发《金融科技发展规划（2019-2021年）》，提出金融科技是技术驱动的金融创新，加强人才队伍假设是重点任务之一。近日，成都市人民政府和人民银行共同发布《成都市金融科技发展规划(2020-2022年)》，这是全国首个由地方政府和人民银行共同发布实施的金融科技发展规划。《规划》提出要按照“坚持创新驱动、坚持科技赋能、坚持开放生态、坚持合规安全、坚持技术中立”的发展原则，构建“成都特色、全国影响、国内示范、国际同步”的金融科技创新示范体系，确立成都金融科技在中西部地区领先、全国一流的地位，形成金融科技应用先进可控、金融服务能力持续增强、金融风控水平明显提高、金融监管效能持续提升、金融科技支撑不断完善、金融科技产业繁荣发展的良性发展格局。到2022年底前，努力把成都建设成为具有国际影响力的区域金融科技中心。成都市政府与西南财经大学从2019年开始共建金融科技国际联合实验室（FIC），致力于推动金融科技创新研发。
          </p>
          <p className="m-t-20 p-b-30 text-left">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了适应金融科技快速发展，培养金融科技后备人才，加强学生金融建模能力、数据科学思维及其在金融科技场景中应用创新与实践，金融学院、统计学院、经济管理实验教学中心、教务处、金融科技国际联合实验室联合举办“2020年西南财经大学金融科技建模大赛”（2020
            SWUFE-FIC Fintech Modeling Contest）。
          </p>

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
          <div className="row m-t-60  p-b-120 procont">
            <div className="col-12 col-md-4 ">
              <div className="feature">
                {/* <img src="/images/icon9.png" alt="" /> */}
                <h5 className="mb8 uppercase bold p-b-10">主办单位 </h5>
                <p className="fade-1-4 p-b-10">
                  金融学院<br />
                  统计学院<br />
                  经济管理实验教学中心<br />
                  教务处<br />
                  金融科技国际联合实验室<br />
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 ">
              <div className="feature ">
                {/* <img src="/images/icon8.png" alt="" /> */}
                <h5 className="mb8 uppercase bold p-b-10">承办单位</h5>
                <p className="fade-1-4 p-b-10">
                  金融学院信用管理系<br />
                  金融建模协会<br />
                  金融智能与金融工程实验室<br />
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 ">
              <div className="feature ">
                {/* <img src="/images/icon7.png" alt="" /> */}
                <h5 className="mb8 uppercase bold p-b-10">支持单位</h5>
                <p className="fade-1-4 p-b-10">
                  迪奥科技<br />
                MathWorks
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
