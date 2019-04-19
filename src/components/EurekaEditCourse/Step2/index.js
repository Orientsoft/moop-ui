import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Tag, Button, Grid, Checkbox, Message } from '@alifd/next';
import get from 'lodash-es/get';
import ProjectList from '@/components/ProjectList';
import { project as projectAPI, classroom as classroomAPI } from '@/utils/api';

const { Row, Col } = Grid;

export default ({ labelSpan, wrapperSpan, setData, getData, setClassroom, getClassroom }) => {
  const [visible, setVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(get(getData(), 'projects', []));
  const [currentTag, setCurrentTag] = useState(null);
  const onCancel = () => setVisible(false);
  const onOk = () => {
    setData({ projects: [...selected] });
    onCancel();
  };
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
  const onChange = (id) => {
    setCurrentTag(id);
    setProjects([]);
    projectAPI.selectAll({ params: { tag: id } }).then(({ data }) => setProjects(data.projects));
  };
  const onSelect = (isSelected, p) => {
    if (isSelected) {
      if (selected.indexOf(p.id) === -1) {
        setSelected([...selected, p]);
      }
    } else {
      const index = selected.findIndex(old => old === p);
      if (index !== -1) {
        selected.splice(index, 1);
        setSelected(selected);
      }
    }
  };
  const onSubmit = () => {
    classroomAPI.update({
      data: {
        projects: selected.map(p => p.id),
      },
      params: { embed: 1 },
    }, { classroomId: getClassroom().id }).then(({ data }) => {
      setClassroom(data);
      setData({
        projects: data.projects,
      });
      Message.success('更新成功');
    }).catch(e => Dialog.alert({
      title: '保存失败',
      content: e.message,
    }));
  };

  useEffect(() => {
    projectAPI.categories().then(({ data }) => setCategories(data));
  }, []);

  return (
    <Fragment>
      <Row justify="center">
        <Col span={labelSpan + wrapperSpan}>
          <Button type="primary" onClick={() => setVisible(true)}>添加实验模板</Button>
        </Col>
      </Row>
      <Row justify="center" className="m-t-20">
        <Col span={labelSpan + wrapperSpan}>
          <ProjectList data={selected} onStarted={onStarted} onStoped={onStoped} onMoveUp={onMoveUp} onMoveDown={onMoveDown} onDelete={onDelete} />
        </Col>
      </Row>
      <Row justify="center" className="m-t-20">
        <Col span={4}>
          <Button type="primary" style={{ width: '100%' }} onClick={onSubmit}>保存</Button>
        </Col>
      </Row>
      <Dialog title="选择实验模版" shouldUpdatePosition closeable={false} hasMask={false} visible={visible} onOk={onOk} onCancel={onCancel} style={{ width: 680 }}>
        <Tag.Group>
          {categories.reduce((all, { type }) => all.concat(type.map(({ id, name, count }) => (
            <Tag.Selectable checked={currentTag === id} key={id} onChange={() => onChange(id)} title={`${name}(${count})`}>{name}({count})</Tag.Selectable>
          ))), [])}
        </Tag.Group>
        <Row>
          {projects.map(project => (
            <Col span={12} key={project.id}>
              <Checkbox onChange={isSelected => onSelect(isSelected, project)}>{project.title}</Checkbox>
            </Col>
          ))}
        </Row>
      </Dialog>
    </Fragment>
  );
};
