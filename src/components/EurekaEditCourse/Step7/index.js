import React, { useState } from 'react';
import { Button, Grid, Input, Dialog } from '@alifd/next';
import get from 'lodash-es/get';
import ProjectList from '@/components/ProjectList';
import { project as projectAPI } from '@/utils/api';

const { Row, Col } = Grid;

export default ({ labelSpan, wrapperSpan, setData, setLocalData, getLocalData, getClassroom, toNext }) => {
  const [selected, setSelected] = useState(get(getLocalData(1), 'projects', []));
  const [visible, setVisible] = useState(null);
  const [current, setCurrent] = useState(null);
  const [isAdd, setIsAdd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const room = getClassroom();
  const renderAddons = i => (
    <div style={{ textAlign: 'center', borderTop: '1px solid #ddd', padding: 10 }}>
      <Button type="primary" text onClick={e => onAddLab(e, i)}>添加实验</Button>
    </div>
  );
  const onStarted = (id) => {
    const project = selected.find(p => p.id === id);

    if (project) {
      project.running = true;
    }
    setSelected([...selected]);
  };
  const onStoped = (id) => {
    const project = selected.find(p => p.id === id);

    if (project) {
      project.running = false;
    }
    setSelected([...selected]);
  };
  const onMoveUp = (p) => {
    const index = selected.findIndex(s => s.id === p.id);
    if (index > 0) {
      const temp = selected[index];

      selected[index] = selected[index - 1];
      selected[index - 1] = temp;
      setSelected([...selected]);
    }
  };
  const onMoveDown = (p) => {
    const index = selected.findIndex(s => s.id === p.id);
    if (index !== -1 && index < selected.length - 1) {
      const temp = selected[index];
      selected[index] = selected[index + 1];
      selected[index + 1] = temp;
      setSelected([...selected]);
    }
  };
  const onDelete = (p) => {
    const index = selected.findIndex(s => s.id === p.id);
    if (index !== -1) {
      selected.splice(index, 1);
      setSelected([...selected]);
      setData({ projects: [...selected] });
    }
  };
  const onMoveItemUp = (e, lab, n, i) => {
    e.stopPropagation();
    e.preventDefault();
    if (n > 0) {
      selected[i].labs[n] = selected[i].labs[n - 1];
      selected[i].labs[n - 1] = lab;
      setSelected([...selected]);
    }
  };
  const onMoveItemDown = (e, lab, n, i) => {
    e.stopPropagation();
    e.preventDefault();
    if (n < selected[i].labs.length - 1) {
      selected[i].labs[n] = selected[i].labs[n + 1];
      selected[i].labs[n + 1] = lab;
      setSelected([...selected]);
    }
  };
  const onEditLab = (e, lab, n, i) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrent([i, n]);
    setVisible(lab);
  };
  const onDeleteLab = (e, lab, n, labs) => {
    e.stopPropagation();
    e.preventDefault();
    Dialog.confirm({
      title: '删除',
      content: `确认删除实验：${lab.name}?`,
      onOk: () => {
        labs.splice(n, 1);
        setSelected([...selected]);
      },
    });
  };
  const onAddLab = (e, i) => {
    e.stopPropagation();
    e.preventDefault();
    setIsAdd(true);
    setCurrent([i]);
    setVisible({ name: '', filename: '' });
  };
  const onDialogOk = () => {
    // on new lab
    if (isAdd) {
      selected[current[0]].labs.push(visible);
      setIsAdd(false);
    } else {
      Object.assign(selected[current[0]].labs[current[1]], visible);
    }
    setVisible(null);
    setCurrent(null);
    setSelected([...selected]);
  };
  const onRenderItem = (item, lab, n, labs, i) => {
    return (
      <div style={{ position: 'relative', display: 'inline-block', width: '94%' }}>
        <div>{item}</div>
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
          <Button type="primary" text style={{ marginLeft: 10 }} onClick={e => onMoveItemUp(e, lab, n, i)}>上移</Button>
          <Button type="primary" text style={{ marginLeft: 10 }} onClick={e => onMoveItemDown(e, lab, n, i)}>下移</Button>
          <Button type="primary" text style={{ marginLeft: 10 }} onClick={e => onEditLab(e, lab, n, i)}>编辑</Button>
          <Button type="primary" text style={{ marginLeft: 10 }} onClick={e => onDeleteLab(e, lab, n, labs, i)}>删除</Button>
        </div>
      </div>
    );
  };
  const onFinished = () => {
    if (room) {
      setIsLoading(true);
      projectAPI.rename({
        data: {
          classroom: room.id,
          project: selected.map(s => ({ id: s.id, lab_list: s.labs })),
        },
      }).then(({ data }) => {
        setLocalData(1, { projects: data.projects });
        setIsLoading(false);
      }).catch(() => setIsLoading(false));
    } else {
      toNext();
    }
  };

  return (
    <div className="centminheight">
      <Row justify="center" className="m-t-20">
        <Col span={10}>
          <span className="text-danger">* 注意：该步骤可编辑实验项目名称、调整实验项目顺序，启动实验环境后可编辑实验内容</span>
        </Col>
      </Row>
      <Row justify="center" className="m-t-20">
        <Col span={labelSpan + wrapperSpan}>
          <ProjectList data={selected} renderAddons={renderAddons} showFinishedIcon={false} onStarted={onStarted} onStoped={onStoped} onMoveUp={onMoveUp} onMoveDown={onMoveDown} onDelete={onDelete} onRenderItem={onRenderItem} canDelete={false} startArgs={{ edit: true, classroom: room ? room.id : '' }} />
        </Col>
      </Row>
      <Row justify="center" className="m-t-20">
        <Col span={4}>
          <Button type="primary" loading={isLoading} onClick={onFinished} className="serverbtn">保存</Button>
        </Col>
        <Col span={4}>
          <Button type="primary" onClick={() => toNext()} className="serverbtn">下一步</Button>
        </Col>
      </Row>
      {visible !== null ? (
        <Dialog title="编辑" style={{ width: 420 }} onOk={onDialogOk} visible closeable={false} onCancel={() => setVisible(null)}>
          <Row align="center">
            <Col span={4}>名称：</Col>
            <Col span={20}>
              <Input defaultValue={visible.name} onChange={e => setVisible({ ...visible, name: e })} style={{ width: '100%' }} />
            </Col>
          </Row>
          <Row align="center" style={{ marginTop: 10 }}>
            <Col span={4}>文件：</Col>
            <Col span={20}>
              <Input defaultValue={visible.filename} onChange={e => setVisible({ ...visible, filename: e })} style={{ width: '100%' }} />
            </Col>
          </Row>
        </Dialog>
      ) : null}
    </div>
  );
};
