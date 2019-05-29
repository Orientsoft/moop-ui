import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <Fragment>
      <div className="bg-conttop p-t-60 p-b-60">
        <div className="container  text-left">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="large ">关于我们 MoopLab</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white m-t-40 p-b-60">
        <div className="container p-b-60 ">
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="list-group">
                <Link to="/about" className="list-group-item list-group-item-action active">
                  关于我们
                </Link>
                {/* <Link to="#" className="list-group-item list-group-item-action">联系我们</Link> */}
                {/* <Link to="#" className="list-group-item list-group-item-action">常见问题</Link> */}
                <Link to="/help" className="list-group-item list-group-item-action ">服务协议</Link>
                {/* <Link href="#" className="list-group-item list-group-item-action disabled">意见反馈</Link> */}
              </div>
            </div>
            <div className="col-12 col-md-9">
              <h2>关于我们</h2><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;MoopLab数据科学开放实验室是由Jupyter China社区与成都源动数据科技有限公司共同开发运营的线上数据科学实验平台。</p><br />
              <b>Jupyter China</b><br /><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;我们是国内最早普及和推动jupyter的团队之一</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;我们发起成立了Jupyter China Community</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;* 我们与加州伯克利成立了第一家jupyter国际联合实验室</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;* 我们发起了MOOP-China项目</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp; * 我们将成为Fernando新成立的CIC（Center of Interactive Computing）的第一位获邀发起成员。</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;成都源动数据科技有限公司，网址 datadynamic.io，，于2018年成立，是以软件开发和数据分析为主要业务的科技公司。</p><br />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
