import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Tag, Button, Grid, Checkbox } from '@alifd/next';
import ProjectList from '@/components/ProjectList';
import { project } from '@/utils/api';

const { Row, Col } = Grid;
const { Group: TagGroup, Selectable: SelectableTag } = Tag;

const AddDialog = ({ save, projectList = [] }) => {
  const [visible, setVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(projectList);
  const [currentTag, setCurrentTag] = useState(null);
  const onOk = () => {
    save([...selected]);
    setVisible(false);
  };
  const onStarted = (id) => {
    const pro = selected.find(p => p.id === id);

    if (pro) {
      pro.running = true;
    }
    setSelected([...selected]);
  };
  const onStoped = (id) => {
    const pro = selected.find(p => p.id === id);

    if (pro) {
      pro.running = false;
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
      save([...selected]);
    }
  };
  const onChangeTag = (id) => {
    setCurrentTag(id);
    setProjects([]);
    queryProjects(id);
  };
  const onChange = (isSelected, id) => {
    if (isSelected) {
      if (selected.indexOf(id) === -1) {
        setSelected([...selected, id]);
      }
    } else {
      const index = selected.findIndex(oldId => oldId === id);
      if (index !== -1) {
        selected.splice(index, 1);
        setSelected(selected);
      }
    }
  };
  const queryProjects = (id) => {
    project.selectAll({ params: { tag: id } }).then(({ data }) => {
      setProjects(data.projects);
    });
  };

  useEffect(() => {
    project.categories().then(({ data }) => {
      setCategories(data);
    });
  }, []);

  return (
    <Fragment>
      <Button onClick={() => setVisible(true)}>添加实验模板</Button>
      <div className="m-t-20">
        <ProjectList data={selected} onStarted={onStarted} onStoped={onStoped} onMoveUp={onMoveUp} onMoveDown={onMoveDown} onDelete={onDelete} />
      </div>
      <Dialog title="选择实验模版" shouldUpdatePosition closeable={false} hasMask={false} visible={visible} onOk={onOk} onCancel={() => setVisible(false)} style={{ width: 680 }}>
        <TagGroup>
          {categories.reduce((all, { type }) => all.concat(type.map(({ id, name, count }) => (
            <SelectableTag checked={currentTag === id} key={id} onChange={() => onChangeTag(id)} title={`${name}(${count})`}>{name}({count})</SelectableTag>
          ))), [])}
        </TagGroup>
        <Row>
          {projects.map(p => (
            <Col span={12} key={p.id}>
              <Checkbox onChange={isSelected => onChange(isSelected, p.id)}>{p.title}</Checkbox>
            </Col>
          ))}
        </Row>
      </Dialog>
    </Fragment>
  );
};

export default (current, formValues) => {
  return [{
    label: '选择实验',
    required: true,
    render: () => <AddDialog save={data => formValues[current] = data} projectList={formValues[current].projects} />,
  }];
};
