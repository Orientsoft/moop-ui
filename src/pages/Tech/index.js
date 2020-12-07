import React, { Fragment } from "react";

export default () => {
  return (
    <Fragment>
      <div className="tech1">
        <p className="part-title .tech2">
          系统架构图及简要说明
        </p>
        <div className="part-content .tech3">
          <span className="content-title">简要说明：</span>
          <div className="content-text">
            <p>
              <span className="tech4">
                平台由以下模块组成：
              </span>
            </p>
            <p className="tech5">
              <span style={{lineHeight: '120%'}}>
                a)
                <span className="tech6">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span className="tech7">
                用户界面
              </span>
            </p>
            <p style={{lineHeight: '120%'}}>
              <span className="tech8">
                提供用户访问的
              </span>
              <span className="tech9">Web</span>
              <span className="tech8">
                界面，利用前后端分离技术，用户界面只包含页面、
              </span>
              <span className="tech9">JS</span>
              <span className="tech8">
                脚本、
              </span>
              <span className="tech9">CSS</span>
              <span className="tech8">
                样式表等静态资源，无需后端服务器动态渲染。
              </span>
            </p>
            <p style={{lineHeight: '120%'}}>
              <span className="tech8">
                当用户请求界面时，浏览器加载界面资源并渲染，初始化
              </span>
              <span className="tech9">JS</span>
              <span className="tech8">
                脚本。用户在界面上的操作，会由
              </span>
              <span className="tech9">JS</span>
              <span className="tech8">
                脚本转化为
              </span>
              <span className="tech9">Ajax</span>
              <span className="tech8">
                请求，从服务器返回的数据由
              </span>
              <span className="tech9">JS</span>
              <span className="tech8">
                控制浏览器进行渲染展示。
              </span>
            </p>
            <p style={{lineHeight: '120%'}}>
              <span style={{lineHeight: '120%'}}>
                b)
                <span className="tech6">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span className="tech7">
                服务代理
              </span>
            </p>
            <p style={{lineHeight: '120%'}}>
              <span className="tech8">
                为后端服务集群提供统一网络入口。
              </span>
            </p>
            <p style={{lineHeight: '120%'}}>
              <span className="tech8">
                代理根据前端
              </span>
              <span className="tech9">Web</span>
              <span className="tech8">
                界面发送的请求域名，将请求转发到域名对应的的租户集群上；同时，代理还负责用户界面的资源服务，即用户请求页面的时候，由代理进行响应，返回静态资源。
              </span>
            </p>
            <p style={{lineHeight: '120%'}}>
              <span style={{lineHeight: '120%'}}>
                c)
                <span className="tech6">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span className="tech7">
                孵化器
              </span>
            </p>
            <p style={{lineHeight: '120%'}}>
              <span className="tech8">
                孵化器是本平台的核心模块，负责每个租户
              </span>
              <span className="tech9">/</span>
              <span className="tech8">
                用户的容器启停管理，也负责用户存储等资源管理。孵化器运行在
              </span>
              <span className="tech9">K8S</span>
              <span className="tech8">
                集群上，集成了
              </span>
              <span className="tech9">MongoDB</span>
              <span className="tech8">
                、
              </span>
              <span className="tech9">Minio</span>
              <span className="tech8">
                、
              </span>
              <span className="tech9">Jupyterhub</span>
              <span className="tech8">
                等技术，并包含自研的存储卷、动态
              </span>
              <span className="tech9">Pod</span>
              <span className="tech8">
                、容器启动、回收模块。
              </span>
            </p>
            <p style={{lineHeight: '120%'}}>
              <span className="tech8">
                孵化器对用户界面提供
              </span>
              <span className="tech9">Restful API</span>
              <span className="tech8">
                接口。当新建用户的时候，孵化器会调用存储卷服务创建用户的存储卷；当用户启动容器的时候，孵化器通过容器启动模块，请求集成的
              </span>
              <span className="tech9">JupyterHub</span>
              <span className="tech8">
                完成容器创建；当用户登出或长时间停止工作时，容器回收模块自动进行容器的停止和资源回收。
              </span>
            </p>
            <p style={{lineHeight: '120%'}}>
              <span style={{lineHeight: '120%'}}>
                d)
                <span className="tech6">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span className="tech7">
                公共服务
              </span>
            </p>
            <p style={{lineHeight: '120%'}}>
              <span className="tech8">
                公共服务模块提供整个平台共享的服务。
              </span>
            </p>
            <p style={{lineHeight: '120%'}}>
              <span className="tech8">
                审计服务模块对全平台资源、容器、用户等进行实时和批量审计，将结果保存在数据库备查，同时提供审计接口供孵化器和管理界面调用。
              </span>
            </p>
            <p style={{lineHeight: '120%'}}>
              <span className="tech8">
                短消息服务对孵化器暴露短消息接口，可以调用短消息服务商的接口向用户发送通知消息。
              </span>
            </p>
            <p style={{lineHeight: '120%'}}>
              <span className="tech8">
                项目服务保存平台所有的项目和镜像地址，负责项目的管理和镜像拉取。
              </span>
            </p>
            <p style={{lineHeight: '120%'}}>
              <span className="tech8">
                租户服务保存租户的信息、资源配额模板、购买的资源列表等，提供对外接口。
              </span>
            </p>
            <p style={{lineHeight: '120%'}}>
              <span style={{lineHeight: '120%'}}>
                e)
                <span className="tech6">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </span>
              <span className="tech7">
                管理界面
              </span>
            </p>
            <p style={{lineHeight: '120%'}}>
              <span className="tech8">
                管理界面为系统、租户管理员提供各自的管理界面。
              </span>
            </p>
            <p style={{lineHeight: '120%'}}>
              <span className="tech8">
                系统管理员可以查看全系统的审计信息，管理租户并为租户分配资源。
              </span>
            </p>
            <p>
              <span className="tech8">
                租户管理员可以查看租户内部的审计信息，管理教师学生账号、资源配额等。
              </span>
            </p>
            <p>
              <br />
            </p>
          </div>
          <div className="clearfix" />
          <div className="content-text">
            <ul id="schemaPics">
              <li>
                <img
                  src="/file?id=7003"
                  data-original="/file?id=7003"
                  data-photo="/file?id=7003"
                  alt="架构图.png"
                  onerror="this.src='/images/default.jpg'"
                  className="tech10"
                />
              </li>
            </ul>
          </div>
          <div className="moreBox">
            <a href="javascript:;" title="查看更多" className="showMore">
              <span>
                查看更多<i className="iconfont"></i>
                <span />
              </span>
            </a>
          </div>
        </div>
        <p className="part-title">实验教学项目</p>
        <div className="part-content">
          <span className="content-title">开发技术：</span>
          <div className="content-text">
            HTML5，其他
            <span className="otherTech_content">
              Docker Kubernetes，python，jupyter Notebook
            </span>
          </div>
          <div className="clearfix" />
          <span className="content-title">开发工具：</span>
          <div className="content-text">
            其他<span className="otherTool_content">VSCode</span>
          </div>
          <div className="clearfix" />
          <span className="content-title">运行环境：</span>
          <div className="content-text">
            <h3>服务器</h3>CPU<span className="underline_txt">40</span>核、内存
            <span className="underline_txt">512G</span>GB、磁盘
            <span className="underline_txt">1000</span>GB、显存
            <span className="underline_txt">32G</span>GB、GPU型号
            <span className="underline_txt"> Nvidia V100 </span>
            <h3>操作系统</h3>Linux<h3>数据库</h3>其他
            <span className="otherBase_content">MongoDB，Redis，Ceph</span>
            <br />
            备注说明
            <span className="underline_txt">需要至少3台服务器组建K8S集群</span>
          </div>
          <div className="clearfix" />
          <span className="content-title">
            项目品质
            <span className="fangsong">
              （如：单场景模型总面数、贴图分辨率、每帧渲染次数、动作反馈时间、显示刷新率、分辨率等）
            </span>
            ：
          </span>
          <div className="content-text">无适合描述</div>
        </div>
      </div>
    </Fragment>
  );
};
