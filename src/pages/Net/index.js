import React, { Fragment } from 'react';
import { jumpClassroom } from '@/utils/helper';


export default ({ history }) => {
  const onPush = () => {
    jumpClassroom(history)
  }

  return (
    <Fragment>
      <div >
        <div id="demo" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/v2_qgqxp1.png" />
              <div className="carousel-caption describe-caption">
                <div className="banner-text"><span>快递自提网点布局虚拟仿真实验</span></div>
                <p>以学生为中心的实验教学理念,激发学生的学习兴趣和潜能,增强学生创新创造能力。</p>
                <button onClick={onPush} type="button" className="btn btn-primary">在线实验</button>&nbsp;&nbsp;
						<button onClick={onPush} type="button" className="btn btn-light" data-toggle="modal" data-target="#login">专家入口</button>
              </div>
            </div>
          </div>
        </div>
        <div className="section bzx-f3 cont">
          <div className="container-bwz">
            <div className="row">
              <div className="col-md-12 col-sm-12">
              <div className="tech1">
                <p className="se-text">
          网络条件要求
        </p>
        <div className="part-content">
          <span className="content-title">
            说明客户端到服务器的带宽要求
            <span className="fangsong">（需提供测试带宽服务）</span>：
          </span>
          <div className="content-text">10M</div>
          <div className="clearfix" />
          <span className="content-title">
            说明能够支持的同时在线人数
            <span className="fangsong">（需提供在线排队提示服务）</span>：
          </span>
          <div className="content-text">50</div>
        </div>
        <p className="part-title">
          用户操作系统要求（如Window、Unix、IOS、Android等）
        </p>
        <div className="part-content">
          <span className="content-title">计算机操作系统和版本要求：</span>
          <div className="content-text">
            <p className="net1">
              <span className="net2">
                CentOS 7.5
              </span>
              <span className="net3">
                及以上，
              </span>
              <span className="net4">
                Docker 18.06
              </span>
              <span className="net5">
                ，
              </span>
              <span className="net6">
                Kubernetes 1.14.3
              </span>
            </p>
          </div>
          <div className="clearfix" />
          <span className="content-title">其他计算终端操作系统和版本要求：</span>
          <div className="content-text">
            <p>
              无<br />
            </p>
          </div>
          <div className="clearfix" />
          <span className="content-title">支持移动端：</span>
          <div className="content-text">否</div>
        </div>
        <p className="part-title">
          用户非操作系统软件配置要求（如浏览器、特定软件等）
        </p>
        <div className="part-content">
          <span className="content-title">需要特定插件：</span>
          <div className="content-text">否</div>
          <div className="clearfix" />
          <span className="content-title">
            其他计算终端非操作系统软件配置要求
            <span className="fangsong">（需说明是否可提供相关软件下载服务）</span>：
          </span>
          <div className="content-text">
            <p>
              <span className="net7">
                Chrome浏览器 v46以上
              </span>
            </p>
          </div>
        </div>
        <p className="part-title">
          用户硬件配置要求（如主频、内存、显存、存储容量等）
        </p>
        <div className="part-content">
          <span className="content-title">计算机硬件配置要求：</span>
          <div className="content-text">无特殊要求</div>
          <div className="clearfix" />
          <span className="content-title">其他计算终端硬件配置要求：</span>
          <div className="content-text">无特殊要求</div>
        </div>
        <p className="part-title">用户特殊外置硬件要求（如可穿戴设备等）</p>
        <div className="part-content">
          <span className="content-title">计算机特殊外置硬件要求：</span>
          <div className="content-text">无特殊要求</div>
          <div className="clearfix" />
          <span className="content-title">其他计算终端特殊外置硬件要求：</span>
          <div className="content-text">无特殊要求</div>
        </div>
        <p className="part-title">网络安全</p>
        <div className="part-content">
          <span className="content-title">
            项目系统是否完成国家信息安全等级保护：
          </span>
          <div className="content-text">是</div>
          <div className="clearfix" />
          <p className="fangsong">（勾选“是”，请填写）</p>
          <span className="content-title">国家信息安全等级保护：</span>
          <div className="content-text">一 级</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Fragment>
  );
};