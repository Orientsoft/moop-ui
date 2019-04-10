import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <Fragment>
      <div className="bg-conttop p-t-60 p-b-60">
        <div className="container  text-left">
          <div className="row">
            <div className="col-12 col-md-7">
              <h2 className="large ">学生报告</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white ">
        <div className="container text-left m-t-40 p-b-60">
          <div className="row">
            <div className="col-sm-12">
              <form>
                <div className="form-group row">
                  <label className=" col-sm-2"></label>
                  <div className="col-sm-10 text-right">
                    <Link className="btn btn-primary " to="/classroom" >返回学生列表</Link>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 ">学生姓名：</label>
                  <div className="fonts2 col-sm-10 ">吴崇试</div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 ">学生身份信息：</label>
                  <div className="fonts2 col-sm-10">518092873898</div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 ">实验报告名称：</label>
                  <div className="fonts2 col-sm-10">有关 Python 3 学习报告体会</div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 ">实验报告：</label>
                  <div className="col-sm-10">
                    <p>
                      这个专业化教授Python 3中的编程基础。我们将从头开始，使用变量，条件和循环，并获得一些中间材料，如关键字参数，列表推导，lambda表达式和类继承。
                    </p>
                    <p>
                      1.将虚拟现实技术应用于教学中，代替了传统的实验设备，节约教学成本，节省实验室空间；<br />
                      2.熟悉虚实结合系统的开发环境；<br />
                      3.掌握智能生产线的组成及工作原理；<br />
                      4.掌握智能生产线的建模方法；<br />
                      5.掌握智能生产线的PLC控制编程；<br />
                      6.了解无人化/少人化生产的智能车间状况，学习柔性制造系统（FMS）基本原理，对生产线平衡等现代生产管理技术产生感性认识。
                    </p>
                    <p>
                      初始位置，整个生产线处于静止状态。电机Start按钮，然后点击供料按钮系统开始动作。系统启动后，供料模块将工件推出，机械手将工件抓取到传送带，通过传送带将其运送至加工模块，机械手将工件抓取至机床位置，机床对工件进行镗孔加工，待机床加工完成后，机械手再将工件抓取出来，放上传送带，传送带将工件运送至装配模块，机械手抓取工件来到夹具中进行装配动作，装配完成后，机械手抓取工件，并将其放在传送带上，此时全部加工工序完成，传送带将工件运送至分拣模块，分拣模块对装配零件进行检测，将按照颜色将工件分拣出来。
                    </p>
                    <p><a href="#" className="text-primary">展开/收起</a></p>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 ">评分</label>
                  <div className="col-sm-10">
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option>A+</option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                      <option>D</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 ">评语</label>
                  <div className="col-sm-10">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" />
                  </div>
                </div>
                <div className="form-group row m-t-20">
                  <label className="col-sm-2" />
                  <div className="col-sm-10">
                    <a href="createcourse.html" className="btn btn-primary  addcouse">提交</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
