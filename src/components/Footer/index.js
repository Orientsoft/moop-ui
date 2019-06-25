import React from 'react';
import { Link } from 'react-router-dom';
import get from 'lodash-es/get';
import { getCurrentTenant } from '@/utils/helper';

export default () => {
  const tenant = getCurrentTenant();

  return (
    <footer className="footer bg-black p-t-80">
      <div className="container  p-30">
        <div className="row m-t-20">
          <div className="col-md-4 col-sm-6">
            <Link className="navbar-brand logo" to="/">
              {get(tenant, 'logo.0') ? <img src={get(tenant, 'logo.0')} alt="" width="150" height="60" /> : <span><i>M</i>oopLab</span>}
            </Link>
            {/* <p>我们一直致力于为广大开发者提供更多的优质技术文档和辅助开发工具！</p> */}
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="widget">
              <h6 className="title">关于</h6>
              <hr />
              <ul className="list-unstyled">
                <li>
                  {get(tenant, 'about') ? <a href={get(tenant, 'about')} rel="noopener noreferrer" target="_blank">关于我们</a> : <Link to="/about">关于我们</Link>}
                </li>
                <li>
                  {get(tenant, 'license') ? <a href={get(tenant, 'license')} rel="noopener noreferrer" target="_blank">服务协议</a> : <Link to="/help">服务协议</Link>}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="widget">
              <h6 className="title">合作伙伴</h6>
              <hr />
              <ul className="list-unstyled">
                {get(tenant, 'companys', []).map((company, i) => {
                  const sep = company.indexOf('+');
                  return (
                    <li key={i}>
                      {sep === -1 ? (
                        <a href="#" rel="noopener noreferrer" target="_blank">{company}</a>
                      ) : (
                        <a href={company.substring(sep + 1)} rel="noopener noreferrer" target="_blank">{company.substring(0, sep)}</a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="widget"> <h6 className="title">联系我们</h6>
              <hr />
              <ul className="list-unstyled">
                <li>地址：{get(tenant, 'address', '')}</li>
                <li>邮箱：{get(tenant, 'email', '')}</li>
                <li>电话：{get(tenant, 'mobile', '')}</li>
                {/* <li>github：<a href="https://github.com/moop-china" target="_blank"><img height="20" src="http://pngimg.com/uploads/github/github_PNG15.png" /></a></li> */}
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center m-t-20">
          <a className="m-r-15" href="http://www.jupyterchina.org" target="_blank" >
            <img height="40" src="/static/images/jupyterchina_l.png" alt="Jupyter logo" />
          </a>
          <a className="m-l-15" href="https://jupyter.org" target="_blank" >
            <img height="45" src="/static/images/jupter-l.png" alt="Jupyter logo" />
          </a>
          <a className="m-l-15" href="https://github.com/moop-china" target="_blank">
            <img height="50" src="/static/images/github.png" />
          </a>
        </p>
        <p className="m-t-20 text-center">
          <span className="fade-half">
            Copyright ©2019 MoopLab all right reserved. <br />
            四川欧润特软件科技有限公司提供技术支持 - <a href="http://www.beian.miit.gov.cn" target="_blank">蜀ICP备15010143号-6</a>
          </span>
        </p>
      </div>
    </footer>
  );
};
