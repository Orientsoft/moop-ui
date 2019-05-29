import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <footer className="footer bg-black p-t-80">
    <div className="container  p-30">
      <div className="row m-t-20">
        <div className="col-md-4 col-sm-6">
          <Link className="navbar-brand logo" to="/"><i>M</i><span>oopLab</span></Link>
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
              <li>地址：成都市青羊区人民中路二段68号中铁瑞城大厦1705室</li>
              <li>传真：028-84118086/84118096-888</li>
              <li>电话：028-84118076/86/96</li>
              {/* <li>github：<a href="https://github.com/moop-china" target="_blank"><img height="20" src="http://pngimg.com/uploads/github/github_PNG15.png" /></a></li> */}
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center m-t-20">
        <a className="m-r-15" href="https://jupyter.org/index.html" target="_blank" >
          <img height="40" src="/static/images/jupyter_logo.svg" alt="Jupyter logo" />
        </a>
        <a className="m-l-15" href="https://github.com/moop-china" target="_blank"><img height="50" src="/static/images/github.png" /></a></p>
      <p className="m-t-20">
        <span className="fade-half">© 版权所有 2019 MoopLab</span>
      </p>
    </div>
  </footer>
);
