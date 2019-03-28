import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="row m-t-40">
      <div className="col-12 col-md-4 m-b-30">
        <div className="card  p-b-10">
          <img className="card-img-top" src="/static/images/index1.jpg" alt="Card image cap" />
          <div className="card-body text-left">
            <h5 className="card-title">机器学习</h5>
            <p className="card-text">机器学习是让计算机在没有明确编程的情况下采取行动的科学。在过去的十年中，机器学习为我们提供了自动驾驶汽车，实用的语音识别，有效的网络搜索以及对人类基因组的大大改进的理解。</p>
            <p className="text-success fs14">学时安排： 3~5小时每周</p>
            <Link to="/classroom" className="btn btn-primary">专题详情 <span className="link-add">➪</span></Link>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 m-b-30">
        <div className="card p-b-10">
          <img className="card-img-top" src="/static/images/index2.jpg" alt="Card image cap" />
          <div className="card-body text-left">
            <h5 className="card-title">神经网络与深度学习</h5>
            <p className="card-text">本专题介绍构建，训练和应用深度神经网络的方法。通过医疗保健，自动驾驶，音乐生成和自然语言处理等案例研究，学习者不仅可以掌握深度学习理论，还可以了解它如何应用于工业。</p>
            <p className="text-success fs14">学时安排： 3~5小时每周</p>
            <Link to="/classroom" className="btn btn-primary">专题详情 <span className="link-add">➪</span></Link>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 m-b-30">
        <div className="card  p-b-10">
          <img className="card-img-top" src="/static/images/index3.jpg" alt="Card image cap" />
          <div className="card-body text-left">
            <h5 className="card-title">数字世界的营销</h5>
            <p className="card-text">通过将权力平衡从公司转移到消费者，帮助您的团队了解数字工具如何改变营销。专题中最受欢迎的专题之一，数字世界营销被className Central评为有史以来最好的50个MOOC之一。本专题是伊利诺伊大学提供的iMBA的一部分。</p>
            <p className="text-success fs14">学时安排： 3~5小时每周</p>
            <Link to="/classroom" className="btn btn-primary">进入学习 <span className="link-add">➪</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
