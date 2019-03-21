import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IntroBanner from './components/IntroBanner';
import BasicTab from './components/BasicTab';


// import ProjectList from '../../components/ProjectList';
// import Introduction from '../../components/Introduction';

import './index.scss';

export default class ClassroomList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header {...this.props} />
        <IntroBanner />
        <BasicTab />
        <div className="pro-container pb80">
          <h3 className="subtit">实验项目描述</h3>
          <div className="text-secondary pt20">
            <table className="table table-bordered part-table ">
              <tbody>
                <tr>
                  <th>姓名</th>
                  <td>刘财</td>
                  <th>性别</th>
                  <td>男</td>
                  <th>出生年月</th>
                  <td>1963-09-26</td>
                </tr>
                <tr>
                  <th>学历</th>
                  <td>博士研究生</td>
                  <th>学位</th>
                  <td>博士</td>
                  <th>专业技术职务</th>
                  <td>教授</td>
                </tr>
                <tr>
                  <th>行政职务</th>
                  <td>实验中心主任</td>
                  <th>院系</th>
                  <td>吉林大学地球探测科学与技术学院</td>
                  <th>邮编</th>
                  <td>130026</td>
                </tr>
                <tr>
                  <th>地址</th>
                  <td colspan="5">吉林省长春市西民主大街938号</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-info pt20">
            <p>这个专业化教授Python 3中的编程基础。我们将从头开始，使用变量，条件和循环，并获得一些中间材料，如关键字参数，列表推导，lambda表达式和类继承。</p>
            <p>你将有很多练习的机会。 您还将学习推理程序执行的方法，以便它不再神秘，并且您可以在程序不工作时调试程序。</p>
          </div>
          <h3 className="subtit ">实验项目描述</h3>
          <div className="text-info ">
            <p>这个专业化教授Python 3中的编程基础。我们将从头开始，使用变量，条件和循环，并获得一些中间材料，如关键字参数，列表推导，lambda表达式和类继承。</p>
            <p>1.应用地球物理实践专题体系建设，吉林省重点教学项目 2003-2005</p>
              <p>2.应用地球物理卓越人才培养实践教学体系建设，吉林大学重大教学项目(ZD110410)，2011-2013</p>
              <p>3.固体地球物理学研究生专题体系建设，吉林大学研究生重点教学项目，2011-2013</p>
              <p>4.应用地球物理卓越人才培养实践教学体系建设，吉林省重点教研项目，2012-2015</p>
              <p>5.勘查技术与工程专业综合改革试点，吉林大学高校“专业综合改革试点”项目，2014-2016</p>
            <p>这个专业化教授Python 3中的编程基础。我们将从头开始，使用变量，条件和循环，并获得一些中间材料，如关键字参数，列表推导，lambda表达式和类继承。</p>
            <p>你将有很多练习的机会。 您还将学习推理程序执行的方法，以便它不再神秘，并且您可以在程序不工作时调试程序。</p>
            <p>这个专业化教授Python 3中的编程基础。我们将从头开始，使用变量，条件和循环，并获得一些中间材料，如关键字参数，列表推导，lambda表达式和类继承。</p>
            <p>你将有很多练习的机会。 您还将学习推理程序执行的方法，以便它不再神秘，并且您可以在程序不工作时调试程序。</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

