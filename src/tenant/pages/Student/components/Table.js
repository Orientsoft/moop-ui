import React, { useState } from 'react';
import { Table, Grid, Button, Pagination, Message } from '@alifd/next';
import get from 'lodash-es/get';
import EditDialog from './EditDialog';
import { student } from '../../../api';

const { Row, Col } = Grid;
const { Column } = Table;

export default ({ dataSource, onDelete, onQuery, onSelect, ...tableProps }) => {
  const [visible, setVisible] = useState(false);
  const onUpdate = (data) => {
    student.update({ data, params: { id: visible.id } }).then(() => {
      setVisible(false);
      onQuery();
    }).catch(() => {
      setVisible(false);
      onQuery();
    });
  };
  const onResetPassword = () => {
    student.resetPassword({ params: { id: visible.id } }).then(() => {
      Message.success('重置成功');
    });
  };
  const onSelectRow = (didSelect, record, records) => onSelect(records);
  const onSelectAll = (didSelect, records) => onSelect(records);
  const renderAction = (value, i, record) => (
    <Row justify="space-around" align="center">
      <Col>
        <Button type="primary" onClick={() => setVisible(record)}>编辑</Button>
      </Col>
      <Col>
        <Button type="normal" warning onClick={() => onDelete(record)}>删除</Button>
      </Col>
    </Row>
  );

  return (
    <div style={{ marginTop: 15 }}>
      {visible && <EditDialog title="编辑" data={visible} onResetPassword={onResetPassword} onOk={onUpdate} onCancel={() => setVisible(false)} onClose={() => setVisible(false)} />}
      <Table dataSource={get(dataSource, 'data', [])} rowSelection={{ onSelect: onSelectRow, onSelectAll }} hasBorder={false} {...tableProps}>
        <Column title="用户名" dataIndex="name" />
        <Column title="学号" dataIndex="certification" />
        <Column title="真实姓名" dataIndex="realname" />
        <Column title="性别" dataIndex="gender" width={100} cell={gender => get(['男', '女'], gender || 0)} />
        <Column title="备注" dataIndex="remark" />
        <Column title="操作" dataIndex="action" width={160} cell={renderAction} />
      </Table>
      <Pagination style={{ marginTop: 15, textAlign: 'center' }} total={get(dataSource, 'meta.total', 0)} pageSize={get(dataSource, 'meta.pageSize', 10)} onChange={page => onQuery({ params: { page } })} />
    </div>
  );
};
