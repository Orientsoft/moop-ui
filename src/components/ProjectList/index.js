import React from 'react';

export default () => {
  return (
    <div id="accordioncourse" className="courselist">
      <div className="card ">
        <div className="card-header" id="headingcourse1">
          <h5 className="mb-0">
            <button className="btn " data-toggle="collapse" data-target="#collapsecourse1" aria-expanded="true" aria-controls="collapsecourse1">
              实验项目1-Garch模型的实现-单变量
            </button>
            <a href="#" className="palyico" data-toggle="modal" data-target="#studentlist">▶</a>
            <a href="#" className="stopico">▪</a>
          </h5>
        </div>
        <div id="collapsecourse1" className="collapse " aria-labelledby="headingcourse1" data-parent="#accordioncourse">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action "  data-toggle="modal" data-target="#studentlist"><span className="learnLesson all"><i></i></span>→ Garch模型的实现-单变量 <span className="time">耗时10分钟</span></a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingcourse2">
          <h5 className="mb-0">
            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsecourse2" aria-expanded="false" aria-controls="collapsecourse2">
              实验项目2-Garch模型的实现-单变量
            </button>
            <a href="#" className="palyico">▶</a>
            <a href="#" className="stopico">▪</a>
          </h5>
        </div>
        <div id="collapsecourse2" className="collapse" aria-labelledby="headingcourse2" data-parent="#accordioncourse">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action"><span className="learnLesson half"><i></i></span>→ Garch模型的实现-单变量 <span className="time">耗时10分钟</span></a>
            <a href="#" className="list-group-item list-group-item-action"><span className="learnLesson"><i></i></span>→ Morbi leo risus <span className="time">耗时10分钟</span></a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingcourse3">
          <h5 className="mb-0">
            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsecourse3" aria-expanded="false" aria-controls="collapsecourse3">
                实验项目3-Garch模型的实现-单变量
            </button>
            <a href="#" className="palyico">▶</a>
            <a href="#" className="stopico">▪</a>
          </h5>
        </div>
        <div id="collapsecourse3" className="collapse" aria-labelledby="headingcourse3" data-parent="#accordioncourse">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action"><span className="learnLesson half"><i></i></span>→ Garch模型的实现-单变量 <span className="time">耗时10分钟</span></a>
            <a href="#" className="list-group-item list-group-item-action"><span className="learnLesson"><i></i></span>→ Morbi leo risus <span className="time">耗时10分钟</span></a>
          </div>
        </div>
      </div>
    </div>
  );
};
