import React, { Fragment } from 'react';
import { jumpClassroom } from '@/utils/helper';


export default ({  history }) => {
    const onPush = () => {
        jumpClassroom(history)
    }

  return (
    <Fragment>

		<div id="demo" className="carousel slide" data-ride="carousel">

		  <div className="carousel-inner">
				<div className="carousel-item active">
					<img src="images/v2_qgqxp1.png"/>
					<div className="carousel-caption describe-caption">
						<div className="banner-text"><span>快递自提网点布局优化虚拟仿真实验</span></div>
						<p>以学生为中心的实验教学理念,激发学生的学习兴趣和潜能,增强学生创新创造能力。</p>
						<button onClick={onPush} type="button" className="btn btn-primary">在线实验</button>&nbsp;&nbsp;
						<button onClick={onPush} type="button" className="btn btn-light" data-toggle="modal" data-target="#login">专家入口</button>
					</div>
				</div>
			</div>
		</div>
		<div className="section">
			<div className="container-bwz">
				<div className="row">
					<div className="col-md-2 col-sm-6">
						<div className="text-center pane-le">
							<div className="pane-text">考核评价</div>
							<ul className="list-unstyled pane-tab">
								<li className="active"></li>
								<li></li>
								<li></li>
							</ul>
						</div>
					</div>
					<div className="col-md-10 col-sm-6">
						<div className="pane-ri">
							<div className="pane justify active">
								<div className="panes-body">
									<p></p>
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
