import React, { useState } from 'react';
import get from 'lodash-es/get';
import { Dialog } from '@alifd/next';
import { container } from '@/utils/api';

export default ({ course, data = [] }) => {
  const [isRunning, setIsRunning] = useState({});
  const [containers, setContainers] = useState({});
  const onClick = () => Dialog.alert({
    title: '提示',
    content: '请先运行项目',
  });
  const onStart = (id, isStarted) => {
    if (isRunning[id] || isStarted) {
      Dialog.alert({
        title: '启动',
        content: '项目已经启动',
      });
    } else {
      Dialog.alert({
        title: '启动',
        content: '是否确定启动？',
        onOk: () => {
          container.start({
            data: {
              classroom: course.id,
              project: id,
            },
          }).then(({ data: { callback } }) => {
            setContainers({ ...containers, [id]: callback });
            setIsRunning({ ...isRunning, [id]: true });
          });
        },
      });
    }
  };
  const onStop = (id, isStarted) => {
    if (isRunning[id] || isStarted) {
      setIsRunning({ ...isRunning, [id]: false });
      container.stop({ params: { projectId: id } });
      Dialog.alert({
        title: '停止',
        content: '正在停止......',
      });
    } else {
      Dialog.alert({
        title: '停止',
        content: '项目未运行',
      });
    }
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
              <a href="javascript:void(0);" disabled onClick={() => onStart(project.id, project.running)} className="palyico " title="启动实验环境">▶</a>
              <a href="javascript:void(0);" onClick={() => onStop(project.id, project.running)} className="stopico noico" title="停止实验环境">▪</a>
              <a href="#" className="dataico noico" title="查看实验数据" data-toggle="modal" data-target="#dataloading">≡</a>
              {/* eslint-enable */}
            </h5>
          </div>
          <div id="courses" className="collapse">
            {get(project, 'labs', []).map(lab => (
              <div key={lab.id} className="list-group">
                {isRunning[project.id] || project.running ? (
                  <a href={project.labURL[lab.id] || get(containers[project.id], `labURL.${lab.id}`)} target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">{lab.name}</a>
                ) : (
                  <a onClick={onClick} className="list-group-item list-group-item-action">{lab.name}</a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="modal fade modaltop" id="dataloading" tabIndex="-1" role="dialog" aria-labelledby="dataloadingTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialogloading" role="document">
          <div className="loadingmodal-header" />
          <div className="modalloading">
            <div className="css-typing">
              <p className="starttime ">开始启动实验环境...</p>
              <p className="fright">✓</p>
              <p className="starttime time2">装载实验数据...</p>
              <p className="fright fright2">✓</p>
              <p className="starttime time3">启动实验容器...</p>
              <p className="fright fright3">✓</p>
              <p className="starttime time14">授权用户...</p>
              <p className="fright fright4">✓</p>
              <p className="starttime time5">装备跳转到实验环境</p>
              <p className="fright fright5">✓</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
