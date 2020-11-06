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
                <div className="faculty-text">实验项目负责人</div>
                <div className="row">
                    <div className="facu-bwz-2">
                        <div className="faculty-body text-center faculty-img">
                            <img className="img" src="images/faculty-1.png"/>
                            <p><i className="icon-user"></i><span style={{fontWeight: "bold"}}>周丽</span> &nbsp;&nbsp;教授</p>
                            <p>所在单位：北京物资学院</p>
                            <p>承担任务：项目总负责</p>
                        </div>
                    </div>
                    <div className="facu-bwz-9">
                        <div className="faculty-body ptext justify">
                            周丽，辽宁盘锦人，管理学博士。现任北京物资学院信息学院教授、院长、博士生导师。研究方向为信息技术与管理，致力于智能物流领域的基础研究与开发工作，积极探索理论与实践创新，基于物流企业发展面临的实际问题，着眼于当前物流管理的国际前沿领域，深入进行原创性科学研究。主持国家自然科学基金项目1项、北京社科基金项目2项，在《管理世界》、《系统科学与数学》等核心期刊发表论文100余篇，获批专利12项，完成著作5部。2005年获北京市科学技术三等奖，2011年获得中国物流与采购联合会科学技术三等奖，2012年获得北京市科学技术协举办的“第十一届北京青年优秀科技论文”二等奖，2014年获中国物流与采购联合会科学技术二等奖。入选2017年北京市长城学者。入选2017年通州区“运河计划”领军人才。主要社会兼职有：北京运筹学会常务理事、北京系统工程学会理事、北京应用统计学会常务理事。自2006年任教以来，主讲过《统计学》、《抽样技术与应用》、《应用随机过程》等18门课程。主编教材《统计学》获批2019年北京市优质教材课件，《统计学》课程获批2020年北京市优质课程 ，带头开展线上线下混合式教学改革，建设中国大学MOOC《统计学》资源，融入课程思政，贯彻落实三全育人思想。教学工作量饱满，教学能力与水平受到学生一致认可，语言生动、耐心负责，学生课堂参与度高。获得2017年第九届、2019年第十届两次“挑战杯”首都大学生课外学术科技作品竞赛三等奖指导教师奖。2018年，主持“分类通识 多元进阶”的创新型智能物流信息人才培养体系构建”，获得北京市高等教育教学成果奖二等奖。连续每年指导本科生大创项目，累计指导已经毕业的硕士研究生40名，学生毕业后扎根于祖国各地区基层单位，大多数就职于各乡镇政府公务员或事业部门、扶贫办等，踏踏实实为国家贡献力量。
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section pt-0">
            <div className="container-bwz">
                <div className="faculty-text">教学服务团队</div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="faculty-body text-center faculty-img">
                            <img className="img" src="images/faculty-1.png"/>
                            <p><i className="icon-user"></i><span style={{fontWeight: "bold"}}>周丽</span> &nbsp;&nbsp;教授</p>
                            <p>所在单位：北京物资学院</p>
                            <p>承担任务：项目总负责</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="faculty-body text-center faculty-img">
                            <img className="img" src="images/faculty-2.png"/>
                            <p><i className="icon-user"></i><span style={{fontWeight: "bold"}}>张海军</span> &nbsp;&nbsp;副教授</p>
                            <p>所在单位：北京物资学院</p>
                            <p>承担任务：项目总协调</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="faculty-body text-center faculty-img">
                            <img className="img" src="images/faculty-3.png"/>
                            <p><i className="icon-user"></i><span style={{fontWeight: "bold"}}>陈蕾</span> &nbsp;&nbsp;副教授</p>
                            <p>所在单位：北京物资学院</p>
                            <p>承担任务：数据采集、实验过程设计</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="faculty-body text-center faculty-img">
                            <img className="img" src="images/faculty-4.png"/>
                            <p><i className="icon-user"></i><span style={{fontWeight: "bold"}}>李锋</span> &nbsp;&nbsp;副教授</p>
                            <p>所在单位：北京物资学院</p>
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
                            <img className="img" src="images/faculty-6.png"/>
                            <p><i className="icon-user"></i><span style={{fontWeight: "bold"}}>岳溥庥</span> &nbsp;&nbsp;讲师</p>
                            <p>所在单位：北京物资学院</p>
                            <p>承担任务：框架设计、实验方法设计</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="faculty-body text-center faculty-img">
                            <img className="img" src="images/faculty-7.png"/>
                            <p><i className="icon-user"></i><span style={{fontWeight: "bold"}}>韩丽华</span> &nbsp;&nbsp;讲师</p>
                            <p>所在单位：北京物资学院</p>
                            <p>承担任务：教学方法设计</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  );
};
