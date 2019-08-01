import React from 'react';
import { Link } from 'react-router-dom';
import get from 'lodash-es/get';
import trim from 'lodash-es/trim';
import { getCurrentTenant } from '@/utils/helper';

export default () => {
  const tenant = getCurrentTenant();

  return (
    <footer className="footer bg-black ">
      <div className="container  p-30">
        <div className="row m-t-20">
          <div className="col-md-4 col-sm-6">
            <Link className="navbar-brand logo" to="/">
              {get(tenant, 'logo.0') ? <img src={get(tenant, 'logo.0')} alt=""  height="60" /> : <span><i>M</i>oopLab</span>}
            </Link>
            {/* <p>我们一直致力于为广大开发者提供更多的优质技术文档和辅助开发工具！</p> */}
          </div>
          <div className="col-md-6 col-sm-6 p-t-30">
            <p>地址：{get(tenant, 'address', '')}&nbsp;&nbsp;&nbsp;&nbsp;邮箱：{get(tenant, 'email', '')}&nbsp;&nbsp;&nbsp;&nbsp;电话：{get(tenant, 'mobile')}</p>
          </div>
        </div>
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
