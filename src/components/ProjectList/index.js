import React, { useState } from 'react';
import get from 'lodash-es/get';
import classnames from 'classnames';
import { Dialog, Button, Message } from '@alifd/next';
import Ellipsis from '@icedesign/ellipsis';
import { container, progress } from '@/utils/api';
import { getCurrentUser } from '@/utils/helper';
import consts from '@/utils/consts';

export default ({ course, data = [], onVisited, onStarted, onStoped, onMoveUp, onMoveDown, onDelete }) => {
  const [isRunning, setIsRunning] = useState({});
  const [isCommit, setIsCommit] = useState(false);
  const [containers, setContainers] = useState({});
  const [currentRunning, setCurrentRunning] = useState(false);
  const onClick = () => Dialog.alert({
    title: '提示',
    content: '请先运行项目',
  });
  const user = getCurrentUser();
  const onLearn = (labId) => {
    progress.create({
      data: {
        participant: user.id,
        classroom: course.id,
        message: { lab: labId },
      },
    });
  };
  const onRefresh = () => {
    if (onVisited) {
      onVisited();
    }
  };
  const onCommitHomework = (e, p) => {
    e.stopPropagation();
    setIsCommit(true);
    container.commitHomework({ data: { classroom: course.id, project: p.id } })
      .then(() => {
        setIsCommit(false);
        Message.success('作业已提交');
        if (onVisited) {
          onVisited();
        }
      }).catch(() => setIsCommit(false));
  };
  const onStart = (id, isStarted, e) => {
    if (Array.from(e.target.classList).indexOf('noico') !== -1) {
      return;
    }
    if (isRunning[id] || isStarted) {
      Dialog.alert({
        title: '启动',
        content: '项目已经启动',
      });
    } else {
      const postData = { project: id };
      let content = '是否确定启动？';

      if (course) {
        if (course.container) {
          content = (
            <span>
              已经启动实验：<a href={`/classroom?id=${course.container.classroom}`}>{course.container.classroom_name}</a>，是否强制关闭并启动当前实验？
            </span>
          );
        }
        postData.classroom = course.id;
      }
      Dialog.alert({
        title: '启动',
        content,
        onOk: () => {
          setCurrentRunning(true);
          container.start({ data: postData }).then(({ data: { callback } }) => {
            setContainers({ ...containers, [id]: callback });
            setIsRunning({ ...isRunning, [id]: true });
            setCurrentRunning(false);
            onStarted(id);
          }).catch(() => setCurrentRunning(false));
        },
      });
    }
  };
  const onStop = (id, isStarted, e) => {
    if (Array.from(e.target.classList).indexOf('noico') !== -1) {
      return;
    }
    if (isRunning[id] || isStarted) {
      Dialog.alert({
        title: '停止',
        content: '是否确认停止？',
        onOk: () => container.stop({ params: { projectId: id } }).then(() => {
          setIsRunning({ ...isRunning, [id]: false });
          onStoped(id);
        }),
      });
    } else {
      Dialog.alert({
        title: '停止',
        content: '项目未运行',
      });
    }
  };
  let shouldDisabled = data.some(project => project.running);

  if (user) {
    if (user.role === consts.user.STUDENT && !course.join) {
      shouldDisabled = true;
    }
  } else {
    shouldDisabled = true;
  }

  return (
    <div className="courselist">
      {data.map((project, i) => (
        <div key={project.id} className="card">
          <div className="card-header">
            <h5 className="mb-0">
              <button className="btn" data-toggle="collapse" data-target={`#courses${i}`} aria-expanded="true" aria-controls="courses">
                {project.title}
                <span style={{ fontSize: 13, marginLeft: 10 }}>(耗时：{project.timeConsume})</span>
              </button>
              {/* eslint-disable */}
              {onMoveUp && (
                <a href="javascript:void(0);" onClick={() => onMoveUp(project)} className="deleico" style={{ right: '100px' }}>↑</a>
              )}
              {onMoveDown && (
                <a href="javascript:void(0);" onClick={() => onMoveDown(project)} className="deleico" style={{ right: '135px' }}>↓</a>
              )}
              {onDelete && (
                <a href="javascript:void(0);" onClick={() => onDelete(project)} className="deleico" style={{ right: '170px' }}>×</a>
              )}
              <a href="javascript:void(0);" onClick={e => onStart(project.id, project.running, e)} className={classnames({ palyico: true, noico: project.running || shouldDisabled })} title="启动实验环境">▶</a>
              <a href="javascript:void(0);" onClick={e => onStop(project.id, project.running, e)} className={classnames({ stopico: true, noico: !project.running })} title="停止实验环境">▪</a>
              <a href={project.dataURL} target="_blank" className={classnames({ dataico: true, noico: !project.running })} title="查看实验数据">≡</a>
              {/* eslint-enable */}
            </h5>
          </div>
          <div id={`courses${i}`} className={classnames({ collapse: true, show: project.running })}>
            {get(project, 'labs', []).map(lab => (
              <div key={lab.id} className="list-group">
                {isRunning[project.id] || project.running ? (
                  <div onClick={onRefresh}>
                    <a href={get(project, `labURL.${lab.id}`, get(containers[project.id], `labURL.${lab.id}`))} onClick={() => onLearn(lab.id)} target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
                      <Ellipsis showTooltip style={{ width: '92%', paddingRight: 100 }} text={lab.name} />
                      {/hw$/.test(lab.id) && user && user.role === consts.user.STUDENT && course.join && course.homework && <Button loading={isCommit} onClick={e => onCommitHomework(e, project)} style={{ position: 'absolute', top: 10, right: 60 }}>提交作业</Button>}
                      {lab.finish && <span className="listiconright">✔</span>}
                    </a>
                  </div>
                ) : (
                  <a onClick={onClick} className="list-group-item list-group-item-action">
                    <Ellipsis showTooltip style={{ width: '92%', paddingRight: 100 }} text={lab.name} />
                    {/hw$/.test(lab.id) && user && user.role === consts.user.STUDENT && course.join && course.homework && <Button loading={isCommit} onClick={e => onCommitHomework(e, project)} style={{ position: 'absolute', top: 10, right: 60 }}>提交作业</Button>}
                    {lab.finish ? <span className="listiconright">✔</span> : <span className="listiconrightno">✔</span>}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="modal modaltop" style={{ display: currentRunning ? 'block' : 'none' }}>
        <div className="modal-dialog modal-dialogloading">
          <div className="loadingmodal-header" > 启动实验环境 </div>
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
              <p className="starttime time5">进入实验环境</p>
              <p className="fright fright5">✓</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
