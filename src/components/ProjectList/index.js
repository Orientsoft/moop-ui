import React, { useState } from 'react';
import get from 'lodash-es/get';
import { Dialog } from '@alifd/next';

export default ({ course, data = [] }) => {
  const [isRunning, setIsRunning] = useState({});
  const onClick = () => Dialog.alert({
    title: '提示',
    content: '请先运行项目',
  });
  const onStart = (id) => {
    Dialog.alert({
      title: '启动',
      content: '项目启动中......',
    });
  };
  const onStop = (id) => {
    Dialog.alert({
      title: '停止',
      content: '正在停止......',
    });
  };

  return (
    <div className="courselist">
      {data.map(project => (
        <div key={project.id} className="card">
          <div className="card-header">
            <h5 className="mb-0">
              <button className="btn" data-toggle="collapse" data-target="#courses" aria-expanded="true" aria-controls="courses">
                {project.title}
                <span style={{ fontSize: 13, marginLeft: 10 }}>(耗时：{project.timeConsume})</span>
              </button>
              {/* eslint-disable */}
              <a href="javascript:void(0);" disabled onClick={() => onStart(project.id)} className="palyico">▶</a>
              <a href="javascript:void(0);" onClick={() => onStop(project.id)} className="stopico">▪</a>
              {/* eslint-enable */}
            </h5>
          </div>
          <div id="courses" className="collapse">
            {get(project, 'labs', []).map(lab => (
              <div key={lab.id} className="list-group">
                {project.running ? (
                  <a href={lab.url} target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">{lab.name}</a>
                ) : (
                  <a onClick={onClick} className="list-group-item list-group-item-action">{lab.name}</a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
