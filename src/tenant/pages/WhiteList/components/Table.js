import React, { useState } from 'react';
import { Table, Grid, Button, Pagination } from '@alifd/next';
import moment from 'moment';
import get from 'lodash-es/get';
import { whitelist } from '../../../api';
import EditDialog from './EditDialog';

const { Row, Col } = Grid;
const { Column } = Table;

export default ({ dataSource, onDelete, onQuery, onSelect, ...tableProps }) => {
  const [visible, setVisible] = useState(false);
  const onSelectRow = (didSelect, record, records) => onSelect(records);
  const onSelectAll = (didSelect, records) => onSelect(records);
  const onUpdate = (data) => {
    whitelist.update({ data, params: { id: visible.id } }).then(() => {
      setVisible(false);
      onQuery();
    }).catch(() => {
      setVisible(false);
      onQuery();
    });
  };
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
      {visible && <EditDialog title="编辑" data={visible} onOk={onUpdate} onCancel={() => setVisible(false)} onClose={() => setVisible(false)} />}
      <Table dataSource={get(dataSource, 'data', [])} rowSelection={{ onSelect: onSelectRow, onSelectAll }} hasBorder={false} {...tableProps}>
        <Column title="真实姓名" dataIndex="realname" />
        <Column title="手机号码" dataIndex="mobile" />
        <Column title="操作人" dataIndex="operator" />
        <Column title="角色" dataIndex="roles" cell={data => (Array.isArray(data) ? data.map(item => item.name).join('，') : `${data}`)} />
        <Column title="操作时间" dataIndex="updatedAt" cell={data => moment(data).format('YYYY-MM-DD HH:mm:ss')} />
        <Column title="操作" dataIndex="action" width={180} cell={renderAction} />
      </Table>
      <Pagination style={{ marginTop: 15, textAlign: 'center' }} total={get(dataSource, 'meta.total', 0)} pageSize={get(dataSource, 'meta.pageSize', 10)} onChange={page => onQuery({ params: { page } })} />
    </div>
  );
};
