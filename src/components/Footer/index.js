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
              {get(tenant, 'logo.0') ? <img src={get(tenant, 'logo.0')} alt="" width="240" /> : <span><i>M</i>oopLab</span>}
              {/* {get(tenant, 'logo.0') ? <img src={get(tenant, 'logo.0')} alt="" width="240"  /> : <span><i>M</i>oopLab</span>} */}
            </Link>
            {/* <p>我们一直致力于为广大开发者提供更多的优质技术文档和辅助开发工具！</p> */}
          </div>
        </div>
        <p className="m-t-20 text-left p-b-60">
          <span className="fade-half">
            Copyright ©2019 北京物资学院 all right reserved. <br />
             <a href="http://www.beian.miit.gov.cn" target="_blank">蜀ICP备15010143号-6</a>
          </span>
        </p>
      </div>
    </footer>
  );
};
