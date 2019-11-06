import React from 'react';
import { Link } from 'react-router-dom';
import get from 'lodash-es/get';
import trim from 'lodash-es/trim';
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
                <li><Link to="/about">关于我们</Link></li>
                {/* <li><Link to="/help">联系我们</Link></li> */}
                <li><Link to="/help">服务协议</Link></li>
                {/* <li><Link to="/help">常见问题</Link></li> */}
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="widget">
              <h6 className="title">合作伙伴</h6>
              <hr />
              <ul className="list-unstyled">
                <li><a href="https://www.swufe.edu.cn/" target="_blank">西南财经大学</a></li>
                <li><a href="https://www.uestc.edu.cn/" target="_blank">电子科技大学</a></li>
                <li><a href="http://www.scu.edu.cn/" target="_blank">四川大学</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="widget"> <h6 className="title">联系我们</h6>
              <hr />
              <ul className="list-unstyled">
                <li>地址：{get(tenant, 'address', '')}</li>
                <li>邮箱：{get(tenant, 'email', '')}</li>
                {trim(get(tenant, 'mobile')) ? <li>电话：{get(tenant, 'mobile')}</li> : null}
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center m-t-20">
          <a className="m-r-15" href="http://www.jupyterchina.org" target="_blank" >
            <img height="40" src="/images/jupyterchina_l.png" alt="Jupyter logo" />
          </a>
          <a className="m-l-15" href="https://jupyter.org" target="_blank" >
            <img height="45" src="/images/jupter-l.png" alt="Jupyter logo" />
          </a>
          <a className="m-l-15" href="https://github.com/moop-china" target="_blank">
            <img height="50" src="/images/github.png" />
          </a>
        </p>
        <p className="m-t-20 text-center">
          <span className="fade-half">
            Copyright ©2019 K@S Lab all right reserved. <br />
            北京百智享科技有限公司提供技术支持 - <a href="http://www.beian.miit.gov.cn" target="_blank">京ICP备17041490号-1</a>
          </span>
        </p>
      </div>
    </footer>
  );
};
