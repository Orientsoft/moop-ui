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
                <div className="faculty-text">实验项目负责人</div>
                <div className="row">
                    <div className="facu-bwz-2">
                        <div className="faculty-body text-center faculty-img">
                            <img className="img" src="images/faculty-2.png"/>
                            <p><i className="icon-user"></i><span style={{fontWeight: "bold"}}>张海军</span> &nbsp;&nbsp;教授</p>
                            <p>所在单位：北京物资学院</p>
                            <p>承担任务：项目总负责</p>
                        </div>
                    </div>
                    <div className="facu-bwz-9">
                        <div className="faculty-body ptext justify">
                        张海军，北京物资学院信息学院教授，大数据管理与应用专业负责人，硕士生导师，博士毕业于北京航空航天大学计算机应用技术专业，中国计算机学会会员。主要从事数据挖掘、推荐系统、商务智能方面的研究。主持或参与各类科研项目三十余项，包括北京市社科基金项目——“云计算环境下电子商务协同过滤安全问题研究”，国家自然基金项目——“基于货到人拣选模式的订单拣选优化问题研究”。对快递末端配送问题、国际贸易“单一窗口”系统进行过深入调研，主持的相关课题有：“北京市城乡快递末端配送公共服务平台建设研究”、“快递业服务于北京‘四个中心’政策体系研究”、北京“单一窗口”建设规划及运维机制研究。发表中英文论文三十余篇，其中有2篇发表在JCR Q1区期刊。主讲课程有《Python程序设计》、《物流分析与数据挖掘实训》、《数据分析与可视化技术》、《推荐系统》等。
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section pt-0">
            <div className="container-bwz">
                <div className="faculty-text">教学服务团队</div>
                <div className="row">
                    {/* <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="faculty-body text-center faculty-img">
                            <img className="img" src="images/faculty-1.png"/>
                            <p><i className="icon-user"></i><span style={{fontWeight: "bold"}}>周丽</span> &nbsp;&nbsp;教授</p>
                            <p>所在单位：北京物资学院</p>
                            <p>承担任务：项目总负责</p>
                        </div>
                    </div> */}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="faculty-body text-center faculty-img">
                            <img className="img" src="images/faculty-2.png"/>
                            <p><i className="icon-user"></i><span style={{fontWeight: "bold"}}>张海军</span> &nbsp;&nbsp;教授</p>
                            <p>所在单位：北京物资学院</p>
                            <p>承担任务：项目总负责</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="faculty-body text-center faculty-img">
                            <img className="img" src="images/faculty-3.png"/>
                            <p><i className="icon-user"></i><span style={{fontWeight: "bold"}}>陈蕾</span> &nbsp;&nbsp;副教授</p>
                            <p>所在单位：北京物资学院</p>
                            <p>承担任务：框架设计、项目协调</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="faculty-body text-center faculty-img">
                            <img className="img" src="images/lizhen.jpg" id="shen"/>
                            <p><i className="icon-user"></i><span style={{fontWeight: "bold"}}>李珍萍</span> &nbsp;&nbsp;教授</p>
                            <p>所在单位：北京物资学院</p>
                            <p>承担任务：教学方法设计</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="faculty-body text-center faculty-img">
                            <img className="img" src="images/shen.png" id="shen"/>
                            <p><i className="icon-user"></i><span style={{fontWeight: "bold"}}>申贵成</span> &nbsp;&nbsp;</p>
                            {/* <p>所在单位：北京物资学院</p> */}
                            <p>承担任务：教学方法设计</p>
                        </div>
                    </div>


                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="faculty-body text-center faculty-img">
                            <img className="img" src="images/faculty-5.png"/>
                            <p><i className="icon-user"></i><span style={{fontWeight: "bold"}}>郭风</span> &nbsp;&nbsp;副教授</p>
                            <p>所在单位：北京物资学院</p>
                            <p>承担任务：教学方法设计</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="faculty-body text-center faculty-img">
                            <img className="img" src="images/faculty-4.png"/>
                            <p><i className="icon-user"></i><span style={{fontWeight: "bold"}}>李锋</span> &nbsp;&nbsp;副教授</p>
                            <p>所在单位：北京物资学院</p>
                            <p>承担任务：实验方法设计</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="faculty-body text-center faculty-img">
                            <img className="img" src="images/faculty-6.png"/>
                            <p><i className="icon-user"></i><span style={{fontWeight: "bold"}}>岳溥庥</span> &nbsp;&nbsp;讲师</p>
                            <p>所在单位：北京物资学院</p>
                            <p>承担任务：实验方法设计</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="faculty-body text-center faculty-img">
                            <img className="img" src="images/faculty-7.png"/>
                            <p><i className="icon-user"></i><span style={{fontWeight: "bold"}}>韩丽华</span> &nbsp;&nbsp;讲师</p>
                            <p>所在单位：北京物资学院</p>
                            <p>承担任务：实验步骤设计</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </Fragment>
  );
};
