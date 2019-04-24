import React, { Fragment, useState, useEffect } from 'react';
import { Dialog, Button, Input, Grid, Upload, Table, Message, Pagination } from '@alifd/next';
import { STUDENT_UPLOAD_URL, invitation } from '@/utils/api';
import get from 'lodash-es/get';

const { Row, Col } = Grid;

export default ({ getClassroom, labelSpan, wrapperSpan, history }) => {
  const [visible, setVisible] = useState(false);
  const [students, setStudents] = useState([]);
  const [pagination, setPagination] = useState({ total: 0, current: 1, pageSize: 10 });
  const [isLoading, setIsLoading] = useState(false);
  const [certifications, setCertifications] = useState('');
  const onSuccess = ({ response }) => setCertifications(`${certifications}\n${response.join('\n')}`);
  const getStudents = () => {
    setIsLoading(true);
    invitation.selectAll({
      params: {
        classroom: get(getClassroom(), 'id', ''),
        embed: 1,
        page: pagination.current,
        pageSize: pagination.pageSize,
      },
    }).then(({ data }) => {
      setStudents(data.data);
      setPagination({ ...pagination, total: data.total });
      setIsLoading(false);
    }).catch(() => setIsLoading(false));
  };
  const onOk = () => {
    const classroom = getClassroom();

    invitation.createBatch({
      data: {
        classroom: classroom.id,
        certifications: certifications.split(/\s/).map(c => c.trim()).filter(c => c),
      },
    }).then(() => {
      setCertifications('');
      getStudents();
    });
    setVisible(false);
  };
  const onDelete = (student) => {
    invitation.delete({}, { invitationId: student.id }).then(() => {
      Message.success('删除成功');
      getStudents();
    }).catch(() => Message.success('删除失败'));
  };
  const onPagination = current => setPagination({ ...pagination, current });

  useEffect(() => {
    getStudents();
  }, [pagination.current]);

  return (
    <div className="centminheight">
      <Fragment>
        <Row justify="center">
          <Col span={labelSpan + wrapperSpan}>
            <Button type="primary" disabled={!get(getClassroom(), 'status', 0)} onClick={() => setVisible(true)}>导入学生列表</Button>
            <span style={{ marginLeft: 10 }}>{get(getClassroom(), 'status', 0) ? '' : '已发布的专题才能添加学生'}</span>
            {students ? null : <div className="m-t-20">你还没有添加学生，请添加学生</div>}
          </Col>
        </Row>
        <Row justify="center" className="m-t-20">
          <Col span={labelSpan + wrapperSpan}>
            <Table loading={isLoading} dataSource={students}>
              <Table.Column dataIndex="invitee.certification" title="学生身份信息" />
              <Table.Column dataIndex="invitee.realname" title="姓名" />
              <Table.Column width={120} cell={(_, i, student) => <Button type="normal" warning onClick={() => onDelete(student)}>删除</Button>} title="操作" />
            </Table>
            <div className="m-t-10" style={{ textAlign: 'center' }}>
              <Pagination type="simple" {...pagination} onChange={onPagination} />
            </div>
          </Col>
        </Row>
        <Row justify="center" className="m-t-30">
          <Col span={4}>
            <Button type="primary" onClick={() => history.push(`/classroom?id=${getClassroom().id}`)} className="serverbtn">完成</Button>
          </Col>
        </Row>
        <Dialog title="添加学生" shouldUpdatePosition closeable={false} hasMask={false} visible={visible} onOk={onOk} onCancel={() => setVisible(false)} style={{ width: 680 }}>
          <Upload action={STUDENT_UPLOAD_URL} limit={1} listType="text" onSuccess={onSuccess}>
            <Button type="primary">上传 .csv 或 .xls(x) 文件</Button>
          </Upload>
          <p className="m-t-20">或粘贴学生信息</p>
          <Input.TextArea value={certifications} onChange={e => setCertifications(e)} style={{ width: '100%' }} rows={16} />
        </Dialog>
      </Fragment>
    </div>
  );
};
