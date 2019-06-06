import React from 'react';
import { Table, Pagination } from '@alifd/next';
import get from 'lodash-es/get';

const { Column } = Table;

export default ({ dataSource, onDelete, onQuery, onSelect, ...tableProps }) => {
  return (
    <div style={{ marginTop: 15 }}>
      <Table dataSource={get(dataSource, 'data', [])} hasBorder={false} {...tableProps}>
        <Column title="分类名称" dataIndex="name" />
      </Table>
      <Pagination style={{ marginTop: 15, textAlign: 'center' }} total={get(dataSource, 'meta.total', 0)} pageSize={get(dataSource, 'meta.pageSize', 10)} onChange={page => onQuery({ params: { page } })} />
    </div>
  );
};
