import React from 'react';
import { Grid, Button, Dialog } from '@alifd/next';
import { classroom as classroomAPI } from '@/utils/api';

const { Row, Col } = Grid;

export default ({ getClassroom, history }) => {
  const onOk = () => {
    const classroom = getClassroom();

    Dialog.confirm({
      title: '创建专题',
      content: '确定保存专题？',
      onOk: () => new Promise((resolve) => {
        setTimeout(resolve, 1500);
      }).then(() => history.push(`/classroom?id=${classroom.id}`)),
    });
  };
  const onPublish = () => {
    const classroom = getClassroom();

    Dialog.confirm({
      title: '创建专题',
      content: '确定发布专题？',
      onOk: () => classroomAPI.update({ data: { status: 1 } }, { classroomId: classroom.id })
        .then(() => history.push(`/classroom?id=${classroom.id}`)),
    });
  };

  return (
    <Row justify="center">
      <Col span={2}>
        <Button type="secondary" onClick={onOk}>完成创建</Button>
      </Col>
      <Col span={2}>
        <Button type="primary" onClick={onPublish}>完成创建并发布</Button>
      </Col>
    </Row>
  );
};
