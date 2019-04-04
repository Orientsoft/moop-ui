import React from 'react';
import get from 'lodash-es/get';

export default ({ data = [] }) => {
  return (
    <div id="accordioncourse" className="courselist">
      {data.map(project => (
        <div key={project.id} className="card">
          <div className="card-header" id="headingcourse1">
            <h5 className="mb-0">
              <button className="btn " data-toggle="collapse" data-target="#collapsecourse1" aria-expanded="true" aria-controls="collapsecourse1">
                {project.title}
              </button>
              <a href="#" className="palyico" data-toggle="modal" data-target="#studentlist">▶</a>
              <a href="#" className="stopico">▪</a>
            </h5>
          </div>
          <div id="collapsecourse1" className="collapse " aria-labelledby="headingcourse1" data-parent="#accordioncourse">
            {get(project, 'labs', []).map(lab => (
              <div key={lab.id} className="list-group">
                <a className="list-group-item list-group-item-action " data-toggle="modal" data-target="#studentlist"><span className="learnLesson all"><i /></span>→ {lab.name}<span className="time">耗时10分钟</span></a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
