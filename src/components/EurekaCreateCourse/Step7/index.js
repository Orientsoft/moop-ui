import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@alifd/next';
import get from 'lodash-es/get';
import ProjectList from '@/components/ProjectList';

const { Row, Col } = Grid;

export default ({ labelSpan, wrapperSpan, setData, getLocalData, toNext }) => {
  const [selected, setSelected] = useState(get(getLocalData(1), 'projects', []));
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

  return (
    <div className="centminheight">
      <Row justify="center" className="m-t-20">
        <Col span={labelSpan + wrapperSpan}>
          <ProjectList data={selected} onStarted={onStarted} onStoped={onStoped} onMoveUp={onMoveUp} onMoveDown={onMoveDown} onDelete={onDelete} />
        </Col>
      </Row>
      <Row justify="center" className="m-t-20">
        <Col span={4}>
          <Button type="primary" onClick={() => toNext()} className="serverbtn">下一步</Button>
        </Col>
      </Row>
    </div>
  );
};
