import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import get from 'lodash-es/get';
import CourseList from '@/components/CourseList';
import { getCurrentTenant } from '@/utils/helper';

export default () => {
  const tenant = getCurrentTenant();

  return (
    <Fragment>
      <div className="mainbg" style={{ backgroundImage: `url(${get(tenant, 'background', '/images/loginbg.png')})` }}>
        <div className="container">
          <div className="row p-b-120">
            <div className="col  m-t-60  p-b-60 text-center">
              <h1 className="large p-t-60 m-t-60 p-b-10">{get(tenant, 'remark', '')}</h1>
              <div className="m-t-60">
                <Link to="/courses" className="btn btn-lg startbtn m-r-15">在线实验</Link>
                <Link to="/courses" className="btn btn-lg startbtn whitebtn">专家入口</Link>
              </div>

            </div>
          </div>
        </div>
      </div>
      <span id="index1"></span>
      <div className="bg-eee p-t-80 p-b-60 bg-white">
        <div className="container ">
          <div className="row   procont" >
            <div className="col-12 col-md-6 ">
              <div className="feature text-left">
                <h2 className="large ">实验目的</h2>
                <p className="fade-1-4 p-b-10 m-t-40">电子商务与快递业的协同发展、迅猛增长，给人们的日常生活带来了便利。特别是在今年疫情防控期间，快递业有力保障了人们的居家隔离生活。然而快递派送乱象频发、效率低、成本高。因地制宜的布局快递自提网点，方便用户自提快件，有助于解决这一问题。</p>
                <p>本实验以北京城市副中心各小区的住户数来估计各小区的快递量，从百度地图上获取副中心区域内的便利店为备选自提网点，建立整数规划模型，用于自提网点的布局优化。通过本实验锻炼学生利用物流大数据解决问题的能力，具体而言通过本实验希望培养学生如下能力：</p>
                <p>掌握百度地图API的使用方法，能够获取地理数据，根据经纬度计算两点间的距离；<br />
                能够使用Python进行函数拟合；<br />
                掌握整数规划模型的分析建模方法；<br />
                能够使用Python调用Gurobi软件API求解整数规划问题；<br />
能够使用Python在百度地图上可视化展示快递自提网点布局结果。</p>
              </div>
            </div>
            <div className="col-12 col-md-6 text-right">
              <img src="/images/map1.gif" alt="" />
            </div>
          </div>
        </div>
      </div>
      <span id="index2"></span>
      <div className="main-container bgeee ">
        <div className="container p-t-60 text-center ">
          <div className="row" >
            <div className="col-12 col-md-2 "></div>
            <div className="col-12 col-md-8 ">
            <h2 className="large m-t-60 ">实验原理</h2>
            <p className="m-t-20 text-left"> 以快递末端自提网点布局这一问题为导向，分析建模所需要的数据，对于能够调研得到的数据采用真实调研的数据，对于无法调研得到或者调研有困难的数据设置一个合理的估计值，来模拟现实情况。涉及如下知识点：</p>
            </div>
            <div className="col-12 col-md-2 "></div>
            </div>
            <div className="row  p-t-30  p-b-120 procontsvg " >
            <div className="col-12 col-md-2 ">
              <div className="feature">
                {/* <img src="/images/icon1.svg" alt="" /> */}
                <h1 className="text-left">1</h1>
                <p className="fade-1-4 p-b-10 text-left">在百度地图上显示某一位置：编写python程序，读取各小区经纬度数据、各便利店经纬度数据，调用百度API将其显示在百度地图中。</p>
              </div>
            </div>
            <div className="col-12 col-md-2 ">
              <div className="feature ">
                {/* <img src="/images/icon1.svg" alt="" /> */}
                <h1 className="text-left">2</h1>
                <p className="fade-1-4 p-b-10 text-left">计算各便利店到各小区的距离，筛选出设立自提点的备选便利店：编写python程序，调用百度API计算两点间距离，将偏远的便利店从备选自提点中删除。</p>
              </div>
            </div>
            <div className="col-12 col-md-2 ">
              <div className="feature ">
                {/* <img src="/images/icon1.svg" alt="" /> */}
                <h1 className="text-left">3</h1>
                <p className="fade-1-4 p-b-10 text-left">用户自提意愿函数估计：根据用户自提意愿调查表，编写python程序拟合自提意愿与自提距离之间的关系。</p>
              </div>
            </div>
            <div className="col-12 col-md-2 ">
              <div className="feature ">
                {/* <img src="/images/icon1.svg" alt="" /> */}
                <h1 className="text-left">4</h1>
                <p className="fade-1-4 p-b-10 text-left">建立Gurobi整数规划模型，设置模型参数：有自提网点的固定成本、自提网点暂存的快递量、自提快件时节省的派件费用、用户自提意愿函数等。</p>
              </div>
            </div>
            <div className="col-12 col-md-2 ">
              <div className="feature ">
                <h1 className="text-left">5</h1>
                <p className="fade-1-4 p-b-10 text-left">求解整数规划模型：编写python程序求解整数规划模型。
</p>
              </div>
            </div>
            <div className="col-12 col-md-2 ">
              <div className="feature ">
                <h1 className="text-left">6</h1>
                <p className="fade-1-4 p-b-10 text-left">计算结果可视化：将求得的备选网点及其服务的小区展示在百度地图上。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span id="index3"></span>
      <div className="bg-eee p-t-80 p-b-60 bg-white">
        <div className="container p-b-60 text-center">
          <h2 className="large">实验仪器设备</h2>
          <p className="m-t-20"> 你可以作为以下三种角色使用实验室。</p>
          <div className="row p-t-30">
            <div className="logo-carousel">
              <ul className="slides">
                <li>
                  <a href="#"><img alt="Logo" src="/images/1.png" /> </a>
                  <p>Python</p>
                </li>
                <li>
                  <a href="#"> <img alt="Logo" src="/images/2.png" /> </a>
                  <p>Anaconda</p>
                </li>
                <li>
                  <a href="#"><img alt="Logo" src="/images/3.png" /></a>
                  <p>Jupyter</p></li>
                <li>
                  <a href="#"><img alt="Logo" src="/images/4.png" /></a>
                  <p>Pycharm</p>
                </li>
                <li>
                  <a href="#"> <img alt="Logo" src="/images/5.jpg" /></a>
                  <p>百度地图</p>
                </li>
                <li>
                  <a href="#"> <img alt="Logo" src="/images/6.png" /></a>
                  <p>Gurobi学生版</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section p-b-120 p-t-80 height300 bg-black">
        <div className="background-image-holder " >
        </div>
      </div>
      <span id="index4"></span>
      <div className=" bg-bottom p-t-80 p-b-60 main-container bg-white ">
        <div className="container ">
          <div className="row   procont" >
            <div className="col-12 col-md-5 ">
              <div className="feature text-left">
                <h2 className="large ">实验材料</h2>
                <ul className="p-t-30">
                  <li> → &nbsp;副中心各小区每天平均派件量、各小区经纬度数据</li>
                  <li>→ &nbsp;副中心各便利店及其经纬度数据</li>
                  <li>→ &nbsp;副中心各便利店每天最多暂存快件量</li>
                  <li>→ &nbsp;副中心各便利店暂存快件的固定成本、可变成本</li>
                  <li>→ &nbsp;副中心各便利店暂存快件的固定成本；</li>
                  <li>→ &nbsp;将快件暂存到便利店与送件到家相比节省的派件费用</li>
                  <li>→ &nbsp;用户自提意愿调查汇总表</li>
                  <li>→ &nbsp;百度地图API</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-7 text-right">
              <img src="/images/pro1.gif" alt="" />
            </div>
          </div>
        </div>
      
      </div>
      <span id="index5"></span>
      <div className="bg-bottom  p-t-80 p-b-60 ">
        <div className="container ">
          <div className="row   procont" >
            <div className="col-12 col-md-6 text-left">
              <img src="/images/dental.jpg" alt="" />
            </div>
            <div className="col-12 col-md-6 ">
              <div className="feature text-left">
                <h2 className="large ">实验教学方法</h2>
                <p className="fade-1-4 p-b-10 m-t-40">通过该实验，使学生掌握利用python读取数据、调用百度API计算两点间距离的方法，使学生掌握利用python建立数学模型并求解模型的方法，使学生掌握利用python与百度地图相结合可视化展示地理数据的方法。</p>
                <p>本项目采用线上教学与仿真实验项目相结合的教学方法，线上教学强调python基础知识讲解、百度API的调用、Gurobi软件与python联合编程，本实验将综合利用这些知识，解决快递末端自提网点布局这一实际问题，加深学生对所学知识的理解和掌握。在仿真实验过程中，各小区以及各便利店的经纬度数据是从网上爬取得来的实际数据，各小区快件量是根据小区住户数、副中心每天平均派件量推算出来的，各便利店每天暂存快件的上限是根据一定规则仿真产生的，快递员的工资及送件到家时每天派件量是实际调研得来的数据，箱式货车的送件量及运维成本是根据调研设置的。这些参数尽可能的符合实际情况，但这些参数的确定不是重点，重点在于培养学生利用这些数据通过python建模、解决实际问题的能力。</p>
                <p>在实验过程中，采用JupyterNotebook这一交互式的操作界面，利用仿真平台强大的计算资源，每操作一步能够得到及时的反馈和相应的计算结果。</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* <div className=" bg-bottom p-t-80 p-b-60 main-container bg-white">
        <div className="container p-b-60 text-center">
          <h2 className="large">实验室团队</h2>
          <p className="m-t-20">实验团队的介绍</p>
          <div className="row p-t-60 teacherimg">
            <div className="col-12 col-md-4 text-left m-t-20">
              <img alt="" src="/images/newbbie1.png" />
              <h5 className="m-t-20">老师</h5>
              <br />你可以提供精心编排的数据科学项目，帮助新手参考学习。
              </div>
            <div className="col-12 col-md-4 text-left m-t-20">
              <img alt="" src="/images/teacher1.png" />
              <h5 className="m-t-20">学生</h5>
              <br />你可以从一个有趣的数据分析课题出发，组装不同的实验项目，使用自己的数据，组队完成课题目标。
              </div>
            <div className="col-12 col-md-4 text-left m-t-20">
              <img alt="" src="/images/teacher2.jpg" />
              <h5 className="m-t-20">贡献者</h5><br />根据不同的数据科学项目，制作项目支持的镜像，并分发到不同的集群
            </div>
          </div>
        </div>
      </div> */}
      <span id="index6"></span>
      <div className="bg-bottom  p-t-80 p-b-60 bg-white">
        <div className="container ">
          <div className="row   " >
            <div className="col-12 col-md-12 p-b-60 ">
              <div className="feature text-left">
                <h2 className="large ">实验方法与步骤</h2>
                <div className="accordion p-t-30" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                          →  步骤1&nbsp;&nbsp;&nbsp;&nbsp;编写python程序，读取副中心各小区数据，包括小区名称、每天派件量、小区经纬度数据；
        </button>
                      </h2>
                    </div>

                    <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div className="card-body">
                        编写python程序，读取副中心各小区数据，包括小区名称、每天派件量、小区经纬度数据；
      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          →  步骤2&nbsp;&nbsp;&nbsp;&nbsp;编写python程序，调用百度api将这些小区显示在百度地图上
        </button>
                      </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div className="card-body">
                        编写python程序，调用百度api将这些小区显示在百度地图上； </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          →  步骤3&nbsp;&nbsp;&nbsp;&nbsp;读取副中心各便利店数据；
        </button>
                      </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                      <div className="card-body">
                        编写python程序，读取副中心各便利店数据，包括便利店名称、经纬度数据、暂存快件的固定成本、暂存快件的变动成本、每天暂存快件量上限；
      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading4">
                      <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapseThree">
                          →  步骤4&nbsp;&nbsp;&nbsp;&nbsp;调用百度api将这些便利店显示在百度地图上；
        </button>
                      </h2>
                    </div>
                    <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordionExample">
                      <div className="card-body">
                        调用百度api将这些便利店显示在百度地图上；
      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading5">
                      <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapseThree">
                          →  步骤5&nbsp;&nbsp;&nbsp;&nbsp;编写python程序，调用百度地图api，计算各便利店到各小区的距离，并保存到文件中；
        </button>
                      </h2>
                    </div>
                    <div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#accordionExample">
                      <div className="card-body">
                        编写python程序，调用百度地图api，计算各便利店到各小区的距离，并保存到文件中；

      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading6">
                      <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapseThree">
                          →  步骤6&nbsp;&nbsp;&nbsp;&nbsp;删去偏远的便利店，得到候选便利店；
        </button>
                      </h2>
                    </div>
                    <div id="collapse6" className="collapse" aria-labelledby="heading6" data-parent="#accordionExample">
                      <div className="card-body">
                        删去偏远的便利店，得到候选便利店；
      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading7">
                      <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapseThree">
                          →  步骤7&nbsp;&nbsp;&nbsp;&nbsp;读取用户自提意愿调查问卷统计结果，编写python程序，拟合自提意愿（自提百分比）关于自提距离的函数；
        </button>
                      </h2>
                    </div>
                    <div id="collapse7" className="collapse" aria-labelledby="heading7" data-parent="#accordionExample">
                      <div className="card-body">
                        读取用户自提意愿调查问卷统计结果，编写python程序，拟合自提意愿（自提百分比）关于自提距离的函数；<br />
                        <img src="/images/info1.jpg" width="300" />
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading8">
                      <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapseThree">
                          →  步骤8&nbsp;&nbsp;&nbsp;&nbsp;设置自提点固定成本；
        </button>
                      </h2>
                    </div>
                    <div id="collapse8" className="collapse" aria-labelledby="heading8" data-parent="#accordionExample">
                      <div className="card-body">
                        设置快递员平均每天的派件数量、平均工资；<br />
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading9">
                      <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse9" aria-expanded="false" aria-controls="collapseThree">
                          →  步骤9&nbsp;&nbsp;&nbsp;&nbsp;设置 快件暂存到便利店与送件到家相比节省的派件费用；
        </button>
                      </h2>
                    </div>
                    <div id="collapse9" className="collapse" aria-labelledby="heading9" data-parent="#accordionExample">
                      <div className="card-body">
                        设置轻型箱式货车每天的送件量及每天的运维成本；<br />
                   
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading10">
                      <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse10" aria-expanded="false" aria-controls="collapseThree">
                          →  步骤10&nbsp;&nbsp;&nbsp;&nbsp;设置便利店每天暂存快件量；
        </button>
                      </h2>
                    </div>
                    <div id="collapse10" className="collapse" aria-labelledby="heading10" data-parent="#accordionExample">
                      <div className="card-body">
                        计算一个快件采用箱式货车送到自提点与送件到家相比所能节约的派件费；<br />
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading11">
                      <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse11" aria-expanded="false" aria-controls="collapseThree">
                          →  步骤11&nbsp;&nbsp;&nbsp;&nbsp;建立整数规划模型，设置若干自提网点，这些自提网点每天暂存快件量是受限的，优化目标为最大化的节约派件费用；
        </button>
                      </h2>
                    </div>
                    <div id="collapse11" className="collapse" aria-labelledby="heading11" data-parent="#accordionExample">
                      <div className="card-body">
                        建立整数规划模型，设置若干自提网点，这些自提网点每天暂存快件量是受限的，优化目标为最大化的节约派件费用；<br />
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading12">
                      <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse12" aria-expanded="false" aria-controls="collapseThree">
                          →  步骤12&nbsp;&nbsp;&nbsp;&nbsp;编写python程序，调用Gurobi软件包，求解整数规划模型；
        </button>
                      </h2>
                    </div>
                    <div id="collapse12" className="collapse" aria-labelledby="heading12" data-parent="#accordionExample">
                      <div className="card-body">
                        编写python程序，调用Gurobi软件包，求解整数规划模型；<br />
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading13">
                      <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse13" aria-expanded="false" aria-controls="collapseThree">
                          →  步骤13&nbsp;&nbsp;&nbsp;&nbsp;将设置为自提点的便利店加载到百度地图中，可视化的输出；
        </button>
                      </h2>
                    </div>
                    <div id="collapse13" className="collapse" aria-labelledby="heading13" data-parent="#accordionExample">
                      <div className="card-body">
                        将设置为自提点的便利店加载到百度地图中，可视化的输出；<br />
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading14">
                      <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse14" aria-expanded="false" aria-controls="collapseThree">
                          →  步骤14&nbsp;&nbsp;&nbsp;&nbsp;学生考核：模型理解、数学功底，建模能力和编程能力等；
        </button>
                      </h2>
                    </div>
                    <div id="collapse14" className="collapse" aria-labelledby="heading14" data-parent="#accordionExample">
                      <div className="card-body">
                        改变上述参数，如用户的自提意愿、自提点的暂存快件量、快递员平均每天的派件量、快递员平均工资、箱式货车每天送件量以及运维成本等，在百度地图中标记出计算结果；<br />
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
