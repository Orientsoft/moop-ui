import React from 'react';
import { Grid, Button, Dialog } from '@alifd/next';
import { classroom as classroomAPI } from '@/utils/api';

const { Row, Col } = Grid;

export default ({ getClassroom, setClassroom, getPostData, toNext }) => {
  const onOk = () => {
    Dialog.confirm({
      title: '创建专题',
      content: '确定保存专题？',
      onOk: () => new Promise((resolve) => {
        setTimeout(resolve, 1500);
      }).then(toNext),
    });
  };
  const onPublish = () => {
    const classroom = getClassroom();

    Dialog.confirm({
      title: '创建专题',
      content: '确定发布专题？',
      onOk: () => classroomAPI.update({ data: { status: 1 } }, { classroomId: classroom.id })
        .then(({ data }) => {
          setClassroom(data);
          toNext();
        }),
    });
  };

  return (
    <div className="centminheight ">
      <Row justify="center">
        <Col span={10} className="text-center">
          <h5>专题发布</h5>
          <p className="m-t-20 text-secondary">专题名称：{getPostData().title}</p>
          <div className="alert alert-warning" role="alert">
            请仔细阅读 <a href="#" className="alert-link">专题</a>. 发布你专题.
          </div>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={10} className="m-t-20 text-center">
          <Button type="secondary" onClick={onOk} className="noserverbtn m-r-10">完成创建保存</Button>
          <Button type="primary" onClick={onPublish} className="serverbtn ">完成创建并发布</Button>
        </Col>
      </Row>
    </div>
  );
};
