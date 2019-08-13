import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import get from 'lodash-es/get';
import { getCurrentTenant } from '@/utils/helper';

export default () => {
  const tenant = getCurrentTenant();
  const [visited, setVisited] = useState(2019);

  useEffect(() => {
    let value = localStorage.getItem('MOOP_VISITED');
    if (value) {
      value = (parseInt(value, 10) || 0) + 2019;
      setVisited(value);
    }
    localStorage.setItem('MOOP_VISITED', value);
  }, []);

  return (
    <Fragment>
      <div className="mainbg" style={{ backgroundImage: `url(${get(tenant, 'background', '/static/images/loginbg.png')})` }}>
        <div className="container">
          <div className="row p-b-120">
            <div className="col  m-t-60  p-b-60  p-t-60 text-center">
              <h1 className="large p-t-60">{get(tenant, 'remark', '')}</h1>
              <h4 className="lead m-t-40 ">
                <br />
                {get(tenant, 'description', '')}
                <br />
              </h4>
              <Link to="/courses" className="btn btn-lg startbtn m-t-40">进入实验</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="main-container  p-b-120">
        <div className="container p-t-60 text-center ">
          <h2 className="large m-t-60 p-t-120">公司估值虚拟仿真实验流程</h2>
          <div className="row  m-t-60" >
            <div className="col-md-12 text-center">
              <img src="/static/images/table.png" alt="WIND估值预测模型功能模块说明" />
            </div>
           
          </div>
        </div>
      </div>
      <div className="main-container main_teachbg whitefont">
        <div className="container p-t-60 text-center  ">
          <img src="/static/images/xz.jpg" alt="许志" className="xzpro" />
          <p className="p-t-60">“经济学博士，副教授，西南财经大学金融学院金融双语教学中心主任、投资估值研究中心主任。国家级精品在线开放课程《公司金融学》主持者，该课同时上线“学习强国”平台。”</p>
          <div className="attribution">
            <h5>许志</h5>
            <p>西南财经大学金融学院</p>
          </div>
        </div>
      </div>
      <div className="main-container  p-b-120">
        <div className="container p-t-60 text-center  ">
          <div className="row  m-t-60" >
            <div className="col-md-6  text-left">
              <h3>实验项目描述</h3>
              <p className="font24 p-t-30">公司的内在价值到底是多少？这是一个包括风险投资和投资银行在内的广大投资者共同关心的问题，也是公司投融资能否获得成功的关键所在。本实验项目旨在指导学生掌握公司估值最重要的一种方法——贴现现金流法（Discounted  Cash Flow Method, DCF），这也是理解公司内在价值最重要的一把标尺。</p>
            </div>
            <div className="col-md-1 text-left" />
            <div className="col-md-5 text-left">
              <img src="/static/images/course-cove.png" alt="" width="320" />
              <h5 className="p-t-10">预备知识</h5>
              <p>公司金融学关于现金流和贴现率的估计方法、Python编程基础</p>
              {/* <img src="/static/images/logo-3.png" alt="" width="220" /> */}
              <h5 className="m-t-40">考核内容</h5>
              <p>完成本实验项目中嵌入的阶段性检测题</p>
              <h5>参考资料</h5>
              <p>国家级在线开放课程——《公司金融学》：<a href="https://www.icourse163.org/course/SWUFE-1001651001"> https://www.icourse163.org/course/SWUFE-1001651001</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-container main_numberbg p-b-120 whitefont">
        <div className="container p-t-60 text-center ">
          <h2 className="large m-t-60 p-t-120">关于实验项目</h2>
          <p className="p-t-20 m-t-60">本门课程从公司这种所有制形式入手，解读公司的投资决策、融资决策以及分配决策的内在逻辑，探索公司价值最大化的实现路径。</p>
          <div className="row  m-t-60" >
            <div className="col-md-4 text-center">
              <p>访问次数</p>
              <h2>{visited}</h2>
            </div>
            <div className="col-md-4 text-center">
              <p>学生数量</p>
              <h2>771</h2>
            </div>
            <div className="col-md-4 text-center">
              <p>实验报告数</p>
              <h2>199</h2>
            </div>
          </div>
          <h4 className="m-t-60 text-center"><a className="btn btn-lg startbtn " href="/courses">进入实验 <span className="link-symbol">→</span></a></h4>
        </div>
      </div>
    </Fragment>
  );
};
