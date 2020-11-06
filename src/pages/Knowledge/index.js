import React, { Fragment, useEffect } from 'react';
import {  jumpClassroom } from '@/utils/helper';

export default ({  history }) => {
    const onPush = () => {
        jumpClassroom(history)
    }
  useEffect(function(){
	$(".pane-le .pane-tab li").each(function(i){
		if(i == i) {
			$(this).click(function(){
				var b=$(".pane-le .pane-tab li").index($(this)[0]);
				$(this).addClass('active').siblings().removeClass('active');
				$(".pane-ri .pane:eq("+b+")").addClass('active').siblings().removeClass('active');
				var d=$(".pane-ri .pane.active").height();
			});
		}
    });
    $(".pane-tabs li").each(function(i){
		if(i == i) {
			$(this).click(function(){
				var b=$(".pane-tabs li").index($(this)[0]);
				$(this).addClass('active').siblings().removeClass('active');
				$(".knowledge-body .panes:eq("+b+")").addClass('active').siblings().removeClass('active');
			});
		}
	});
  }, [])
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
				<div className="row">
					<div className="col-md-2 col-sm-6">
						<div className="text-center pane-le">
							<div className="pane-text">实验介绍</div>
							<ul className="list-unstyled pane-tab">
								<li className="active">实验描述</li>
								<li>实验流程</li>
								<li>教学方法</li>
								<li>实验指导书</li>
							</ul>
						</div>
					</div>
					<div className="col-md-10 col-sm-6">
						<div className="pane-ri">
							<div className="pane justify active">
								<ul className="list-inline pane-tabs">
									<li className="active">实验目的</li>
									<li>实验原理</li>
									<li>实验材料</li>
								</ul>
								<div className="knowledge-body">
									<div className="panes active">
										<div className="row panes-body">
											<div className="col-lg-6 col-sm-6">
												<div className="text-p">电子商务与快递业的协同发展、迅猛增长，给人们的日常生活带来了便利。特别是在今年疫情防控期间，快递业有力保障了人们的居家隔离生活。然而，快递派送最后一公里的问题也更加突出。末端派送乱象频发，快递三轮车乱闯红灯，违规占道停车、摆摊设点屡禁不止。末端派送效率低、成本高。因地制宜的布局快递自提网点，方便用户自提快件，由箱式货车批量的将快件送到自提网点，将大大提高派送效率、减少末端派送人员的数量，有助于解决这一问题。</div>
												<div className="text-p">建设北京城市副中心，是北京建城立都以来具有里程碑意义的一件大事，对新时代北京的发展是一个重大机遇。由此，通过对北京城市副中心区域内快递自提网点的布局研究，可以为保障疫情防控下的民生需求、完善副中心快递末端网点布局提供决策参考。</div>
												<div className="text-p">本实验以北京城市副中心各小区的住户数来估计各小区的快递量，从百度地图上获取副中心区域内的便利店为备选自提网点，建立整数规划模型，用于自提网点的布局优化。通过本实验锻炼学生搜集、利用相关数据，综合利用各种方法和技术来解决实际问题的能力。具体而言通过本实验希望培养学生如下能力：</div>
											</div>
											<div className="col-lg-6 col-sm-6">
												<img src="images/buc.png" />
											</div>
											<div className="col-12">
												<div className="text-p">
													<p>（1）掌握百度地图API的使用方法，能够获取地理数据，根据经纬度计算两点间的距离；</p>
													<p>（2）能够使用Python进行函数拟合；</p>
													<p>（3）掌握整数规划模型的分析建模方法；</p>
													<p>（4）能够使用Python调用Gurobi软件API求解整数规划问题；</p>
													<p>（5）能够使用Python在百度地图上可视化展示快递自提网点布局结果。</p>
												</div>
											</div>
										</div>
									</div>
									<div className="panes">
										<div className="panes-body panes-yl">
											<p>以快递末端自提网点布局这一问题为导向，分析建模所需要的数据，对于能够调研得到的数据采用真实调研的数据，对于无法调研得到或者调研有困难的数据设置一个合理的估计值，来模拟现实情况。涉及如下知识点：</p>
											<div className="row">
												<div className="col-md-4 col-sm-4 col-12">
													<img src="images/syicon1.png" />
													<div className="panes-div">
														在百度地图上显示某一位置：编写python程序，读取各小区经纬度数据、各便利店经纬度数据，调用百度API将其显示在百度地图中。
													</div>
												</div>
												<div className="col-md-4 col-sm-4 col-12">
													<img src="images/syicon4.png" />
													<div className="panes-div">
														计算各便利店到各小区的距离，筛选出设立自提点的备选便利店：编写python程序，调用百度API计算两点间距离，将偏远的便利店从备选自提点中删除。
													</div>
												</div>
												<div className="col-md-4 col-sm-4 col-12">
													<img src="images/syicon5.png" />
													<div className="panes-div">
														用户自提意愿函数估计：根据用户自提意愿调查表，编写python程序拟合自提意愿与自提距离之间的关系。
													</div>
												</div>
												<div className="col-md-4 col-sm-4 col-12">
													<img src="images/syicon6.png" />
													<div className="panes-div">
														建立Gurobi整数规划模型，设置模型参数：有自提网点的固定成本、自提网点暂存的快递量、自提快件时节省的派件费用、用户自提意愿函数等。
													</div>
												</div>
												<div className="col-md-4 col-sm-4 col-12">
													<img src="images/syicon7.png" />
													<div className="panes-div">
														求解整数规划模型：编写python程序求解整数规划模型。
													</div>
												</div>
												<div className="col-md-4 col-sm-4 col-12">
													<img src="images/syicon8.png" />
													<div className="panes-div">
														计算结果可视化：将求得的备选网点及其服务的小区展示在百度地图上。
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="panes">
										<div className="panes-body panes-cl">
											<div className="row">
												<div className="col-lg-6">
													<p>→  副中心各小区每天平均派件量、各小区经纬度数据</p>
													<p>→  副中心各便利店及其经纬度数据</p>
													<p>→  副中心各便利店每天最多暂存快件量</p>
													<p>→  副中心各便利店暂存快件的固定成本、可变成本</p>
													<p>→  将快件暂存到便利店与送件到家相比节省的派件费用</p>
													<p>→  用户自提意愿调查汇总表</p>
													<p>→  百度地图API</p>
												</div>
												<div className="col-lg-6">
													<img src="images/logoicon.jpg" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="pane justify">
								<ul className="list-inline pane-tabs">
									<li className="active">预备知识</li>
									<li>实验方法与步骤</li>
								</ul>
								<div className="knowledge-body">
									<div className="panes active">
										<div className="row panes-body">
											<div className="col-lg-12">
												<div className="panes-cl">
													<p>编程知识：了解Python基本语法，以及sklearn,pandas,numpy，ipywidgets等python包；</p>
													<p>建模知识：了解Gurobi的建模思路和一般步骤；</p>
													<p>可视化：了解如何获取百度服务器ak和浏览器ak；</p>
												</div>
											</div>
										</div>
									</div>
									<div className="panes">
										<div className="panes-body">
											<div id="accordion">
											    <div className="card">
													<a className="card-link" data-toggle="collapse" href="#collapse1">
														<p>→  步骤1&nbsp;&nbsp;&nbsp;&nbsp;编写python程序，读取副中心各小区数据，包括小区名称、每天派件量、小区经纬度数据；</p>
													</a>
													<div id="collapse1" className="collapse show" data-parent="#accordion">
														<div className="card-body">
															编写python程序，读取副中心各小区数据，包括小区名称、每天派件量、小区经纬度数据；
														</div>
													</div>
											    </div>
											    <div className="card">
													<a className="card-link" data-toggle="collapse" href="#collapse2">
														<p>→  步骤2&nbsp;&nbsp;&nbsp;&nbsp;编写python程序，调用百度api将这些小区显示在百度地图上</p>
													</a>
													<div id="collapse2" className="collapse" data-parent="#accordion">
														<div className="card-body">
															编写python程序，调用百度api将这些小区显示在百度地图上；
														</div>
													</div>
											    </div>
											    <div className="card">
													<a className="card-link" data-toggle="collapse" href="#collapse3">
														<p>→  步骤3&nbsp;&nbsp;&nbsp;&nbsp;读取副中心各便利店数据；</p>
													</a>
													<div id="collapse3" className="collapse" data-parent="#accordion">
														<div className="card-body">
															编写python程序，读取副中心各便利店数据，包括便利店名称、经纬度数据、暂存快件的固定成本、暂存快件的变动成本、每天暂存快件量上限；
														</div>
													</div>
											    </div>
												<div className="card">
													<a className="card-link" data-toggle="collapse" href="#collapse4">
														<p>→  步骤4&nbsp;&nbsp;&nbsp;&nbsp;调用百度api将这些便利店显示在百度地图上；</p>
													</a>
													<div id="collapse4" className="collapse" data-parent="#accordion">
														<div className="card-body">
															调用百度api将这些便利店显示在百度地图上；
														</div>
													</div>
												</div>
												<div className="card">
													<a className="card-link" data-toggle="collapse" href="#collapse5">
														<p>→  步骤5&nbsp;&nbsp;&nbsp;&nbsp;编写python程序，调用百度地图api，计算各便利店到各小区的距离，并保存到文件中；</p>
													</a>
													<div id="collapse5" className="collapse" data-parent="#accordion">
														<div className="card-body">
															编写python程序，调用百度地图api，计算各便利店到各小区的距离，并保存到文件中；
														</div>
													</div>
												</div>
												<div className="card">
													<a className="card-link" data-toggle="collapse" href="#collapse6">
														<p>→  步骤6&nbsp;&nbsp;&nbsp;&nbsp;删去偏远的便利店，得到候选便利店；</p>
													</a>
													<div id="collapse6" className="collapse" data-parent="#accordion">
														<div className="card-body">
															删去偏远的便利店，得到候选便利店；
														</div>
													</div>
												</div>
												<div className="card">
													<a className="card-link" data-toggle="collapse" href="#collapse7">
														<p>→  步骤7&nbsp;&nbsp;&nbsp;&nbsp;读取用户自提意愿调查问卷统计结果，编写python程序，拟合自提意愿（自提百分比）关于自提距离的函数；</p>
													</a>
													<div id="collapse7" className="collapse" data-parent="#accordion">
														<div className="card-body">
															读取用户自提意愿调查问卷统计结果，编写python程序，拟合自提意愿（自提百分比）关于自提距离的函数；
															<div><img src="images/info1.jpg" /></div>
														</div>
													</div>
												</div>
												<div className="card">
													<a className="card-link" data-toggle="collapse" href="#collapse8">
														<p>→  步骤8&nbsp;&nbsp;&nbsp;&nbsp;设置自提点固定成本；</p>
													</a>
													<div id="collapse8" className="collapse" data-parent="#accordion">
														<div className="card-body">
															设置快递员平均每天的派件数量、平均工资；
														</div>
													</div>
												</div>
												<div className="card">
													<a className="card-link" data-toggle="collapse" href="#collapse9">
														<p>→  步骤9&nbsp;&nbsp;&nbsp;&nbsp;设置 快件暂存到便利店与送件到家相比节省的派件费用；</p>
													</a>
													<div id="collapse9" className="collapse" data-parent="#accordion">
														<div className="card-body">
															设置轻型箱式货车每天的送件量及每天的运维成本；
														</div>
													</div>
												</div>
												<div className="card">
													<a className="card-link" data-toggle="collapse" href="#collapse10">
														<p>→  步骤10&nbsp;&nbsp;&nbsp;&nbsp;设置便利店每天暂存快件量；</p>
													</a>
													<div id="collapse10" className="collapse" data-parent="#accordion">
														<div className="card-body">
															计算一个快件采用箱式货车送到自提点与送件到家相比所能节约的派件费；
														</div>
													</div>
												</div>
												<div className="card">
													<a className="card-link" data-toggle="collapse" href="#collapse11">
														<p>→  步骤11&nbsp;&nbsp;&nbsp;&nbsp;建立整数规划模型，设置若干自提网点，这些自提网点每天暂存快件量是受限的，优化目标为最大化的节约派件费用；</p>
													</a>
													<div id="collapse11" className="collapse" data-parent="#accordion">
														<div className="card-body">
															建立整数规划模型，设置若干自提网点，这些自提网点每天暂存快件量是受限的，优化目标为最大化的节约派件费用；
														</div>
													</div>
												</div>
												<div className="card">
													<a className="card-link" data-toggle="collapse" href="#collapse12">
														<p>→  步骤12&nbsp;&nbsp;&nbsp;&nbsp;编写python程序，调用Gurobi软件包，求解整数规划模型；</p>
													</a>
													<div id="collapse12" className="collapse" data-parent="#accordion">
														<div className="card-body">
															编写python程序，调用Gurobi软件包，求解整数规划模型；
														</div>
													</div>
												</div>
												<div className="card">
													<a className="card-link" data-toggle="collapse" href="#collapse13">
														<p>→  步骤13&nbsp;&nbsp;&nbsp;&nbsp;将设置为自提点的便利店加载到百度地图中，可视化的输出；</p>
													</a>
													<div id="collapse13" className="collapse" data-parent="#accordion">
														<div className="card-body">
															将设置为自提点的便利店加载到百度地图中，可视化的输出；
														</div>
													</div>
												</div>
												<div className="card">
													<a className="card-link" data-toggle="collapse" href="#collapse14">
														<p>→  步骤14&nbsp;&nbsp;&nbsp;&nbsp;学生考核：模型理解、数学功底，建模能力和编程能力等；</p>
													</a>
													<div id="collapse14" className="collapse" data-parent="#accordion">
														<div className="card-body">
															改变上述参数，如用户的自提意愿、自提点的暂存快件量、快递员平均每天的派件量、快递员平均工资、箱式货车每天送件量以及运维成本等，在百度地图中标记出计算结果；
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="pane justify">
								<ul className="list-inline pane-tabs">
									<li className="active">考核内容</li>
									<li>实验教学方法</li>
								</ul>
								<div className="knowledge-body">
									<div className="panes active">
										<div className="row panes-body">
											<div className="col-lg-12">
												<div className="panes-cl">
													<p>掌握百度地图API的使用方法，能够获取地理数据，根据经纬度计算两点间的距离；</p>
													<p>能够使用Python进行函数拟合；</p>
													<p>掌握整数规划模型的分析建模方法；</p>
													<p>能够使用Python调用Gurobi软件API求解整数规划问题；</p>
													<p>能够使用Python在百度地图上可视化展示快递自提网点布局结果。</p>
												</div>
											</div>
										</div>
									</div>
									<div className="panes">
										<div className="row panes-body">
											<div className="col-lg-12">
												<div className="text-p">
													通过该实验，使学生掌握利用python读取数据、调用百度API计算两点间距离的方法，使学生掌握利用python建立数学模型并求解模型的方法，使学生掌握利用python与百度地图相结合可视化展示地理数据的方法。
												</div>
												<div className="text-p">
													本项目采用线上教学与仿真实验项目相结合的教学方法，线上教学强调python基础知识讲解、百度API的调用、Gurobi软件与python联合编程，本实验将综合利用这些知识，解决快递末端自提网点布局这一实际问题，加深学生对所学知识的理解和掌握。在仿真实验过程中，各小区以及各便利店的经纬度数据是从网上爬取得来的实际数据，各小区快件量是根据小区住户数、副中心每天平均派件量推算出来的，各便利店每天暂存快件的上限是根据一定规则仿真产生的，快递员的工资及送件到家时每天派件量是实际调研得来的数据，箱式货车的送件量及运维成本是根据调研设置的。这些参数尽可能的符合实际情况，但这些参数的确定不是重点，重点在于培养学生利用这些数据通过python建模、解决实际问题的能力。
												</div>
												<div className="text-p">
													在实验过程中，采用JupyterNotebook这一交互式的操作界面，利用仿真平台强大的计算资源，每操作一步能够得到及时的反馈和相应的计算结果。
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="pane justify">
								<ul className="list-inline pane-tabs">
									<li className="active">学生指导书</li>
									<li>教师指导书</li>
								</ul>
								<div className="knowledge-body">
									<div className="panes active">
										<div className="panes-body">
											学生指导书
										</div>
									</div>
									<div className="panes">
										<div className="panes-body">
											教师指导书
										</div>
									</div>
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
