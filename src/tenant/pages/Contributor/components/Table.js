import React from 'react';
import { Table, Grid, Button, Dialog, Pagination } from '@alifd/next';
import get from 'lodash-es/get';
import { teacher } from '../../../api';

const { Row, Col } = Grid;
const { Column } = Table;

export default ({ dataSource, onDelete, onQuery, onSelect, ...tableProps }) => {
  const onSelectRow = (didSelect, record, records) => onSelect(records);
  const onSelectAll = (didSelect, records) => onSelect(records);
  const onResetPassword = (record) => {
    Dialog.confirm({
      title: '重置密码',
      content: '重新生成随机密码并发送到用户手机号上？',
      onOk: () => teacher.resetPassword({ params: { id: record.id } }),
    });
  };
  const renderAction = (value, i, record) => (
    <Row justify="space-around" align="center">
      <Col>
        <Button type="normal" warning onClick={() => onDelete(record)}>删除</Button>
      </Col>
      <Col>
        <Button type="normal" onClick={() => onResetPassword(record)}>重置密码</Button>
      </Col>
    </Row>
  );

  return (
    <div style={{ marginTop: 15 }}>
      <Table dataSource={get(dataSource, 'data', [])} rowSelection={{ onSelect: onSelectRow, onSelectAll }} hasBorder={false} {...tableProps}>
        <Column title="用户名" dataIndex="name" width={200} />
        <Column title="真实姓名" dataIndex="realname" />
        <Column title="操作" dataIndex="action" width={180} cell={renderAction} />
      </Table>
      <Pagination style={{ marginTop: 15, textAlign: 'center' }} total={get(dataSource, 'meta.total', 0)} pageSize={get(dataSource, 'meta.pageSize', 10)} onChange={page => onQuery({ params: { page } })} />
    </div>
  );
};
