import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Tag, Button, Grid, Checkbox, Pagination } from '@alifd/next';
import get from 'lodash-es/get';
import ProjectList from '@/components/ProjectList';
import { project as projectAPI } from '@/utils/api';

const { Row, Col } = Grid;

export default ({ labelSpan, wrapperSpan, setData, getData, toNext }) => {
  const [visible, setVisible] = useState(false);
  const [homework, setHomework] = useState(get(getData(), 'homework', false));
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [pagination, setPagination] = useState({ pageSize: 10, current: 1, total: 0 });
  const [selected, setSelected] = useState(get(getData(), 'projects', []));
  const [currentTag0, setCurrentTag0] = useState(null);
  const [currentTag, setCurrentTag] = useState(null);
  const onCancel = () => setVisible(false);
  const onOk = () => {
    setData({ projects: [...selected], homework });
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
    setPagination({ ...pagination, current: 1, total: 0 });
  };
  const onSelect = (isSelected, p) => {
    if (isSelected) {
      if (selected.indexOf(p.id) === -1) {
        setSelected([...selected, p]);
      }
    } else {
      const index = selected.findIndex(old => old.id === p.id);

      if (index !== -1) {
        selected.splice(index, 1);
        setSelected([...selected]);
      }
    }
  };

  useEffect(() => {
    projectAPI.categories().then(({ data }) => setCategories(data));
  }, []);
  useEffect(() => {
    if (currentTag) {
      projectAPI.selectAll({
        params: {
          tag: currentTag,
          page: pagination.current,
          pageSize: pagination.pageSize,
        },
      }).then(({ data }) => {
        setProjects(data.projects);
        setPagination({ ...pagination, total: data.meta.total });
      });
    }
  }, [pagination.current, currentTag]);

  return (
    <div className="centminheight">
      <Fragment>
        <Row justify="center">
          <Col span={labelSpan + wrapperSpan}>
            <Button type="primary" onClick={() => setVisible(true)}>添加实验模板</Button>
            <Checkbox style={{ marginLeft: 16 }} checked={homework} onChange={v => setHomework(v)}>是否包含作业</Checkbox>
          </Col>
        </Row>
        <Row justify="center" className="m-t-20">
          <Col span={labelSpan + wrapperSpan}>
            <ProjectList data={selected} onStarted={onStarted} onStoped={onStoped} onMoveUp={onMoveUp} onMoveDown={onMoveDown} onDelete={onDelete} />
          </Col>
        </Row>
        <Row justify="center" className="m-t-20">
          <Col span={4}>
            <Button type="primary" onClick={() => { setData({ projects: [...selected], homework }); toNext(); }} className="serverbtn">下一步</Button>
          </Col>
        </Row>
        <Dialog title="选择实验模版" shouldUpdatePosition closeable={false} hasMask={false} visible={visible} onOk={onOk} onCancel={onCancel} style={{ width: 680 }}>
          {/* <Tag.Group>
            {categories.reduce((all, { type }) => all.concat(type.map(({ id, name, count }) => (
              <Tag.Selectable checked={currentTag === id} key={id} onChange={() => onChange(id)} title={`${name}(${count})`}>{name}({count})</Tag.Selectable>
            ))), [])}
          </Tag.Group> */}
          <Tag.Group>
            {categories.map((cat, i) => {
              const total = cat.type.reduce((n, c) => n + c.count, 0);

              return total ? (
                <Tag.Selectable checked={currentTag0 === i} key={i} onChange={() => { if (currentTag0 === i) return; setProjects([]); setCurrentTag0(i); }} title={`${cat.category}(${total})`}>{cat.category}({cat.type.reduce((n, c) => n + c.count, 0)})</Tag.Selectable>
              ) : null;
            })}
          </Tag.Group>
          {currentTag0 !== null ? (
            <Tag.Group className="m-t-20">
              {categories[currentTag0].type.map(cat => (
                <Tag.Selectable checked={currentTag === cat.id} key={cat.id} onChange={() => { if (currentTag === cat.id) return; onChange(cat.id); }} title={`${cat.name}(${cat.count})`}>{cat.name}({cat.count})</Tag.Selectable>
              ))}
            </Tag.Group>
          ) : null}
          <Row wrap className="m-t-20">
            {projects.map(project => (
              <Col span={12} key={project.id}>
                <Checkbox disabled={!project.purchase} checked={Boolean(selected.length && selected.find(s => s.id === project.id))} onChange={isSelected => onSelect(isSelected, project)}>{project.title}</Checkbox>
              </Col>
            ))}
          </Row>
          <Row className="m-t-20" style={{ textAlign: 'center' }}>
            <Col span={24}>
              {pagination.total > pagination.pageSize && <Pagination type="simple" {...pagination} onChange={current => setPagination({ ...pagination, current })} />}
            </Col>
          </Row>
        </Dialog>
      </Fragment>
    </div>
  );
};
