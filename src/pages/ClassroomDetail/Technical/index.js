import React from 'react';

export default () => {
  return (
    <div className="m-b-30 tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <h5 className="m-b-20">系统架构图及简要说明</h5>
      <div className="part-content">
        <p className="fangsong">简要说明：</p>
        <p className="fangsong">该实验平台系统的逻辑架构主要包括以下五层：</p>
        <p>1、事故模拟层：针对城市一般路网和高架路网进行交通事故模拟、事故影响评价</p>
        <p>2、路径诱导流量设计层：对模拟的交通事故采取的车辆绕行方案进行设计</p>
        <p>3、信号控制层：主要是针对模拟的交通事故采取的交通信号配时方案进行设计</p>
        <p>4、效益评价层：是针对学生设计的事故情况及疏导算法仿真后的效益分析与评价展示</p>
        <p>5、教学评价层：进行实验过程记录、实验报告、实验讨论、教学反馈等。</p>
      </div>
      <h5 className="m-b-20 m-t-40">实验教学项目</h5>
      <div className="part-content">
        <p className="fangsong">开发技术（如：3D仿真、VR技术、AR技术、动画技术、WebGL技术、OpenGL技术等）</p>
        <p>该项目拟采用的开发技术主要包括BI技术提供数据可视化展示、Flash页面图表展示技术、VISSIM微观仿真模拟等</p>
        <p className="fangsong">开发工具（如：Unity3d、Virtools、Cult3D、Visual Studio、Adobe Flash、百度VR内容展示SDK等）</p>
        <p>Unity3d、Visual Studio</p>
        <p className="fangsong">项目品质（如：单场景模型总面数、贴图分辨率、每帧渲染次数、动作反馈时间、显示刷新率、分辨率等）</p>
        <p>单场景模型总面数200万、动作反馈时间0.02秒、显示刷新率35FPS,贴图绘制数 1684张，贴图分辨率平均每张512-1024、分辨率1280*720</p>
      </div>
      <h5 className="m-b-20 m-t-40">管理平台</h5>
      <div className="part-content">
        <p className="fangsong">开发语言（如：JAVA、.Net、PHP等）</p>
        <p>PHP</p>
        <p className="fangsong">开发工具 （如：Eclipse、Visual Studio、NetBeans、百度VR课堂SDK等）</p>
        <p>Visual Studio</p>
        <p className="fangsong">采用的数据库（如：HBASE、Mysql、SQL Server、Oracle等）</p>
        <p>SQL Server</p>
      </div>
   </div>
  );
};
