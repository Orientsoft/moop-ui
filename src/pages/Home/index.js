import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import get from 'lodash-es/get';
// import CourseList from '@/components/CourseList';
import { getCurrentTenant, jumpClassroom } from '@/utils/helper';

export default ({ history }) => {
	const tenant = getCurrentTenant();

	const onPush = () => {
		jumpClassroom(history)
	}

	useEffect(() => {
		try {
			//滚动元素id，左切换按钮，右切换按钮，切换元素个数id,滚动方式，切换方向，是否自动滚动，滚动距离，滚动时间，滚动间隔，显示个数
			LbMove('BoxUl', 'btnl', 'btnr', 'BoxSwitch', true, 'left', true, 305, 1000, 5000, 6);
		} catch (error) {
			console.log('error', error)
		}
	}, [])
	return (
		<Fragment>

			<div id="demo" className="carousel slide" data-ride="carousel">

				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src="images/v2_qgqxp1.png" />
						<div className="carousel-caption describe-caption">
							<div className="banner-text"><span>快递自提网点布局虚拟仿真实验</span></div>
							<p>以学生为中心的实验教学理念,激发学生的学习兴趣和潜能,增强学生创新创造能力。</p>
							{/* <Link to="/classroom?id=5f72eb6ab8000861a6fd16a0" className="btn btn-lg startbtn m-r-15">在线实验</Link>
            <Link to="/classroom?id=5f72eb6ab8000861a6fd16a0" className="btn btn-lg startbtn whitebtn">专家入口</Link> */}
							<button onClick={onPush} type="button" className="btn btn-primary">在线实验</button>&nbsp;&nbsp;
						<button onClick={onPush} type="button" className="btn btn-light" data-toggle="modal" data-target="#login">专家入口</button>
						</div>
					</div>
				</div>
			</div>
			<div className="section bzx-f3">
				<div className="container-bwz">
					<div className="row translateY-lc">
						<div className="col-lg-7 col-md-7 col-12 mt-20">
							<div className="se-text">项目简介</div>
							<div className="row se-bsp">
								<div className="col-lg-4 col-sm-4 col-md-6">
									<div><b>学校名称</b> : <span>北京物资学院</span></div>
								</div>
								<div className="col-lg-4 col-sm-4 col-md-6">
									<div><b>所属分类</b> : <span>物流管理</span></div>
								</div>
								<div className="col-lg-4 col-sm-4 col-md-6">
									<div><b>实验学时</b> : <span>3</span></div>
								</div>
								<div className="col-lg-4 col-sm-4 col-md-6">
									<div><b>实验项目负责人</b> : <span>周丽</span></div>
								</div>
								<div className="col-lg-4 col-sm-4 col-md-6">
									<div><b>实验操作步骤</b> : <span>14</span></div>
								</div>
							</div>
							<div className="se-jj">
								电子商务与快递业的协同发展、迅猛增长，给人们的日常生活带来了便利。特别是在今年疫情防控期间，快递业有力保障了人们的居家隔离生活。然而快递派送乱象频发、效率低、成本高。因地制宜的布局快递自提网点，方便用户自提快件，有助于解决这一问题。
						</div>
							<button type="submit" className="btn btn-primary mt-10">查看更多</button>
						</div>
						<div className="col-lg-5 col-md-5 col-12">
							<video poster="http://cirrxfxm.zufe.edu.cn/jsp/index/picture/project.png" src="http://cirrxfxm.zufe.edu.cn/assets/layouts/layout/video/1.mp4" width="100%" controls="controls"></video>
						</div>
					</div>
					<div className="row mt-30 translateY-lc">
						<div className="col-lg-5 col-md-5 col-12">
							<video poster="http://cirrxfxm.zufe.edu.cn/jsp/index/picture/project.png" src="http://cirrxfxm.zufe.edu.cn/assets/layouts/layout/video/1.mp4" width="100%" controls="controls"></video>
						</div>
						<div className="col-lg-7 col-md-7 col-12 mt-20">
							<div className="se-text">教学引导视频</div>
							<div className="se-jj">
								以快递末端自提网点布局这一问题为导向，分析建模所需要的数据，对于能够调研得到的数据采用真实调研的数据，对于无法调研得到或者调研有困难的数据设置一个合理的估计值，来模拟现实情况。
						</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section ash">
				<div className="container-bwz ul-inli">
					<div className="row">
						<div className="col-lg-3 col-md-4 col-6">
							<Link to="/knowledge" >
								<div className="test-body">
									<p>实验目的</p>
									<img src="images/01.png" />
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-md-4 col-6">
							<Link to="/knowledge" >
								<div className="test-body">
									<p>实验原理</p>
									<img src="images/02.png" />
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-md-4 col-6">
							<Link to="/knowledge" >
								<div className="test-body">
									<p>实验材料</p>
									<img src="images/03.png" />
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-md-4 col-6">
							<Link to="/knowledge" >
								<div className="test-body">
									<p>预备知识</p>
									<img src="images/04.png" />
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-md-4 col-6">
							<Link to="/knowledge" >
								<div className="test-body">
									<p>实验步骤</p>
									<img src="images/05.png" />
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-md-4 col-6">
							<Link to="/knowledge" >
								<div className="test-body">
									<p>考核内容</p>
									<img src="images/06.png" />
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-md-4 col-6">
							<Link to="/knowledge" >
								<div className="test-body">
									<p>教学方法</p>
									<img src="images/07.png" />
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-md-4 col-6">
							<Link to="/knowledge" >
								<div className="test-body">
									<p>实验指导</p>
									<img src="images/08.png" />
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="section">
				<div className="container-bwz">
					<div className="se-body">
						<div className="clearfix">
							<span className="float-left se-text">师资团队</span>
						</div>
						<div className="Box">
							<div className="content">
								<div className="Box_con clearfix">
									<span className="btnl btn" id="btnl"></span>
									<span className="btnr btn" id="btnr"></span>
									<div className="conbox" id="BoxUl">
										<ul className="row">
											<li className="cur bwz-6">
												<img src="images/faculty-1.png" alt="" />
												<p>周丽<span>教授</span></p>
											</li>
											<li className="cur bwz-6">
												<img src="images/faculty-2.png" alt="" />
												<p>张海军<span>副教授</span></p>
											</li>
											<li className="cur bwz-6">
												<img src="images/faculty-3.png" alt="" />
												<p>陈蕾<span>副教授</span></p>
											</li>
											<li className="cur bwz-6">
												<img src="images/faculty-4.png" alt="" />
												<p>李锋<span>副教授</span></p>
											</li>
											<li className="cur bwz-6">
												<img src="images/faculty-5.png" alt="" />
												<p>郭风<span>副教授</span></p>
											</li>
											<li className="cur bwz-6">
												<img src="images/faculty-6.png" alt="" />
												<p>岳溥庥<span>讲师</span></p>
											</li>
											<li className="cur bwz-6">
												<img src="images/faculty-7.png" alt="" />
												<p>韩丽华<span>讲师</span></p>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						{/* <script type="text/javascript">
						//滚动元素id，左切换按钮，右切换按钮，切换元素个数id,滚动方式，切换方向，是否自动滚动，滚动距离，滚动时间，滚动间隔，显示个数
						LbMove('BoxUl','btnl','btnr','BoxSwitch',true,'left',true,305,1000,5000,6);
					</script> */}
					</div>
				</div>
			</div>
		</Fragment>
	);
};
