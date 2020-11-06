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
						<div className="banner-text"><span>快递自提网点布局虚拟仿真实验</span></div>
						<p>以学生为中心的实验教学理念,激发学生的学习兴趣和潜能,增强学生创新创造能力。</p>
						<button onClick={onPush} type="button" className="btn btn-primary">在线实验</button>&nbsp;&nbsp;
						<button onClick={onPush} type="button" className="btn btn-light" data-toggle="modal" data-target="#login">专家入口</button>
					</div>
				</div>
			</div>
		</div>
		<div className="section">
			<div className="container-bwz">
				<iframe id="virtual" width="100%" height="1200px" src="https://bwu.mooplab.com/classroom?id=5f72eb6ab8000861a6fd16a0"></iframe>
			</div>
		</div>
    </Fragment>
  );
};
