import React, { Component } from 'react';
import queryString from 'query-string';
import get from 'lodash-es/get';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IntroBanner from './components/IntroBanner';
import BasicTab from './components/BasicTab';
import ProjectList from '../../components/ProjectList';
import Introduction from '../../components/Introduction';
import { classroom } from '../../utils/api';
import './index.scss';

export default class ClassroomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
    };
  }

  componentDidMount() {
    const { search } = this.props.location;

    if (search) {
      const parsed = queryString.parse(search);

      if (parsed.id) {
        classroom.select({
          params: { embed: 1 },
        }, { classroomId: parsed.id }).then(({ data }) => {
          this.setState({ detail: data });
        });
      }
    }
  }

  render() {
    const { detail } = this.state;

    return (
      <div>
        <Header />
        <IntroBanner data={detail} />
        <BasicTab />
        <div className="pro-container">
          <div className="pro-left">
            <h3 className="subtit">实验项目</h3>
            <ProjectList data={detail} />
            <h3 className="subtit">实验项目描述</h3>
            <div className="text-info">
              <p>{detail.description}</p>
            </div>
            <h3 className="subtit">预备知识</h3>
            <div className="text-info">
              <p>这个专业化教授Python 3中的编程基础。我们将从头开始，使用变量，条件和循环，并获得一些中间材料，如关键字参数，列表推导，lambda表达式和类继承。</p>
              <p>你将有很多练习的机会。 您还将学习推理程序执行的方法，以便它不再神秘，并且您可以在程序不工作时调试程序。</p>
            </div>
            <h3 className="subtit">考核内容</h3>
            <div className="text-info">
              <p>{detail.testPoint}</p>
            </div>
            <h3 className="subtit">参考资料</h3>
            <div className="text-info">
              <p>这个专业化教授Python 3中的编程基础。我们将从头开始，使用变量，条件和循环，并获得一些中间材料，如关键字参数，列表推导，lambda表达式和类继承。</p>
              <p>你将有很多练习的机会。 您还将学习推理程序执行的方法，以便它不再神秘，并且您可以在程序不工作时调试程序。</p>
            </div>
          </div>
          <div className="pro-right">
            <a href="#" className="list-group-item">实验项目</a>
            <a href="#" className="list-group-item">实验项目描述</a>
            <a href="#" className="list-group-item">预备知识</a>
            <a href="#" className="list-group-item">考核内容</a>
            <a href="#" className="list-group-item">参考资料</a>
          </div>
        </div>
        <hr />
        <div className="pro-container pd60">
          <h2 className="title">讲师</h2>
          {get(detail, 'assistants', []).map((data, i) => <Introduction key={i} data={data} />)}
        </div>
        <hr />
        <div className="pro-container pd60">
          <h2 className="title">常见问题</h2>
          <div className="QAcontent">
            <p>Q1：Python语言、C语言、Java语言、VB语言……到底哪种适合作为入门编程语言呢？</p>

            <p>A1：Python是最好的程序设计入门语言、也是最先进的程序设计语言。

            如果只想学一门程序设计语言，请学Python；如果想学一门最先进的程序设计语言，请学Python。

            更多教学讨论请参考：

            “Python语言: 程序设计课程教学改革的理想选择”，《中国大学教学》，2016年第2期

            https://d.wanfangdata.com.cn/Periodical/zgdxjx201602010</p>

          </div>
        </div>
        <Footer />
      </div> 
    );
  }
}

