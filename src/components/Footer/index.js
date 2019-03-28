import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <footer className="footer bg-black ">
    <div className="container  p-30">
      <div className="row m-t-20">
        <div className="col-md-6 col-sm-6">
          <Link className="navbar-brand logo" to="/"><i>E</i><span>ureka</span></Link>
          <p>我们一直致力于为广大开发者提供更多的优质技术文档和辅助开发工具！</p>
        </div>
        <div className="col-md-2 col-sm-6">
          <div className="widget">
            <h6 className="title">关于</h6>
            <hr />
            <ul className="list-unstyled">
              <li><Link to="/">关于我们</Link></li>
              <li><Link to="/">招聘</Link></li>
              <li><Link to="/">常见问题</Link></li>
              <li><Link to="/">服务协议</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-sm-6">
          <div className="widget">
            <h6 className="title">联系</h6>
            <hr />
            <ul className="list-unstyled">
              <li><Link to="/">微信</Link></li>
              <li><Link to="/">广告合作</Link></li>
              <li><Link to="/">友情链接</Link></li>
              <li><Link to="/">招聘</Link></li>
              <li><Link to="/">帮助</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-sm-6">
          <div className="widget"> <h6 className="title">赞助商</h6>
            <hr />
            <ul className="list-unstyled">
              <li><Link to="/">关于我们</Link></li>
              <li><Link to="/">招聘</Link></li>
              <li><Link to="/">常见问题</Link></li>
              <li><Link to="/">服务协议</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center m-t-20">
        <span className="fade-half">© 版权所有 Eureka</span>
      </p>
    </div>
  </footer>
);
