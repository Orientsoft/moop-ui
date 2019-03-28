import React, { Fragment } from 'react';

export default () => {
  return (
    <Fragment>
      <div className="row ">
        <div className="cardinfo col-12 col-md-4 m-t-10">
          <img className="imginfo" src="/static/images/index2.jpg" alt="Card image cap" />
          <h5 className="card-title"><a href="#">神经网络与深度学习</a></h5>
          <p className="fontsw">已加入 <span className="text-danger">12</span> 人 / 总共 13 人<br />
            开课时间： 2019年02月18日 ~ 2019年05月19日
          </p>
          <a href="#" className="btn btn-primary">查看专题 <span className="link-add">+</span></a>
          <a href="#" className="btn btn-primary">编辑专题 <span className="link-add">+</span></a>
        </div>
        <div className=" col-12 col-md-8 m-t-10">
          <div className="m-t-20">
            <h6 className="card-title">【第1周】Python基本语法元素</h6>
            <div className="rowline  ">
              <div className="float-left">1.1 程序设计基本方法</div>
              <div className="progress ">
                <div className="progress-bar" role="progressbar" style={{ width: '45%' }} aria-valuenow="45%" aria-valuemin="0" aria-valuemax="100">45%</div>
              </div>
              <div className="float-right">14人已完</div>
            </div>
            <div className="rowline">
              <div className="float-left">1.2 Python开发环境配置</div>
              <div className="progress ">
                <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0</div>
              </div>
              <div className="float-right">0人已完</div>
            </div>
            <div className="rowline">
              <div className="float-left">1.4 Python程序语法元素分析..</div>
              <div className="progress ">
                <div className="progress-bar" role="progressbar" style={{ width: '15%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">15%</div>
              </div>
              <div className="float-right">3人已完</div>
            </div>
          </div>
          <div className="m-t-20">
            <h6 className="card-title">【第2周】Python基本图形绘制</h6>
            <div className="rowline  ">
              <div className="float-left">2.1 深入理解Python语言</div>
              <div className="progress ">
                <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0</div>
              </div>
              <div className="float-right">0人已完</div>
            </div>
            <div className="rowline">
              <div className="float-left">2.2 实例2: Python蟒蛇绘制</div>
              <div className="progress ">
                <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0</div>
              </div>
              <div className="float-right">0人已完</div>
            </div>
            <div className="rowline">
              <div className="float-left">2.3 模块1: turtle库的使用</div>
              <div className="progress ">
                <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0</div>
              </div>
              <div className="float-right">0人已完</div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </Fragment>
  );
};
